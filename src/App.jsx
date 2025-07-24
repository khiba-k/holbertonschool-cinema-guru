import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Authentication from './routes/auth/Authentication.jsx'
import Dashboard from './routes/dashboard/Dashboard.jsx'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userUserName, setUserUserName] = useState('');

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    console.log('Access Token, App.jsx:', accessToken);

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
          (
            <>
              <Dashboard
                userUsername={userUserName}
                setIsLoggedIn={setIsLoggedIn}
              />
              <p>Logged In</p>
            </>
          ) :
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
