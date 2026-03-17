import { useState } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp, writeBatch, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { db } from '../../firebase/config';
import { useCart } from '../../context/CartContext';
import Loader from '../Loader/Loader';
import './CheckOutForm.css';

const INITIAL_FORM = {
  name: '',
  lastName: '',
  email: '',
  emailConfirm: '',
  phone: '',
};

const CheckOutForm = () => {
  const { cartItems, totalPrice, clearCart } = useCart();

  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);

  // ── Redirect if cart is empty ─────────────────────────────────────────────
  if (cartItems.length === 0 && !orderId) {
    return (
      <div className="state-container">
        <span className="state-icon">🛒</span>
        <h2>Tu carrito está vacío</h2>
        <p>Necesitás agregar productos mágicos antes de continuar.</p>
        <Link to="/" className="btn-primary" style={{ marginTop: '0.5rem' }}>
          ✨ Explorar el reino
        </Link>
      </div>
    );
  }

  // ── Order confirmation screen ─────────────────────────────────────────────
  if (orderId) {
    return (
      <div className="order-success">
        <div className="success-icon">🎉</div>
        <h1 className="success-title">✨ ¡Gracias por tu pedido mágico!</h1>
        <p className="success-sub">Tu pedido fue registrado con éxito.</p>
        <div className="success-order-id">
          <span className="tag">ID de orden</span>
          <code className="order-code">{orderId}</code>
        </div>
        <p className="success-note">
          Guarda este código. Te lo enviaremos también a <strong>{form.email}</strong>.
        </p>
        <Link to="/" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  // ── Validation ────────────────────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'El nombre es requerido.';
    if (!form.lastName.trim()) errs.lastName = 'El apellido es requerido.';
    if (!form.email.trim()) errs.email = 'El email es requerido.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'El email no es válido.';
    if (form.email !== form.emailConfirm) errs.emailConfirm = 'Los emails no coinciden.';
    if (!form.phone.trim()) errs.phone = 'El teléfono es requerido.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  // ── Submit order ──────────────────────────────────────────────────────────
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setLoading(true);

    try {
      // 1. Check stock for each item
      const batch = writeBatch(db);
      const outOfStock = [];

      for (const item of cartItems) {
        const productRef = doc(db, 'products', item.id);
        const productSnap = await getDoc(productRef);

        if (!productSnap.exists()) {
          outOfStock.push(item.title);
          continue;
        }

        const currentStock = productSnap.data().stock;
        if (currentStock < item.quantity) {
          outOfStock.push(`${item.title} (stock disponible: ${currentStock})`);
        } else {
          batch.update(productRef, { stock: currentStock - item.quantity });
        }
      }

      if (outOfStock.length > 0) {
        toast.error(`Stock insuficiente: ${outOfStock.join(', ')}`);
        setLoading(false);
        return;
      }

      // 2. Create the order document in Firestore
      const order = {
        buyer: {
          name: `${form.name} ${form.lastName}`,
          email: form.email,
          phone: form.phone,
        },
        items: cartItems.map(({ id, title, price, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        total: totalPrice,
        date: serverTimestamp(),
        status: 'pending',
      };

      const ordersRef = collection(db, 'orders');
      const orderDoc = await addDoc(ordersRef, order);

      // 3. Commit stock updates
      await batch.commit();

      setOrderId(orderDoc.id);
      clearCart();
    } catch (err) {
      console.error(err);
      toast.error('Ocurrió un error al procesar la orden. Intentá nuevamente.');
    } finally {
      setLoading(false);
    }
  };

  // ── Render form ───────────────────────────────────────────────────────────
  return (
    <section className="checkout-page">
      <div className="section-header">
        <h1>Finalizar compra</h1>
        <p>Completá tus datos para confirmar el pedido.</p>
      </div>

      <div className="checkout-layout">
        {/* Form */}
        <div className="checkout-form-wrap">
          <form onSubmit={handleSubmit} noValidate className="checkout-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Juan"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'input-error' : ''}
                />
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Apellido</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Pérez"
                  value={form.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? 'input-error' : ''}
                />
                {errors.lastName && <span className="field-error">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+54 11 0000-0000"
                value={form.phone}
                onChange={handleChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <span className="field-error">{errors.phone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={form.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
              />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="emailConfirm">Confirmar email</label>
              <input
                id="emailConfirm"
                name="emailConfirm"
                type="email"
                placeholder="tu@email.com"
                value={form.emailConfirm}
                onChange={handleChange}
                className={errors.emailConfirm ? 'input-error' : ''}
              />
              {errors.emailConfirm && <span className="field-error">{errors.emailConfirm}</span>}
            </div>

            <button
              type="submit"
              className="btn-primary checkout-submit"
              disabled={loading}
            >
              {loading ? 'Procesando...' : 'Confirmar orden →'}
            </button>
          </form>

          {loading && <Loader text="Procesando tu orden..." />}
        </div>

        {/* Order review */}
        <aside className="checkout-summary">
          <h2 className="summary-title">Tu pedido</h2>
          <div className="summary-lines">
            {cartItems.map((item) => (
              <div key={item.id} className="summary-line">
                <span className="summary-line-label">
                  {item.title} <em>×{item.quantity}</em>
                </span>
                <span className="summary-line-value">
                  ${(item.price * item.quantity).toLocaleString('es-MX')}
                </span>
              </div>
            ))}
          </div>
          <div className="summary-divider" />
          <div className="summary-total">
            <span>Total</span>
            <span className="summary-total-value">
              ${totalPrice.toLocaleString('es-MX')}
            </span>
          </div>
          <Link to="/cart" className="btn-ghost" style={{ fontSize: '0.82rem', marginTop: '0.25rem' }}>
            ← Editar carrito
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default CheckOutForm;