import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/general/Input.jsx'
import SearchBar from './components/general/SearchBar.jsx'
import Button from './components/general/Button.jsx'
import SelectInput from './components/general/SelectInput.jsx'
import axios from 'axios'
import Authentication from './routes/auth/Authentication.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUserName, setUserUserName] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    const checkAccessToken = async () => {
      try {
        const response = await axios.post(
          'http://localhost:8000/api/auth/',
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken}`
            }
          }
        );

        if (response.status === 200) {
          setIsLoggedIn(true);
          setUserUserName(response.data.username);
          console.log('User data:', response.data);
        } else {
          console.log('Unexpected status:', response.status);
        }
      } catch (error) {
        if (error.response) {
          if (error.response.status === 401) {
            console.log('Invalid token, please login again');
          } else {
            console.log('Error:', error.response.status, error.response.data);
          }
        } else {
          console.log('Network or other error', error.message);
        }
      }
    };

    checkAccessToken();
  }, []);

  return (
    <div className='App'>
      {
        isLoggedIn ?
          (<p>Logged In</p>) :
          (
            <Authentication
              setUserUsername={setUserUserName}
              setIsLoggedIn={setIsLoggedIn}
            />
          )
      }
    </div>
  )
}

export default App
