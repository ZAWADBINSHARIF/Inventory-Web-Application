import { format } from 'date-fns'

const useDefaultDate = () => {

  const current = new Date()
  const formatDate = format(current, 'yyyy-MM-dd')

  const defaultDate = Object.freeze({
    from: `${current.getFullYear()}-${current.getMonth() + 1}-01`,
    // from: `2023-10-01`,
    to: formatDate
  })

  return [defaultDate.from, defaultDate.to]
}
export default useDefaultDate