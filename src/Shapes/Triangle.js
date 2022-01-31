import {useState} from "react";
import { Input , Container} from "../Styles/Input";

function Triangle({ shape }) {
  const [height, setHeight] = useState('');
  const [base, setBase] = useState('');
  return (
    <Container>
      <p> Enter Height</p>
      <Input
        value={height}
        onChange={(e) => {
          setHeight(e.target.value);
        } } />
      <p> Enter Base</p>
      <Input
        value={base}
        onChange={(e) => {
          setBase(e.target.value);
        } } />

      {isNaN(height) || isNaN(base) ? (<h2> Please enter numerical values only</h2>) : height && base ?
        (<><h1> Area: {height * base * 0.5}</h1>
          <p>
            name:{shape}, height:{height}, base: {base}, area:{height * base * 0.5}
          </p>
        </>
        ) : ''}

    </Container>
  );
}


export default Triangle;