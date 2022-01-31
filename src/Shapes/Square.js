import {useState} from "react";
import { Input , Container} from "../Styles/Input";
function Square({ shape }) {
  const [length, setLength] = useState('');
  return (
    <Container>
      <p> Enter Length</p>
      <Input
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
        } } />

      {isNaN(length) ? (<h2> Please enter numerical values only</h2>) : length ?
        (<><h1> Area: {length * length}</h1>
          <p>
            name:{shape}, dimensions:{length} x {length}, area:{length * length}
          </p>
        </>
        ) : ''}

    </Container>
  );
}

  export default Square;