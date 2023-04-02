import React from "react"
import Student from './Student'
import {Table} from "react-bootstrap";
const Students = ({ StudentList, courseId }) => {

  console.log(courseId,"=======");
  if (StudentList && StudentList.length === 0)
    return (
      <h5>No one enrolled in this course.</h5>
    )
  
  return (
    <div style={{marginRight: "12%"}}>
      <h5>Students Registered in this course are </h5>
      <Table striped bordered hover>
        <tr>
          <th>Roll Number</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
            <th>Grade</th>
        </tr>
        { 
          StudentList && StudentList.map((b) =>
            <Student
                // key={index}
              student={b}
              courseId={courseId}
            /> 
          )
        }
      </Table>
    </div>
  )
}

export default Students
