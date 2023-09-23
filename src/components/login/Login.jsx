import './login.scss'
import axios from 'axios';
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/Auth-context';
import popAlert from '../../helpers/popAlert';

export default function Login() {

  const navigate = useNavigate()
  const {signIn} = useContext(AuthContext)

  // Error Message State
  const [errorMessages, setErrorMessages] = React.useState('');

  // used for storing user input
  const [login, setLogin] = React.useState({
    username: '',
    password: '',
  });

  // handle input change
  function handleChange(event) {
    const { name, value } = event.target
    setLogin(prev => {
      return {
        ...prev,
        [name]: value
      }
    })
  }


  const handleSubmit = async (submit) => {

    submit.preventDefault();

    await axios({
      url:  `/api/user/signin`,
      method: 'POST',
      data: {
        username: login.username.trim(),
        password: login.password
      }
    })
    .then((res) => {
      console.log('Successfully logged user');
      localStorage.setItem('jwt', res.data.token);
      // console.log(res.data)
      signIn(res.data);
      // console.log(localStorage.jwt)
      popAlert(`Welcome Back`);
      navigate('/');
      return res.data;
    })
    .catch(
      async (error) => {
        await axios({
          url:  `/api/employee/signin`,
          method: 'POST',
          data: {
            username: login.username.trim(),
            password: login.password
          }
        })
        .then((res) => {
          console.log('Successfully logged employee');
          localStorage.setItem('jwt', res.data.token);
          // console.log(res.data)
          signIn(res.data);
          // console.log(localStorage.jwt)
          popAlert(`Welcome Back`);
          navigate('/');
          return res.data;
        })
        .catch(
          (error) => {
            if (error.response) {
              // Request made and server responded
              setErrorMessages("Invalid Username or Password")
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request)
              setErrorMessages('No response!')
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message)
              setErrorMessages('Somthing wrong!')
            }
          }
        )


      }
    )

  }

  // Generate JSX code for login form
  const loginForm = (

    <main className='App-main'>
      <div className='login'>
        <div>
          <form action="/" onSubmit={handleSubmit}>

            <div className='input-holder'>
              <label>Username</label><br/>
              <input 
                type="username"
                name="username"
                placeholder={'Enter your Username'}
                required
                autoFocus
                onChange={handleChange}
                value={login.username}
              />
            </div>

            <div className='input-holder'>
              <label>Password</label>
              <Link to="/forget-password"><label className="right-label "
              style={{color: "#007bff"}}>Forgot password?</label></Link>
              <br/>
              <input 
                type="password" 
                name="password"   
                placeholder={'Enter your Password'} 
                required
                onChange={handleChange}
                value={login.password}
              />
            </div>

            <div className="input-holder">
            <button id="sub_btn" type="submit" >Login</button>
            </div>

            <div className="error">{errorMessages}</div>

          </form>
              
        </div>
      </div>
    </main>

  )

  return (
    <div>
      {loginForm}
    </div>
  )
}
