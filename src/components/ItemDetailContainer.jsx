import { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../mock/asyncData'
import ItemDetail from './ItemDetail'

const initialState = {
  product: null,
  loading: true,
  error: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { product: null, loading: true, error: '' }
    case 'success':
      return { product: action.payload, loading: false, error: '' }
    case 'error':
      return { product: null, loading: false, error: action.payload }
    default:
      return state
  }
}

const ItemDetailContainer = () => {
  const { itemId } = useParams()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'start' })

    getProductById(itemId)
      .then((res) => dispatch({ type: 'success', payload: res }))
      .catch((err) => dispatch({ type: 'error', payload: err }))
  }, [itemId])

  if (state.loading) {
    return <p className="text-center my-5">Cargando detalle del producto...</p>
  }

  if (state.error) {
    return <p className="text-center text-danger my-5">{state.error}</p>
  }

  return <ItemDetail product={state.product} />
}

export default ItemDetailContainer
