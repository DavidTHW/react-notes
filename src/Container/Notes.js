import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import noteData from "../mock/mockNotes"
import { addNote } from '../Slices/Notes'

const Notes = () => {

  const dispatch = useDispatch()
  const notes = useSelector((state) => state.notes)
  const auth = useSelector((state) => state.auth)

  console.log(notes , ' notes')
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
  Promise.resolve(userNotes)
  console.log(userNotes)
  dispatch(addNote(userNotes))
}
} , [])


  return (
    
    <div>
      {/* {notes && notes?.map((i) => {
      return (
      <div>{i.content}</div>)
      })} */}
    </div>
  )
}

export default Notes