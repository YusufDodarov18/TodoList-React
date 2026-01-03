import styles from "../Styles/Delete.module.css"
export const DeleteTask=({id,data,setData})=> {
  return (
    <div>
        <button className={styles.delete} onClick={()=>setData(data.filter(e=>e.id!==id))}>Delete</button>
    </div>
  )
}
