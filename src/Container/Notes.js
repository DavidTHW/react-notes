import React, { useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import noteData from "../mock/mockNotes"
import { addNote , postNotes , deleteNotes} from '../Slices/NotesSlice'
import { nanoid } from 'nanoid'

const Notes = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const noteRedux = useSelector((state) => state.notes)
  const auth = useSelector((state) => state.auth)
  const [content , setContent] = useState('')
  const [title , setTitle] = useState('')

const handleAddNotes = () => {
  // add post api here for full code
  dispatch(postNotes({
    id : nanoid(),
    username : auth.username ,
    title : title ,
    content : content,
  }))
  setContent('')
}

const handleDeleteNotes = (id) => {
  //api call to remove post and get updated post list
  dispatch(deleteNotes({id : id}))
}
//user's notes
console.log(noteRedux)

const logout = () => {
  localStorage.removeItem('userToken')
  navigate("/")
}

useEffect(()=> {
//populating the default state  
if (auth.authState === true) {
  const userNotes = noteData.filter((i) => i.username === auth.username);
  dispatch(addNote(userNotes))
}
} , [])


  return (
    
    <div>
    {noteRedux?.notes?.length > 0 ? (noteRedux && noteRedux?.notes?.map((i , idx) =>{
      return (
      <div key={idx}>
        <label>Title :</label>
        <div>{i.title}</div>
        <label>Content :</label>
        <div>{i.content}</div>
        <button onClick={()=> handleDeleteNotes(i.id)}>delete note</button>
      </div> 
      
      )
    })) : (<div>no notes found , add your notes</div>)
  } 

    {/* {noteRedux?.notes.length < 1 ? () : null} */}

    <div>
    <label>Add Note</label>
    <label>Add Note Title :</label>
    <input type={'text'} id={'content'} value={content} onChange={(e)=> setContent(e.target.value)}/>
    <label>Add Note Content :</label>
    <input type={'text'} id={'title'} value={title} onChange={(e)=> setTitle(e.target.value)}/>
    <button onClick={handleAddNotes}>Submit</button>
 
    </div>
      <button onClick={logout}>log out</button>
    </div>
  )
}

export default Notes