import React, { useEffect , useState} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import noteData from "../mock/mockNotes"
import { addNote } from '../Slices/Notes'

const Notes = () => {

  const dispatch = useDispatch()
  const noteRedux = useSelector((state) => state.notes)
  const auth = useSelector((state) => state.auth)


  console.log(noteRedux.notes, ' noteRedux')
  console.log(auth  , ' auth')
  

// const getNotes = async () => {
//   axios.get(`api url here${username}`)
//   .then((res)=> {
//     setUserNotes(res.data)
//   .catch((err) => {
//     console.log(err)
//   })
//   })
// }


useEffect(()=> {
if (auth.authState === true) {
  const userNotes = noteData.filter((i) => i.username === auth.username);
  console.log(userNotes , 'userNotes')
  console.log(JSON.stringify(userNotes) , 'stringyfy')
  //this adds notes from a api call to the redux to set a state
  dispatch(addNote(userNotes))
}
} , [])


  return (
    
    <div>
    {noteRedux.notes && noteRedux.notes.map((i , idx) =>{
      return (
      <div key={idx}>{i.content}</div>
      )
    })}
    
    </div>
  )
}

export default Notes