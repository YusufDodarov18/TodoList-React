import styles from "../Styles/Edit.module.css"
import Dialog from './Dialog'
import { useRef } from 'react'

export const EditTask=({id,data,setData})=> {
    const dialog=useRef(null)
  return (
    <div>
        <button className={styles.edit} onClick={()=>dialog.current.showModal()}>Edit</button>
        <Dialog data={data} setData={setData} id={id} dialog={dialog}/>
    </div>
  )
}
