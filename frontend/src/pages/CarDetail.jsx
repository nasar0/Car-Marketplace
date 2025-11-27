import React from 'react'
import { useParams } from 'react-router-dom'

const CarDetail = () => {
  const { id } = useParams()
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Car Detail {id}</h1>
    </div>
  )
}

export default CarDetail
