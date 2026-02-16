import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncData"
import ItemList from "./ItemList"

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((res) => {
        if (categoryId) {
          setData(res.filter(prod => prod.category === categoryId))
        } else {
          setData(res)
        }
      })
      .catch(console.log)
  }, [categoryId])

  return (
    <div className="container my-5">
      {greeting && <h1>{greeting}</h1>}
      <ItemList data={data} />
    </div>
  )
}

export default ItemListContainer
