import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Item = ({ prod }) => {
  return (
    <Card className="h-100 shadow-lg border-0 rounded-4 overflow-hidden">
      <Card.Img
        variant="top"
        src={prod.img}
        className="img-fluid"
        style={{ height: '220px', objectFit: 'cover' }}
      />

      <Card.Body className="d-flex flex-column text-center p-4">
        <Card.Title className="fw-semibold fs-5">{prod.name}</Card.Title>

        <Card.Text className="fw-semibold fs-5 text-danger my-2">
          ${prod.price},00 MX
        </Card.Text>

        <Button as={Link} to={`/item/${prod.id}`} variant="danger" className="rounded-pill px-4 mt-auto">
          ✨ Ver más
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Item
