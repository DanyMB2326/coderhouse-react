const productos = [
  {
    id: '01',
    name: 'Latte Encantado',
    description: 'Espresso suave con leche vaporizada y un toque de canela mágica.',
    stock: 20,
    price: 250,
    category: 'cafes',
    img: 'https://picsum.photos/id/102/700/700',
  },
  {
    id: '02',
    name: 'Capuccino Real',
    description: 'Crema aireada, espresso intenso y cacao para una experiencia inolvidable.',
    stock: 15,
    price: 290,
    category: 'cafes',
    img: 'https://picsum.photos/id/431/700/700',
  },
  {
    id: '03',
    name: 'Cupcake de Hadas',
    description: 'Cupcake de vainilla con frosting de frutos rojos y chispas de fantasía.',
    stock: 30,
    price: 180,
    category: 'pasteleria',
    img: 'https://picsum.photos/id/312/700/700',
  },
  {
    id: '04',
    name: 'Galletas del Castillo',
    description: 'Galletas de mantequilla recién horneadas, ideales para acompañar tu café.',
    stock: 25,
    price: 150,
    category: 'pasteleria',
    img: 'https://picsum.photos/id/1080/700/700',
  },
  {
    id: '05',
    name: 'Taza Mickey\'s Edition',
    description: 'Taza edición limitada para disfrutar tu bebida favorita con estilo mágico.',
    stock: 10,
    price: 420,
    category: 'merch',
    img: 'https://picsum.photos/id/20/700/700',
  },
  {
    id: '06',
    name: 'Termo Aventurero',
    description: 'Termo térmico con diseño exclusivo para llevar la magia a todas partes.',
    stock: 12,
    price: 560,
    category: 'merch',
    img: 'https://picsum.photos/id/26/700/700',
  },
]

const error = false

const withDelay = (callback) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject('Hubo un error, intente más tarde')
      } else {
        resolve(callback())
      }
    }, 800)
  })

export const getProducts = () => withDelay(() => productos)

export const getProductsByCategory = (categoryId) =>
  withDelay(() => productos.filter((product) => product.category === categoryId))

export const getProductById = (id) =>
  withDelay(() => {
    const product = productos.find((item) => item.id === id)
    if (!product) {
      throw new Error('Producto no encontrado')
    }
    return product
  }).catch((errorMessage) => {
    if (errorMessage instanceof Error) {
      return Promise.reject(errorMessage.message)
    }
    return Promise.reject(errorMessage)
  })
