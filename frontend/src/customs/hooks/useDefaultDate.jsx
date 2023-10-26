const useDefaultDate = () => {

    const current = new Date()

    const defaultDate = Object.freeze({
        from: `${current.getFullYear()}-${current.getMonth() + 1}-01`,
        to: `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`
    })

  return [defaultDate.from, defaultDate.to]
}
export default useDefaultDate