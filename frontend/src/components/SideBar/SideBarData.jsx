import { FaHouseChimney } from 'react-icons/fa6'
import { FaProductHunt } from 'react-icons/fa6'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsFillBoxSeamFill } from 'react-icons/bs'
import { AiFillSetting } from 'react-icons/ai'

const marginRight = "10px"

const SideBarData = [
    {
        title: "Home",
        link: "/",
        icon: () => (
            <FaHouseChimney
                style={{ marginRight }}
            />
        )
    },
    {
        title: "Product",
        link: "/product",
        icon: () => (
            <FaProductHunt
                style={{ marginRight }}
            />
        )

    },
    {
        title: "Sale",
        link: "/transaction/sale",
        icon: () => (
            <GiReceiveMoney
                style={{ marginRight }}
            />
        )

    },
    {
        title: "Purchase",
        link: "/transaction/purchase",
        icon: () => (
            <BsFillBoxSeamFill
                style={{ marginRight }}
            />
        )

    },
    {
        title: "Setting",
        link: "/setting",
        icon: () => (
            <AiFillSetting
                style={{ marginRight }}
            />
        )

    }
]

export default SideBarData