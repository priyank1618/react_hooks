import React,{useState} from 'react'

const Usestate = () => {
  
  const [count, setCount] = useState(0);

  const increase = () => {
     setCount(count+1);
  }

  return (
    <div>
      {count}
      <button onClick={increase}>Increment</button>
    </div>
  )
}

export default Usestate

//UseState is used for updating the thing/state in real time.