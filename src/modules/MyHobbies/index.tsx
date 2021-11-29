import { Card } from "./components";
import { hobbies } from "./data";

const MyHobbies = () => {
  return (
    <>
      <div>
        {hobbies.map((hobby) => (
          <Card key={hobby.alt.replace(" ", "_")} {...{ ...hobby }} />
        ))}
      </div>
    </>
  );
};

export default MyHobbies;
