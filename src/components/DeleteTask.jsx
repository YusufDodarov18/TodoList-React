import css from "../Styles/Delete.css"
export const DeleteTask=({id,data,setData})=> {
  return (
    <div>
        <button className="delete" onClick={()=>setData(data.filter(e=>e.id!==id))}>Delete</button>
    </div>
  )
}
