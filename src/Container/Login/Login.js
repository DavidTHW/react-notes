import React , {useState, useEffect , Suspense} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
//this is just mocking response 
import data from '../../mock/mockUser'
import { user , authState} from '../../Slices/AuthSlice';

const Login = () => {

  const auth = useSelector((state) => state.auth.authState)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('');
  const [success , setSuccess] = useState()
  const[ warn , setWarn] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (username && password) {
      const found = data.find((user) => user.username === username && user.password === password)
      if (found) {
        //no token here, just pass true
        localStorage.setItem('userToken' , JSON.stringify({'auth' : true , 'username' : username}))
        dispatch(authState(true))
        setSuccess(true)
        setWarn('')
     } else {
       dispatch(authState(false))
       setSuccess(false)
       setWarn('invalid username or password')
     }
   }
    dispatch(user(username))
    setUsername('')
    setPassword('')
  }

  useEffect(()=> {
    if (success) {
      navigate("/notes" , {replace: true})
    }
  },[success])
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type={'text'} id='username' value={username} required onChange={(e)=> setUsername(e.target.value) }  />
      <label>Password</label>
      <input type={'password'} id='password' value={password} required onChange={(e) => setPassword(e.target.value) }/>
      <button>Sign In</button>
      </form>
      <div>{warn}</div>
    </div>
    
  )
}

export default Login