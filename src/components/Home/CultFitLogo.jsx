import { Button } from "@chakra-ui/react";
import { SlArrowDown } from "react-icons/sl";
import Footer from "../Footer/Footer";
import homeStyles from "./home.module.css";

const CultFitLogo = () => {
    return (
        <div>
            <video
                width="100%"
                height="100px"
                autoPlay loop muted
                src="https://cdn-images.cure.fit/www-curefit-com/video/upload/w_800,q_auto:eco/vc_auto/video/vm/32b91e40-0e2c-477b-a2ad-88d437d0f07f.mp4"
            />
            <div className={homeStyles.video_content}>
                <p><span className={homeStyles.we_are}>WE ARE</span><span className={homeStyles.cult}>cult</span></p>
                <h1>A fitness movement that is worth breaking a sweat for</h1>
                <Button>EXPLORE CULTPASS</Button>
                <SlArrowDown className={homeStyles.down_arrow} />
            </div>
            <div>
                <div className={homeStyles.courses}>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cb.png" alt="workout-image" />
                        <h1>Unlimited access to</h1>
                        <ul>
                            <li>At-center group classes</li>
                            <li>All ELITE & PRO gyms</li>
                            <li>At-home live workouts</li>
                        </ul>
                        <div>
                            <Button>TRY FOR FREE</Button>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cg.png" alt="workout-image" />
                        <h1>Unlimited access to</h1>
                        <ul>
                            <li>All PRO gyms</li>
                            <li>2 Sessions/m at ELITE gyms & group classes</li>
                            <li>At-home live workouts</li>
                        </ul>
                        <div>
                            <Button>TRY FOR FREE</Button>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                    <div>
                        <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_404,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/introducting-cult-pass/icp_cl.png" alt="workout-image" />
                        <h1>Unlimited access to</h1>
                        <ul>
                            <li>At home workouts</li>
                            <li>Celebrity Workouts</li>
                            <li>Goal-based Workouts and Meditation Sessions</li>
                        </ul>
                        <div>
                            <Button>TRY FOR FREE</Button>
                            <Button>LEARN MORE</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CultFitLogo;