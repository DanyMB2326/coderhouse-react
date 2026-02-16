import { useState } from 'react'

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1)

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  const restar = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  return (
    <div className="d-flex align-items-center gap-2 flex-wrap">
      <button className="btn btn-danger" onClick={restar}>-</button>
      <span className="btn btn-light border">{count}</span>
      <button className="btn btn-success" onClick={sumar}>+</button>
      <button className="btn btn-primary">Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
