import { useParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useFirestore';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader/Loader';
import './ItemListContainer.css';

const CATEGORY_LABELS = {
  elixires: 'Elixires',
  pasteleria: 'Pastelería Encantada',
  mercancia: 'Mercancía Mágica',
};

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProducts(categoryId || null);

  const title = categoryId ? CATEGORY_LABELS[categoryId] ?? categoryId : 'Bienvenido a Mickey\'s Magic Brew';
  const subtitle = categoryId
    ? `Descubre nuestra selección de ${CATEGORY_LABELS[categoryId] ?? categoryId}.`
    : 'Donde cada sorbo y cada bocado tiene magia.';

  return (
    <section className="item-list-container">
      {/* Hero banner (only on home) */}
      {!categoryId && (
        <div className="hero-banner">
          <div className="hero-sparkles" aria-hidden="true">
            {['✨','⭐','🌟','✨','⭐','🌟','✨'].map((s, i) => (
              <span key={i} className="sparkle" style={{ '--i': i }}>{s}</span>
            ))}
          </div>
          <div className="hero-content">
            <p className="hero-eyebrow">🏰 El reino te da la bienvenida</p>
            <h1 className="hero-title">Mickey's Magic Brew</h1>
            <p className="hero-sub">
              Bebidas encantadas, pasteles mágicos y recuerdos para llevar.<br />
              Una experiencia Disney en cada visita.
            </p>
          </div>
        </div>
      )}

      <div className="section-header">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>

      {loading && <Loader text="Preparando la magia..." />}

      {error && (
        <div className="state-container">
          <span className="state-icon">⚠️</span>
          <h2>¡Algo salió mal!</h2>
          <p>{error}</p>
        </div>
      )}

      {!loading && !error && products.length === 0 && (
        <div className="state-container">
          <span className="state-icon">🧺</span>
          <h2>Sin productos en esta sección</h2>
          <p>Pronto habrá magia aquí. ¡Volvé más tarde!</p>
        </div>
      )}

      {!loading && !error && products.length > 0 && (
        <ItemList products={products} />
      )}
    </section>
  );
};

export default ItemListContainer;