export const getItem = (key) => {
    const item = localStorage.getItem(key.toString())
    return item
}

export const setItem = (key,value) => {
    localStorage.setItem(key,value)
}

export const clear = () =>{
    localStorage.clear()
}