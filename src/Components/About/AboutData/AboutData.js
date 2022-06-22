import TableOne from "./Tables/TableOne";
import TableTwo from "./Tables/TableTwo";
import TableThree from "./Tables/TableThree";
import TableFour from "./Tables/TableFour";

import "./AboutData.scss";

const AboutData = () => {
  return (
    <section className="aboutdata">
      <div className="container aboutdata-container">
        <TableOne></TableOne>
        <TableTwo></TableTwo>
        <TableThree></TableThree>
        <TableFour></TableFour>
      </div>
    </section>
  );
};

export default AboutData;
