import React,{useRef} from 'react'

const Useref = () => {
    const func = useRef(null)

    const after_press = () => {
        func.current.value = "BABA"
        console.log(func)
    }
  return (
    <div>
    <h1>Priyank</h1>
    <input type="text" placeholder='EX.....'  ref={func}/>
    <button onClick={after_press}>Change Name</button>
    </div>
  )
}

export default Useref


//UseRef can be used to access a DOM element directly.
//useref will return you object of current  {current: input} property of inputs are in it