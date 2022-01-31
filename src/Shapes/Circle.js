import {useState} from "react";
import { Input , Container} from "../Styles/Input";


const Circle = ({shape}) =>  {
    const [radius, setRadius] = useState('');
    let pi =  3.14159;
    return (
      <Container>
      <p> Enter Radius</p>
      <Input
      value={radius}
      onChange={(e)=> {
        setRadius(e.target.value)
      }}
      />     
  
      { isNaN(radius) ? (<h2> Please enter numerical values only</h2>) : radius ? 
      (<><h1> Area : {radius * radius * pi}</h1>
      <p>
      name:{shape}, radius:{radius} , area:{radius * radius * pi}
      </p>
      </>
      ) : ''}
  
      </Container>
    )
  }


export default Circle;