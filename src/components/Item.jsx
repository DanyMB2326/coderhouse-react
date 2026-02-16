import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Item = ({ prod }) => {
  return (
    <Card className="item-card h-100 shadow-lg border-0 rounded-4 overflow-hidden">

      {/* Imagen */}
      <div className="img-container">
        <Card.Img
          variant="top"
          src={prod.img}
          className="item-img"
        />
      </div>

      {/* Cuerpo */}
      <Card.Body className="d-flex flex-column text-center p-4">

        <Card.Title className="fw-semibold fs-5">
          {prod.name}
        </Card.Title>

        <Card.Text className="fw-semibold fs-5 text-danger my-2">
          ${prod.price},00 MX
        </Card.Text>

        {/* 🔥 BOTÓN QUE VA AL DETALLE */}
        <Link to={`/item/${prod.id}`} className="mt-auto">
          <Button
            variant="danger"
            className="btn-magic rounded-pill px-4 w-100"
          >
            ✨ Ver más
          </Button>
        </Link>

      </Card.Body>

    </Card>
  )
}

export default Item


