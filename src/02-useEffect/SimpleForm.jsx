import { useEffect, useState } from "react";
import Message from "./Message";


const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'pablo',
        email:'pablo@info.com'
    });

    const {username,email}=formState;

    const onInputChange=({target})=>{
        const {name,value}=target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(()=>{
        // console.log('useEffect called')
    },[])

    useEffect(()=>{
        // console.log('formState changed!')
    },[formState])

    useEffect(()=>{
        // console.log('email changed!')
    },[email])


  return (
    <div>
        <h1>Simple Form</h1>
        <hr />

        <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username" 
        value={username}
        onChange={onInputChange}
         />

<input 
        type="email"
        className="form-control mt-2"
        placeholder="pablo@info.com"
        name="email" 
        value={email}
        onChange={onInputChange}
         />

    {
        (username==="pablo") && <Message/>
    }
    </div>
  )

}

export default SimpleForm
