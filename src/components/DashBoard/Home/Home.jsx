import { useState, useEffect } from 'react'
import CardItem from '../CardItem/CardItem'

const Home = () => {
  const [state, setState] = useState({ loading: true, data: [] })

  const fetchData = async () => {
    const dat = await fetch('https://fakestoreapi.com/products').then((data) =>
      data.json()
    )

    setState({ loading: false, data: dat })
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (state.loading) {
    return 'Cargando...'
  }

  return (
    <ul className="grid gap-4">
      {state.data.map((item) => {
        return (
          <CardItem
            id={item.id}
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
