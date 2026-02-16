import React from "react"
import ItemCount from "./ItemCount"

const ItemDetail = ({ product }) => {
  return (
    <div className="container my-5">

      <div className="row justify-content-center">

        <div className="col-md-6 text-center">

          <img
            src={product.img}
            alt={product.name}
            className="img-fluid rounded mb-4"
          />

          <h2>{product.name}</h2>

          <p className="fs-4 text-danger">
            ${product.price},00 MX
          </p>

          <p className="text-muted">
            Categoría: {product.category}
          </p>

          {/* Contador */}
          <ItemCount stock={10} />

        </div>

      </div>

    </div>
  )
}

export default ItemDetail
