import React, {useState} from 'react'
import Students from "./Students";
import scheduleService from "../services/schedule";
import Button from "react-bootstrap/Button";


const CourseSchedule = ({ courses }) => {

    const [ students, setStudents ] = useState(null)
    const [courseId,setCourseId] = useState(null);
    if (courses && courses.length === 0)
    return (
        <div>
            <h2>You have no Courses Scheduled.</h2>
        </div>
    )

    const showStudents = async (courseId) => {
        try {
            const response = await scheduleService.getStudents(courseId)
            setCourseId(courseId);
            setStudents(response)
        }
        catch(excepton) {
            alert("show students inside courseschedule")
        }
    }

    return (
        <div>
            {courses && courses.map((c) => {
                return (
                    <div style={{marginLeft: "10%"}} key={c.id}>
                        <h3>Subject : {c.name}</h3>
                        {/*<h3>Year: {c.year}</h3>*/}
                        {/*<h3>Capacity: {c.capacity}</h3>*/}
                        <div>
                        <button onClick={() => showStudents(c.id)}>
                            View Students List
                        </button>
                        </div>
                        <br/>

                        {
                            students && (courseId===c.id) &&
                            <Students
                                StudentList={students}
                                courseId={c.id}
                            />
                        }
                        <br/>
                        {/*<Schedules*/}
                        {/*    schedules={c.schedules}*/}
                        {/*/>*/}
                    </div>
            );})}
        </div>
    )
}

export default CourseSchedule
