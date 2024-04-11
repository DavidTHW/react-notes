import React, { Suspense, useEffect , useState, lazy} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
//mock data
import noteData from "../../mock/mockNotes"
import { getNotes , postNotes , deleteNotes} from '../../Slices/NotesSlice'
import { nanoid } from 'nanoid'
import './Notes.css'

const NotesList = lazy(()=> import('./NotesList'))

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
  setTitle('')
  setContent('')
}

const handleDeleteNotes = (id) => {
  //api call to remove post and get updated post list
  dispatch(deleteNotes({id : id}))
}

const logout = () => {
  localStorage.removeItem('userToken')
  navigate("/react-notes")
}

useEffect(()=> {
//populating the default state  
if (auth.authState === true) {
  const userNotes = noteData.filter((i) => i.username === auth.username);
  dispatch(getNotes(userNotes))
}
} , [])


  return (
    
    <div>
     <div>
    {noteRedux?.notes?.length > 0 ? 
      <Suspense fallback={<>...loading</>}> 
      <NotesList note={noteRedux} handleDeleteNotes={handleDeleteNotes}/>
      </Suspense>
     : (<div>no notes found , add your notes</div>)}
    </div> 

    <div className='create-notes-container'>
    <h2>Create Notes</h2>
    <label>Add Note Title :</label>
    <input type='text' id={'title'} value={title} onChange={(e)=> setTitle(e.target.value)} />
    <label>Add Note Content :</label>
    {/* <input type={'text'} id={'content'} value={content} onChange={(e)=> setContent(e.target.value)} /> */}
    <textarea rows={4} id={'content'} value={content} onChange={(e)=>setContent(e.target.value)} />
    <div className='submit-btn'>
    <button onClick={handleAddNotes}>Submit</button>
    </div>
    </div>
    <div>
    <button onClick={logout}>log out</button>
    </div>
    </div>
  )
}

export default Notes