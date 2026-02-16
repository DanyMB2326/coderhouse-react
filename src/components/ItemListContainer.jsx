import { useEffect, useReducer } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../mock/asyncData'
import ItemList from './ItemList'

const initialState = {
  data: [],
  loading: true,
  error: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { data: [], loading: true, error: '' }
    case 'success':
      return { data: action.payload, loading: false, error: '' }
    case 'error':
      return { data: [], loading: false, error: action.payload }
    default:
      return state
  }
}

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams()
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    dispatch({ type: 'start' })

    const request = categoryId ? getProductsByCategory(categoryId) : getProducts()

    request
      .then((res) => dispatch({ type: 'success', payload: res }))
      .catch((err) => dispatch({ type: 'error', payload: err }))
  }, [categoryId])

  return (
    <div className="container my-5 py-5">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10 text-center">
          <div className="p-5 hero-card-magic">
            <div style={{ fontSize: '3rem', marginBottom: '-10px' }}>°o°</div>

            <h1 className="display-4 fw-bold mb-3" style={{ color: '#000000' }}>
              {greeting}
            </h1>

            <p className="lead mb-4 text-muted" style={{ fontSize: '1.2rem' }}>
              Donde cada sorbo es una aventura y cada bocado tiene polvo de hadas.
            </p>

            {categoryId && <p className="badge text-bg-dark fs-6 mb-4">Categoría: {categoryId}</p>}

            {state.loading && <p className="mt-4">Cargando productos...</p>}
            {!state.loading && state.error && <p className="text-danger mt-4">{state.error}</p>}
            {!state.loading && !state.error && <ItemList data={state.data} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer
