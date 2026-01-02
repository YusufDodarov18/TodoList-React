import css from "../Styles/AddTask.css"
function AddTask({input,setInput,setData}) {
  return (
    <div>
        <input type="text" className="inputAdd" value={input} onChange={(ev)=>setInput(ev.target.value)} />
        <button className="btnAdd" onClick={()=>setData(prevData=>[...prevData,{id:Date.now(),title:input,completed:false}],setInput(""))}>Add</button>
    </div>
  )
}

export default AddTask