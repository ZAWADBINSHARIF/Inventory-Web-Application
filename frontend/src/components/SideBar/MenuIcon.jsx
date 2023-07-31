import { FaArrowRight, FaArrowLeft } from 'react-icons/fa6'

const MenuIcon = ({ openMenu, setOpenMenu }) => {

    const className = "menuIcon bg-primary mt-5 me-1 p-1"
  return (
      <>
          {
              (!openMenu) ? 
                  <FaArrowRight
                      color="white"
                      size={36}
                      className={className}
                      onClick={() => setOpenMenu(!openMenu)}
                  /> :
                  <FaArrowLeft
                      color="white"
                      size={36}
                      className={className}
                      onClick={() => setOpenMenu(!openMenu)}
                  />
      }
      </>
  )
}
export default MenuIcon