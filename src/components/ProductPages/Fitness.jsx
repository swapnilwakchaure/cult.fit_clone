import { cult_fit_data } from "../cult_fit_data";
import fitStyles from "./fitness.module.css";
import Footer from "../Footer/Footer";

const Fitness = () => {
    // console.log(cult_fit_data);
    return (
        <div>
            <div className={fitStyles.heading}>
                <h1>Lab Tests</h1>
                <p>Assess and monitor your health from the comfort of your home now</p>
            </div>
            <div className={fitStyles.cult_fit_products}>
                {cult_fit_data.map((item) => (
                    <div key={item.id}>
                        <img src={item.image} alt="cult-fit-image" />
                        <div>
                            <p>Offer Price</p>
                            <p>₹{item.offer_price}</p>
                        </div>
                        <div>
                            <p>Price</p>
                            <p>₹{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Fitness;