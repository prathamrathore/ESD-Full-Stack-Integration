package com.mt2022082.erp.dao.DAOImplementation;

import com.mt2022082.erp.bean.Course;
import com.mt2022082.erp.bean.Grades;
import com.mt2022082.erp.bean.Student;
import com.mt2022082.erp.bean.StudentCourse;
import com.mt2022082.erp.util.EntityManagerUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Root;

public class GradesDAOImplementation {
    public Grades updateStudentGrades(String gradePoints, int student_id, int course_id) {
        EntityManager entityManager= EntityManagerUtil.getEntityManagerFactory().createEntityManager();
        entityManager.getTransaction().begin();

        CriteriaBuilder builder = entityManager.getCriteriaBuilder();

        CriteriaQuery<StudentCourse> criteria = builder.createQuery(StudentCourse.class);
        Root<StudentCourse> root = criteria.from(StudentCourse.class);
        criteria.select(root);
        Student student = new Student_idDAOImplementation().getStudentByStudentId(student_id);
        Course course = new Course_idDAOImplementation().getCourseByCourseId(course_id);
        criteria.where(builder.equal(root.get("course"), course));
        criteria.where(builder.equal(root.get("student"), student));
        System.out.println(course_id);
        StudentCourse list = entityManager.createQuery(criteria).getSingleResult();
        Grades g = new Grades();
        g.setGradePoints(gradePoints);
        entityManager.persist(g);
        list.setGrades(g);
//        entityManager.persist(list);
        entityManager.getTransaction().commit();
        return g;
    }
}
