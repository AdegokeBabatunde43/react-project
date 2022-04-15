import React, {useState} from 'react'

const Form = () => {
    const [text, setText]= useState()
    const [message, setMessage]=useState()
    const handleSubmit= (e) => {
    e.preventDefault();
    setMessage(text)
    setText("")

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Name" required value={text} onchange={(e) => setText(e.target.value)} />
            <button>Submit</button>
        </form>

        <div>{message}</div>
        <h1>Welcome</h1>
    </div>
  )
}

export default Form





