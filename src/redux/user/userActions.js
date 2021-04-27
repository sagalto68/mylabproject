export const setUser = (user) => (
    { type: 'SET_USER', payload: user }
  )
  
  export const clearUser = () => (
    { type: 'SET_USER', payload: null }
  )