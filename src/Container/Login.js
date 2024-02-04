import React , {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
//this is just mocking response 
import data from '../mock/mockUser'
import { user , authState} from '../Slices/Auth';

const Login = () => {

  const auth = useSelector((state) => state.auth.authState)
  console.log(auth)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username , setUsername] = useState('')
  const [password , setPassword] = useState('');
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(user(username))
    setUsername('')
    setPassword('')
  }

  useEffect(()=> {
    //just making a mock response to simulate logged in state by getting a 'response' , ideally we should also use a unique id instead of username
    if (username && password) {
     const found = data.find((user) => user.username === username && user.password === password)
    //  Promise.resolve(found)
     console.log(found)
     if (found) {
      //  dispatch(authState(true))
       //no token here, just pass true
       localStorage.setItem('userToken' , JSON.stringify({'auth' : true , 'username' : username}))
      //  console.log(JSON.parse(localStorage.getItem('userToken')))
    } else {
      // dispatch(authState(false))
    }
    setSuccess(true)
    } else {
      //simulate an error in login
      setSuccess(false)
    }
  },[username, password])

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Username</label>
      <input type={'text'} id='username' value={username} required onChange={(e)=> setUsername(e.target.value) }  />
      <label>Password</label>
      <input type={'password'} id='password' value={password} required onChange={(e) => setPassword(e.target.value) }/>
      <button>Sign In</button>
      </form>
    </div>
  )
}

export default Login