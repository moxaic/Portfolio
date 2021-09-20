import Grid from "../../components/Grid";

const HeroArea = () => {
  return (
    <Grid>
      {[
        <div key="hero-area-left-col"></div>,
        <div key="hero-area-right-col">
          <h1>
            I&apos;m Aditya
            <br />
            Srivastava
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            enim, aliquam labore corrupti ducimus dolorum nihil tempora amet
            rerum officiis quos, earum necessitatibus, vel ex placeat illo ipsum
            recusandae esse.
          </p>
        </div>,
      ]}
    </Grid>
  );
};

export default HeroArea;
