import { useState, useEffect } from 'react'

const useAuth = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Check for stored user
  }, [])

  return { user }
}

export default useAuth
