import css from "../Styles/Edit.css"
import Dialog from './Dialog'
import { useRef } from 'react'

export const EditTask=({id,data,setData})=> {
    const dialog=useRef(null)
  return (
    <div>
        <button className="edit" onClick={()=>dialog.current.showModal()}>Edit</button>
        <Dialog data={data} setData={setData} id={id} dialog={dialog}/>
    </div>
  )
}
