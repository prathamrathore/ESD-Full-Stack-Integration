import { useState, useEffect } from 'react'
import loginService from './services/login'
import scheduleService from './services/schedule'
import Notification from './components/Notification'
import LoginForm from './components/LoginForm'
import NavBar from './components/NavBar'
import CourseSchedule from './components/CourseSchedule'
import Toast from 'react-bootstrap/Toast';

const App = () => {
  const [ user, setUser ] = useState(null)

  const [ courses, setCourses ] = useState([])
    
  const [ notification, setNotification ] = useState(null)
  const [ notificationType, setNotificationType ] = useState(null)

  const notificationHandler = (message, type) => {
    setNotification(message)
    setNotificationType(type)

    setTimeout(() => {
      setNotificationType(null)
      setNotification(null)
    }, 5000)

  }

  const handleLogin = async (credentials) => {
    try {
      const userObject = await loginService.login(credentials)
      setUser(userObject)
      window.localStorage.setItem('loggedInUser', JSON.stringify(userObject))
      
      notificationHandler(`Logged in successfully as ${userObject.firstName} ${userObject.lastName}`, 'success')
      setCourses([])
    }
    catch (exception) {
      notificationHandler(`Log in failed, check username and password entered`, 'error')
    }
  }

  useEffect(() => {
      async function fetchData() {
        if (user) {
          const course = await scheduleService.getEmployeeSchedule(user.email)
          setCourses(course)
        }
      }
      fetchData()
  }, [user])

  useEffect(() => {
    const loggedInUser = window.localStorage.getItem('loggedInUser')
    if (loggedInUser)
      setUser(JSON.parse(loggedInUser))
  }, [])

  return (
    <div>
      <div>
          <div align="center" style={{width: "80%",marginLeft:"10%", marginTop: "3%",fontSize: "50px", fontFamily: "sans-serif"}}>
            Faculty Workspace
            <br/>
          </div>
      </div>
      
      <Notification notification={notification} type={notificationType} />
      {
        user === null && 
        <LoginForm startLogin={handleLogin}/>
      }
      {
        user !== null && 
        <NavBar user={user} setUser={setUser} setCourses={setCourses}/>
      } 
      {
         user != null &&
        <CourseSchedule
          courses={courses}
        />
      }
    </div>
  )
}
export default App;
