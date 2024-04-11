import React , {useState} from 'react'

const NoteList = ({note , handleDeleteNotes}) => {
  const [show, setShow] = useState({})

  const handleOpen =(e , idx)=> {
   setShow({...show, [idx]:true})
  }
  const handleClose =(e , idx)=> {
   setShow({...show, [idx]:false})
  }

  return (
    (
    <>
    {note && note?.notes?.map((i , idx) => {
      return (
      <div key={idx} className='note'>
        <h2>Title :</h2>
        <div>{i.title}</div>
        {show[idx] ? (
         <>
        <h2>Content :</h2>
        <div>{i.content}</div>
        </> ) :  null}
        <div className='notes-btn'>
        <button onClick={()=> handleDeleteNotes(i.id)}>delete note</button>
        <div key={idx} className='notes-btn' >
        {!show[idx] ? 
        <button onClick={(e)=> handleOpen(e,idx)}> show details </button> : 
        <button onClick={(e)=> handleClose(e,idx)}> hide details </button>}
        </div>
        </div>
      </div>
      )
    })} 
    </> )
    ) 
}

export default NoteList