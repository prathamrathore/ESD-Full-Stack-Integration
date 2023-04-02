import React from 'react'
import {Navbar, Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
const NavBar = ({ user, setUser, setCourses, setStudents }) => {
  const logout = () => {
    window.localStorage.removeItem('loggedInUser')
    setCourses(null)
    setStudents(null)
    setUser(null)
  }

  if (!user)
    return null

  return (
    // <div className='regular-shadow mb-1'>
    //   <nav className='navbar navbar-expand-lg navbar-dark' id='menu'>
    //     <h2 >Welcome, {user.firstName} {user.lastName}</h2>
    //     <div  style={{marginLeft : "10%"}}><button className='btn btn-primary' onClick={logout}>Logout</button></div>
    //   </nav>
    // </div>
      <Navbar>
        <Container>
          <Navbar.Brand style={{fontSize : "22px"}} href="#home">Courses You Teach Are-</Navbar.Brand>
                    <Navbar.Toggle />
          <Navbar.Collapse style={{fontSize : "22px"}} className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{user.firstName} {user.lastName} &nbsp;</a>

            </Navbar.Text>

          </Navbar.Collapse>
            <Button  style={{fontSize: "15px"}} type='submit' id='login-submit' onClick={logout}>LOGOUT</Button>

        </Container>
      </Navbar>


  )
}

export default NavBar