import Card from "./components/Card";
import CardDesc from "./components/CardDesc";
import Layout from "./components/Layout";
import { hobbies } from "./data";

const MyHobbies = () => {
  const gridElems: JSX.Element[] = [];
  hobbies.forEach(({ alt, desc, phrase, src }, idx) => {
    if (idx % 2) {
      gridElems.push(<CardDesc key={2 * idx} {...{ desc, phrase }} />);
      gridElems.push(<Card key={2 * idx + 1} {...{ alt, src }} />);
    } else {
      gridElems.push(<Card key={2 * idx} {...{ alt, src }} />);
      gridElems.push(<CardDesc key={2 * idx + 1} {...{ desc, phrase }} />);
    }
  });

  return <Layout>{gridElems}</Layout>;
};

export default MyHobbies;
