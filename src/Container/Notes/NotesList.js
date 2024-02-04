import React , {useState} from 'react'

const NoteList = ({note , handleDeleteNotes}) => {
  const [show, setShow] = useState({})

  console.log(show)
  const handleOpen =(e , idx)=> {
    console.log(e , 'e' , idx, 'idx')
   setShow({...show, [idx]:true})
  }
  const handleClose =(e , idx)=> {
    console.log(e , 'e' , idx, 'idx')
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
        <button onClick={()=> handleDeleteNotes(i.id)}>delete note</button>
        </> ) :  null}
        <div key={idx}>
        {!show[idx] ? 
        <button onClick={(e)=> handleOpen(e,idx)}> show details </button> : 
        <button onClick={(e)=> handleClose(e,idx)}> hide details </button>}
        </div>
      </div>
      )
    })} 
    </> )
    ) 
}

export default NoteList