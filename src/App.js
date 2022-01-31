import styled from "styled-components";
import { useState, useEffect } from "react";
import Square from "./Shapes/Square";
import Rectangle from "./Shapes/Rectangle";
import Triangle from "./Shapes/Triangle";
import Circle from "./Shapes/Circle";
import { Tab } from "./Styles/Input";

const types = ["Rectangle", "Triangle", "Square", "Circle"];
const TabGroup = () => {
  const [active, setActive] = useState(types[0]);
  let area;
  if (active == 'Rectangle') {
    area = <Rectangle shape={active} />
  }
  else if (active == 'Square') {
    area = <Square shape={active} />
  }
  else if (active == 'Triangle') {
    area = <Triangle shape={active} />
  }
  else if (active == 'Circle') {
    area = <Circle shape={active} />
  }

  return (
    <>
      <div>
        {types.map((type) => (
          <Tab
            key={type}
            active={active === type}
            onClick={() => {
              setActive(type);
            }}
          >
            {type}
          </Tab>
        ))}
      </div>
      <p />
      <p> Enter required values below to calculate area for: {active} </p>
      {area}
    </>
  );
}

export default function App() {
  return (
    <div>
      <TabGroup />
    </div>
  );

};
