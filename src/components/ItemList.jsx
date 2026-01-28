import React from 'react'
import Item from './Item'

const ItemList = ({ data }) => {
  return (
    <div className="row g-4 mt-4 justify-content-center">
      {data.map((prod) => (
        <div
          key={prod.id}
          className="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <Item prod={prod} />
        </div>
      ))}
    </div>
  )
}

export default ItemList
