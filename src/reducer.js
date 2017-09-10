const initialState = {
  greeting: 'Hello redux',
  posts: []
}

export default (state, action) => {
  if (typeof state === 'undefined') {
    return initialState
  }

  return state
}
