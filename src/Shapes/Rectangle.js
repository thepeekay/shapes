import {useState} from "react";
import { Input , Container} from "../Styles/Input";

const Rectangle = ({shape}) =>  {
    const [length, setLength] = useState('');
    const [width, setWidth] = useState('');
    return (
      <Container>
      <p> Enter Length</p>
      <Input
      value={length}
      onChange={(e)=> {
        setLength(e.target.value)
      }}
      />
       <p> Enter Width</p>
      <Input
      value={width}
      onChange={(e)=> {
        setWidth(e.target.value)
      }}
      />
  
      { isNaN(length) || isNaN(width) ? (<h2> Please enter numerical values only</h2>) : length && width ? 
      (<><h1> Area : {length * width}</h1>
      <p>
      name:{shape}, dimensions:{length} x {width}, area:{length * width}
      </p>
      </>
      ) : ''}
  
      </Container>
    )
  }


export default Rectangle;