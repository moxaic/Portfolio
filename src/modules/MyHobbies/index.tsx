import { Card } from "./components";
import { hobbies } from "./data";

const MyHobbies = () => {
  return (
    <>
      <div>
        {hobbies.map(({ alt, heading, src, text }) => (
          <Card key={alt.replace(" ", "_")} {...{ alt, heading, src, text }} />
        ))}
      </div>
    </>
  );
};

export default MyHobbies;
