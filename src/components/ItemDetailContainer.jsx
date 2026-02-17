import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../mock/asyncData"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    getProducts().then((res) => {
      // Usamos Number(itemId) porque los IDs en tu mock suelen ser números
      setProduct(res.find(p => p.id === Number(itemId)))
    })
  }, [itemId, setProduct]) // 🔥 Agregamos setProduct aquí

  if (!product) return <h2 className="text-center my-5">Cargando...</h2>

  return <ItemDetail product={product} />
}

export default ItemDetailContainer

