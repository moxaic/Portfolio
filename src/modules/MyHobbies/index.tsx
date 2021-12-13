import neonHeartPng from "../../assets/images/neon_heart.png";
import { Image, ParallaxEl } from "../../components";
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
      <div className={styles._heart_sign}>
        <ParallaxEl translateZ={25}>
          <Image alt="" src={neonHeartPng} />
        </ParallaxEl>
      </div>
    </>
  );
};

export default MyHobbies;
