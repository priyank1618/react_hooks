import React,{useState} from 'react'

const Usestate1 = () => {
  
    const [value, setValue] = useState('priyank')

    const badal = (e) => {
        setValue(e.target.value);
    }



  return (
    <div>
       <input placeholder='enter something' onChange={badal}></input>
       {value}
    </div>
  )
}

export default Usestate1

//UseState is used for updating the thing/state in real time.