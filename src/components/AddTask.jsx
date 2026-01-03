import styles from "../Styles/AddTask.module.css";
function AddTask({input,setInput,setData}) {
  return (
    <div>
        <input type="text"  className={styles.inputAdd}  value={input} onChange={(ev)=>setInput(ev.target.value)} />
        <button className={styles.btnAdd}  onClick={()=>{
          if(input.trim()!==""){
            setData(prevData=>[...prevData,{id:Date.now(),title:input,completed:false}])
            setInput("")
          }
        }}>Add</button>
    </div>
  )
}

export default AddTask
