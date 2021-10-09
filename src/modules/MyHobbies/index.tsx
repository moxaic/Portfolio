import Card from "./components/Card";
import CardDesc from "./components/CardDesc";
import Layout from "./components/Layout";
import { hobbies } from "./data";

const MyHobbies = () => {
  const GridElems: JSX.Element[] = [];
  hobbies.forEach(({ alt, desc, phrase, src }, idx) => {
    if (idx % 2) {
      GridElems.push(<CardDesc key={2 * idx} {...{ desc, phrase }} />);
      GridElems.push(<Card key={2 * idx + 1} {...{ alt, src }} />);
    } else {
      GridElems.push(<Card key={2 * idx} {...{ alt, src }} />);
      GridElems.push(<CardDesc key={2 * idx + 1} {...{ desc, phrase }} />);
    }
  });

  return <Layout>{GridElems}</Layout>;
};

export default MyHobbies;
