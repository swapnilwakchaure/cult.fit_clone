import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import navStyles from "./navbar.module.css";
import DarkSwitchMode from "../DarkSwitchMode";
import Account from "../Accounts/Account";

const Navbar = () => {
    return (
        <div className={navStyles.main_navbar}>
            <div className={navStyles.home_logo}>
                <Link to="/" >
                    <div>
                        <img src="https://www.passionateinmarketing.com/wp-content/uploads/2021/06/cult.fit_.png" alt="cult-logo" />
                        <p>cult.fit</p>
                    </div>
                </Link>
            </div>
            <div className={navStyles.product_section}>
                <Link to="/fitness">FITNESS</Link>
                <Link to="/care">CARE</Link>
                <Link to="/mind">MIND</Link>

                <Link to="/store">STORE</Link>
            </div>
            <div className={navStyles.about_us}>

                <Link to="/location"><Flex alignItems="center" gap="10px">Location<GoLocation fontSize="20px" /></Flex></Link>

                <Link to="/getapp"><button className={navStyles.getAppButton} >GET APP</button></Link>

                {/* <Link to="/account"><MdAccountCircle fontSize="25px" /></Link> */}
                <Account login={<MdAccountCircle fontSize="30px" />} />

                <Link to="/cart"><BsCart3 fontSize="25px" /></Link>
                <DarkSwitchMode />
            </div>
        </div>
    )
}

export default Navbar;