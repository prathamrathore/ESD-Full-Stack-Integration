import React, {useState} from 'react'
import axios from "axios";

const Student = ({ student, courseId }) => {
    console.log(courseId,"=======2");
    const gradingUrl = "http://localhost:8080/erp-1.0-SNAPSHOT/api/employee/updategrade"

    const [ grade, setGrade ] = useState("")

    const uploadGrade = async (studentId, cid, grade,event) => {
        event.preventDefault();
        try {

            let bodyData = JSON.stringify({grade:grade,student_id:JSON.stringify(studentId),course_id:JSON.stringify(cid)});
            debugger;
            console.log(bodyData);
            fetch(gradingUrl,{method:"POST",body:bodyData,headers:{"Content-Type":"application/json"}}).then(res=>{
                if(res.status!==200)
                     throw new Error("Something Went Wrong");
                return res.json();
            }).then(data=>{
                 console.log(data);
            }).catch(e=>console.error(e));
        }
        catch (exception) {
        }
    }

    return (
    <tr>
      {/* Render the Bill's details */}
      <td>{student.roll_no}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
      <td>
          <div>
          <form onSubmit={(e)=>uploadGrade(student.id, courseId, grade,e)} id='grade-form'>
              <input
                  type='text'
                  name='grade'
                  placeholder='Grade'
                  value={grade}
                  onChange={(event) => setGrade(event.target.value)}
                  id={student.id + courseId}
              />
              <button type='submit' id='grade-submit'>Upload</button>
          </form>
          </div>
      </td>
    </tr>
  )
}
export default Student
