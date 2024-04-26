import { useRef } from "react"

const FocusScreen = () => {

    const inputRef = useRef()
    const onClick=()=>{
        // console.log(inputRef)
        inputRef.current.select()
    }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input 
      ref={inputRef}
      type="text"
      placeholder="Ingrese su nombre"
      className="form-control"
      />

      <button 
      onClick={onClick} 
      className="btn btn-primary mt-2">
        set focus
        </button>
    </div>
  )
}

export default FocusScreen
