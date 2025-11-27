import api from './api'

export const getCars = async () => {
  return await api.get('/cars')
}

export const getCarById = async (id) => {
  return await api.get(`/cars/${id}`)
}
