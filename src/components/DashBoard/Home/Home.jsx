import { useState, useEffect } from 'react'
import CardItem from '../CardItem/CardItem'
import '../../css/Home.css'

const Home = () => {
  const [state, setState] = useState({ loading: true, data: [] })

  const fetchData = async () => {
    const dat = await fetch('https://fakestoreapi.com/products')
    const datjson = await dat.json()

    setState({ loading: false, data: datjson })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (state.loading) {
    return 'Cargando'
  }

  return (
    <ul className="gallery">
      {state.data.map((item) => {
        return (
          <CardItem
            image={item.image}
            title={item.title}
            price={item.price}
            category={item.category}
          />
        )
      })}
    </ul>
  )
}

export default Home
