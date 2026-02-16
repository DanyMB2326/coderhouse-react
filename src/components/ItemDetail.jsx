import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

const ItemDetail = ({ product }) => {
  return (
    <div className="container my-5">
      <Card className="mx-auto shadow-lg border-0 rounded-4" style={{ maxWidth: '760px' }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={product.img}
              alt={product.name}
              className="img-fluid h-100 w-100 rounded-start-4"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-7">
            <Card.Body className="p-4 d-flex flex-column gap-2">
              <span className="badge text-bg-secondary align-self-start">{product.category}</span>
              <Card.Title className="fs-3 fw-bold">{product.name}</Card.Title>
              <Card.Text className="text-muted">{product.description}</Card.Text>
              <Card.Text className="fw-semibold fs-5 text-danger">${product.price},00 MX</Card.Text>
              <Card.Text className="small">Stock disponible: {product.stock}</Card.Text>

              <ItemCount stock={product.stock} />

              <Link className="btn btn-outline-dark mt-3" to="/">
                Volver al catálogo
              </Link>
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ItemDetail
