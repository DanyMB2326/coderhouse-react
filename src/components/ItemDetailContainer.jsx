import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncData"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res.find(p => p.id === Number(itemId)))
    })
  }, [itemId])

  if (!product) return <h2 className="text-center my-5">Cargando...</h2>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer

