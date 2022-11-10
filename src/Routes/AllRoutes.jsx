import { Routes, Route } from "react-router-dom"
import CultFitLogo from "../components/Home/CultFitLogo";
import Fitness from "../components/ProductPages/Fitness";
import Care from "../components/ProductPages/Care";
import Mind from "../components/ProductPages/Mind";
import Store from "../components/ProductPages/Store";
import Location from "../components/Locations/Location";
import GetApp from "../components/GetApp/GetApp";
import Account from "../components/Accounts/Account";
import Cart from "../components/Carts/Cart";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CultFitLogo />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/care" element={<Care />} />
            <Route path="/mind" element={<Mind />} />
            <Route path="/store" element={<Store />} />
            <Route path="/location" element={<Location />} />
            <Route path="/getapp" element={<GetApp />} />
            <Route path="/account" element={<Account />} />
            <Route path="cart" element={<Cart />} />
        </Routes>
    )
}

export default AllRoutes;