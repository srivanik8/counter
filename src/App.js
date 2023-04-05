import React, {useState} from "react";


function App(){

  const [count, setCount] = useState('4')
  
  function decrementCount(){
    setCount(prevCount => prevCount - 1);
  }


  function incrementCount(){
    setCount(prevCount => parseInt(prevCount) + 1  );
  }
  return(
    <>

        <button  className= "sub" onClick={decrementCount}>-</button>
        <button className="num">{count}</button>
    
        <button className= "add"onClick={incrementCount}>+</button>

    </>
  )

}

export default App;