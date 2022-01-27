import neonHeartPng from "../../assets/images/neon_heart.png";
import { Image, ParallaxElem } from "../../components";
import { Card } from "./components";
import { hobbies } from "./data";
import styles from "./my_hobbies.module.css";

const MyHobbies = () => {
  return (
    <>
      <div className={styles._cards_container}>
        {hobbies.map((hobby) => (
          <Card key={hobby.alt.replace(" ", "_")} {...{ ...hobby }} />
        ))}
      </div>
      <ParallaxElem translateZ={25} moduleClass={styles._heart_sign}>
        <Image alt="" src={neonHeartPng} />
      </ParallaxElem>
    </>
  );
};

export default MyHobbies;
