import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import navStyles from "./navbar.module.css";

const Navbar = () => {
    return (
        <Flex alignItems="center" justifyContent="space-between" id="container">
            <div style={{border:"1px solid green"}}>
                <Link to="/" id="cult_logo_img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTMXWU2A8S6uzSF6GsiUsyVfPy1yDun7Hkg&usqp=CAU"
                        alt="cult-fit-logo" />
                </Link>
            </div>
            <Flex border="1px solid red" width="30%">
                <Link to="/fitness">FITNESS</Link>
                <Link to="/care">CARE</Link>
                <Link to="/mind">MIND</Link>
                <Link to="/store">STORE</Link>
            </Flex>
            <Flex border="1px solid blue">
                <Link to="/location">LOCATION</Link>
                <Link to="/getapp">GET APP</Link>
                <Link to="/account">ACCOUNT</Link>
                <Link to="/cart">CART</Link>
            </Flex>
        </Flex>
    )
}

export default Navbar;