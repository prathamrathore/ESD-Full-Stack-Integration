package com.mt2022082.erp.dao.DAOImplementation;

import com.mt2022082.erp.bean.Student;
import com.mt2022082.erp.dao.student_idDAO;
import com.mt2022082.erp.util.EntityManagerUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

public class Student_idDAOImplementation implements student_idDAO {
    public Student getStudentByStudentId(int student_id) {
        EntityManager entityManager = EntityManagerUtil.getEntityManagerFactory().createEntityManager();
        System.out.println(student_id);
        entityManager.getTransaction().begin();
        TypedQuery<Student> query = entityManager.createQuery(
                "SELECT e FROM Student e WHERE e.id = ?1", Student.class);
        Object student = query.setParameter(1, student_id).getSingleResult();
        entityManager.close();
        return (Student) student;
    }


}
