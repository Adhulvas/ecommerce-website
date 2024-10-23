import { Link } from 'react-router-dom';
import './Login.css'
import { FaUser, FaLock } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { addUserInput, setUserId } from '../../GlobalStates/UserSlice';

function Login() {
  const {userInput}=useSelector((store)=>store.user)
  const dispatch=useDispatch()

  const handleInput=(event)=>{
    dispatch(addUserInput(event.target.value))
  }

  const addLogin=()=>{
    dispatch(setUserId(userInput))
    addUserInput('')
  }

  return (
    <div className='background'>
      <div className='form-container'>
        <div className='form-box'>
          <form>
            <h1>Login</h1>
            <div className='input-box'>
              <input type="text" placeholder='Username' onChange={handleInput} value={userInput}/>
              <FaUser className='icon' />
            </div>
            <div className='input-box'>
              <input type="password" placeholder='Password' required />
              <FaLock className='icon' />
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />Remember me</label>
              <a href="#">Forgot password?</a>
            </div>

            <Link to={'home'}><button onClick={addLogin}>Login</button></Link>

            <div className="register-link"><p>Don't have an account? <a href="#">Register</a></p></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login