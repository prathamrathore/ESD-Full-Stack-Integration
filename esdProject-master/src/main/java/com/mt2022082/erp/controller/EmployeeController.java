package com.mt2022082.erp.controller;

import com.mt2022082.erp.bean.Employee;
import com.mt2022082.erp.bean.Grades;
import com.mt2022082.erp.dao.DAOImplementation.EmployeeDAOImplementation;
import com.mt2022082.erp.dao.DAOImplementation.GradesDAOImplementation;
import com.mt2022082.erp.helper.CourseScheduleHelper;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

import java.io.IOException;
import java.util.HashMap;

@Path("/employee")
public class EmployeeController {

    @POST
    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    public Response checkEmployeeCredentials(Employee employee) {
        System.out.println(employee.getEmail());
        Employee verifiedEmployee = new EmployeeDAOImplementation().checkEmployeeCredentials(employee.getEmail());

        if (verifiedEmployee == null) {
            return Response.status(203).build();
        }
        else {
            return Response.status(200).entity(verifiedEmployee).build();
        }
    }
    @GET
    @Path("/getCourseSchedulefor/{email}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getCourseScheduleByEmployeeId(@PathParam("email") String email) {

        CourseScheduleHelper helper = new CourseScheduleHelper();
        return Response.status(200).entity(helper.getCoursesByEmployeeEmail(email)).build();
    }

    @POST
    @Path("/updategrade")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updategrade(HashMap<String,Object> mp) throws IOException {
        System.out.println(mp);
       try{
//           System.out.println("grades=" + mp.get("grade").toString()  + " course_id = "+mp.get("course_id").toString()+" stud id "+mp.get("student_id").toString());
        Grades verifiedGrades = new GradesDAOImplementation().updateStudentGrades(mp.get("grade").toString(), Integer.parseInt(mp.get("student_id").toString()), Integer.parseInt(mp.get("course_id").toString()));
        if (verifiedGrades == null) {
            return Response.status(203).build();
        }
        else {
            return Response.status(200).entity(verifiedGrades).build();
        }}catch (Exception e){
           e.printStackTrace();
           return Response.status(500).build();
       }
    }

}
