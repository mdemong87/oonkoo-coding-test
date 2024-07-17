import Image from "next/image";
import 'react-toastify/dist/ReactToastify.css';
import Ellipse26 from "../public/Ellipse 26.png";
import Ellipse27 from "../public/Ellipse 27.png";
import BestBet from "./componnents/BestBet";
import CanadaDay from "./componnents/CanadaDay";
import CurrentPrice from "./componnents/CurrentPrice";
import ForMiddleContentSkelation from "./componnents/FormiddleContentSkleation";
import MaxPrice from "./componnents/MaxPrice";
import PlaceBidBtn from "./componnents/PlaceBidBtn";
import Summary from "./componnents/Summary";
import SurgeAttention from "./componnents/SurgeAttention";
import ToggleItems from "./componnents/ToggleItems";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="px-5 w-screen h-screen">


      <div className={styles.homepagecontentWrper}>

        {/* leftside content bar box start from here */}
        <div className={styles.leftsides}>
          <div>
            <ToggleItems />
          </div>
          <div>
            <ToggleItems />
            <ToggleItems />
          </div>
          <div>
            <ToggleItems />
            <ToggleItems />
            <ToggleItems />
            <ToggleItems />
            <ToggleItems />
          </div>
        </div>
        {/* leftside content box bar end from here */}

        {/* middle content bar box start from here */}
        <div className={styles.middlesides}>
          <ForMiddleContentSkelation />
          <ForMiddleContentSkelation />
          <div className="hidden lg:block">
            <ForMiddleContentSkelation />
            <ForMiddleContentSkelation />
            <ForMiddleContentSkelation />
          </div>
        </div>
        {/* middle content bar box end from here */}

        {/* right side content bar box start from here */}
        <div className={styles.rightsides}>
          <div>
            <div className="">
              <SurgeAttention />
              <CanadaDay />
              <MaxPrice />
              <CurrentPrice />
            </div>

            {/* Others have placed their bets div start from here */}
            <div className="flex gap-3 items-center my-3 mb-4">
              <div className={styles.othershavebidWrper}>
                <div>
                  <Image className="w-[1.70rem] h-[1.70rem]" src={Ellipse26} alt="Ellipse26 photo" />
                </div>
                <div>
                  <Image className="w-[1.70rem] h-[1.70rem]" src={Ellipse27} alt="Ellipse27 photo" />
                </div>
                <div>
                  <p>+15</p>
                </div>
              </div>
              <span className="text-[1rem] font-normal text-[#7B7B7B] leading-4">
                Others have placed their bets
              </span>
            </div>
            {/* Others have placed their bets div end from here */}

            <BestBet />
            <Summary />


            {/* place bid div start from here */}
            <div>
              <PlaceBidBtn />
              <p className="text-center text-[#9C9C9C] text-[0.75rem] pt-2">
                <b>Surge Attention day</b> will be in bidding mode till the previous day or some one buys it off
              </p>
            </div>
            {/* place bid div end from here */}

          </div>
        </div>
        {/* right side content bar box end from here */}
      </div>
    </main>
  );
}
