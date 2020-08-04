
export const getItem = (name) => {
  return window.localStorage.getItem(name)
}

export const setItem = (name, value) => {
  window.localStorage.setItem(name, value)
}