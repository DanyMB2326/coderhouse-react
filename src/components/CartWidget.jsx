import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const CartWidget = () => {
  return (
    <div className="d-flex align-items-center cart-widget-container" style={{ cursor: 'pointer' }}>
      <div className="position-relative p-2">
        <FaShoppingCart size={28} color="#F9D616" />
        
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-2 border-dark" style={{fontSize: '0.8rem'}}>
          0
          <span className="visually-hidden">items en el carrito</span>
        </span>
      </div>
    </div>
  );
};

export default CartWidget;