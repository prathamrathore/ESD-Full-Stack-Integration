package com.mt2022082.erp.dao;

import com.mt2022082.erp.bean.CourseSchedule;
import com.mt2022082.erp.bean.Course;

import java.util.*;

public interface CourseScheduleDAO {
    List<List<CourseSchedule>> getCourseSchedule(List<Course> coursesList);
}
