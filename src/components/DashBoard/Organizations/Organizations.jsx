import { useEffect, useState } from 'react'
import fetchToken from '../../../helpers/fetchToken'
import Card from '../../Card/Card'
import Loader from '../../Loader/Loader'

const Organizations = () => {
  const [org, setOrg] = useState({ loading: true })

  useEffect(() => {
    fetchToken('api/organizations/search').then((items) =>
      setOrg({ ...items, loading: false })
    )
    return () => {
      setOrg([])
    }
  }, [])

  return (
    <ul>
      {org.loading ? (
        <Loader />
      ) : (
        org.response.map(({ id, name, country, phoneNumber }) => (
          <Card
            key={id}
            url="/dashboard/org/"
            id={id}
            name={name}
            country={country}
            phoneNumber={phoneNumber}
          />
        ))
      )}
    </ul>
  )
}

export default Organizations
