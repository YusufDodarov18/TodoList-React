import css from "../Styles/Completed.css"
function CompletedTask({el,data,setData}) {
  return (
    <div>
        <input className="checkBox" type="checkbox" checked={el.completed} onChange={()=>setData(data.map(e=>e.id===el.id?{...e,completed:!e.completed}:e))} />
    </div>
  )
}

export default CompletedTask