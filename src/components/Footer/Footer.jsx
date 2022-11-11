import { SlSocialYoutube } from "react-icons/sl";
import { SlSocialFacebook } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin } from "react-icons/ti";
import footStyles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={footStyles.main_footer}>
            <div className={footStyles.first_footer}>
                <div>
                    <div className={footStyles.cult_fit_logo}>
                        <img src="https://bizbehindsports.com/wp-content/uploads/2021/12/210688270_1904701106368592_768999121101831697_n.jpg" alt="cult-fit-logo" />
                        <h1>cult.fit</h1>
                    </div>
                    <div>
                        At cult.fit, wer make group workouts fun, daily food
                        healthy & tasty, mental fitness easy with yoga &
                        meditation, Medical & lifestyle care hassle-
                        free.#BeBetterEveryDay
                    </div>
                </div>
                <div className={footStyles.contact_us}>
                    <div>
                        <p>cult.fit for business</p>
                        <p>cult.fit franchise</p>
                        <p>corporate partnerships</p>
                        <p>cult pass network</p>
                        <p>t&c for business</p>
                    </div>
                    <div>
                        <p>partner.fit</p>
                        <p>blogs</p>
                        <p>security</p>
                        <p>careers</p>
                    </div>
                    <div>
                        <p>contact us</p>
                        <p>privacy policy</p>
                        <p>cult bmi calculator</p>
                        <p>terms & conditions</p>
                    </div>
                </div>
                <div className={footStyles.app_store}>
                    <img src="https://e7.pngegg.com/pngimages/2/670/png-clipart-logo-app-store-font-brand-product-app-store-play-store-text-logo.png" alt="apple_store" />
                    <img src="https://cn.maplesoft.com/products/MapleCalculator/images/app-store-icons-google-play.png" alt="google_play_store" />
                    <div className={footStyles.social_media}>
                        <SlSocialYoutube fontSize="30px" />
                        <SlSocialFacebook fontSize="30px" />
                        <TiSocialTwitter fontSize="30px" />
                        <SlSocialInstagram fontSize="30px" />
                        <TiSocialLinkedin fontSize="30px" />
                    </div>
                </div>
            </div>
            <p>Related Searches</p>
            <div className={footStyles.second_footer}>
                <div>
                    <p>Gym Near Me</p>
                    <p>Yoga Postures for Beginners</p>
                    <p>Bedtime Stories for Kids</p>
                    <p>Gyms in Pune</p>
                    <p>Gyms in Chandigarh</p>
                    <p>Strength Traning</p>
                    <p>Core Exercises</p>
                    <p>Fitness Glossary</p>
                </div>
                <div>
                    <p>Face Yoga</p>
                    <p>Surya Namaskar for Beginners</p>
                    <p>Meditation in Hindi</p>
                    <p>Gyms in Hydrahad</p>
                    <p>Gyms in Indore</p>
                    <p>Mobility Exercises</p>
                    <p>Butt Excercises</p>
                    <p>Morning Exercise</p>
                </div>
                <div>
                    <p>Healthy Recipes</p>
                    <p>Yoga For Stress Relief</p>
                    <p>Mindfulness Meditation</p>
                    <p>Gyms in Chennai</p>
                    <p>Gyms in Coimbatore</p>
                    <p>Kids Exercise</p>
                    <p>Arm Workout at Home</p>
                    <p>Home Workouts</p>
                </div>
                <div>
                    <p>Chest Exercises</p>
                    <p>Yoga Asanas</p>
                    <p>Yoga Nidra</p>
                    <p>Gyms in Jaipur</p>
                    <p>Gyms in Bangalore</p>
                    <p>How to Lose Weight</p>
                    <p>Back Exercises at Home</p>
                </div>
                <div>
                    <p>Exercise To Reduce Belly Fat</p>
                    <p>Meditation Music</p>
                    <p>Gyms in Mumbai</p>
                    <p>Gyms in Kolkata</p>
                    <p>Belly Fat Loss Exercise</p>
                    <p>HIIT Workout at Home</p>
                    <p>Abs Workout at Home</p>
                </div>
                <div>
                    <p>Six Pack Without</p>
                    <p>Pranayama</p>
                    <p>Gyms in Delhi</p>
                    <p>Gyms in Ahmedabad</p>
                    <p>Weight Loss Exercise</p>
                    <p>Exercises for Toned Body</p>
                    <p>Thigh Exercises</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;