package com.mt2022082.erp.helper;

import com.mt2022082.erp.bean.Course;
import com.mt2022082.erp.bean.Employee;
import com.mt2022082.erp.dao.DAOImplementation.CourseDAOImplementation;
import com.mt2022082.erp.dao.DAOImplementation.EmployeeDAOImplementation;
import org.json.JSONArray;
import org.json.JSONObject;

import java.util.List;
public class CourseScheduleHelper {
    public Object getCoursesByEmployeeEmail(String email) {
        Employee employee1 = new EmployeeDAOImplementation().checkEmployeeCredentials(email);
        List<Course> courseList = new CourseDAOImplementation().getCourseByEmployeeId(employee1);
        return arrangeInJsonObject(courseList);
    }

    public String arrangeInJsonObject(List<Course> courseList) {
        if (courseList.size() == 0) return null;

        JSONArray masterList = new JSONArray();
        for (Course course : courseList) {
            JSONObject obj = new JSONObject();
            obj.put("name", course.getName());
            obj.put("id", course.getId());
            obj.put("year", course.getYear());
            obj.put("capacity", course.getCapacity());
            obj.put("code", course.getCourseCode());
            masterList.put(obj);
        }
        return masterList.toString();
    }

    public static void main () {
        CourseScheduleHelper obj = new CourseScheduleHelper();
        System.out.println(obj.getCoursesByEmployeeEmail("1@gmail.com"));
    }
}
