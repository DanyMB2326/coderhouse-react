import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, title, price, image, category, stock }) => {
  return (
    <article className="item-card">
      <Link to={`/item/${id}`} className="item-image-wrapper">
        <img src={image} alt={title} className="item-image" loading="lazy" />
        {stock === 0 && <div className="item-sold-out">✨ Sin stock</div>}
        <span className="tag item-category">{category}</span>
      </Link>
      <div className="item-body">
        <h3 className="item-title">{title}</h3>
        <div className="item-footer">
          <span className="item-price">${price.toLocaleString('es-MX')} MX</span>
          <Link to={`/item/${id}`} className="btn-primary item-btn">
            ✨ Ver más
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item;


