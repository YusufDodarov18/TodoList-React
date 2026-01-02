import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Dialog({dialog,data,setData,id}) {
    const [inputEdit,setInputEdit]=useState("")
    const [idx,setIdx]=useState(null)
    useEffect(()=>{
        if(inputEdit.trim()!=""){
        const exist=data.find(e=>e.id===id)
        if(exist){
            setInputEdit(exist.title)
            setIdx(id)
        }
        }
    },[id,data])
    
  return (
    <div>
        <dialog ref={dialog}>
            <input type="text" value={inputEdit} onChange={(e)=>setInputEdit(e.target.value)} />
            <button onClick={()=>setData(prevData=>prevData.map(e=>e.id==id?{...e,title:inputEdit}:e),dialog.current.close())}>Save</button>
            <button onClick={()=>dialog.current.close()}>Cancel</button>
        </dialog>   
    </div>
  )
}
