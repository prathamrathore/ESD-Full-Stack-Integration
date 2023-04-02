package com.mt2022082.erp.dao.DAOImplementation;

import com.mt2022082.erp.bean.Course;
import com.mt2022082.erp.dao.Course_idDAO;
import com.mt2022082.erp.util.EntityManagerUtil;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;

public class Course_idDAOImplementation implements Course_idDAO {
    public Course getCourseByCourseId(int courseId) {
        EntityManager entityManager = EntityManagerUtil.getEntityManagerFactory().createEntityManager();

        entityManager.getTransaction().begin();
        TypedQuery<Course> query = entityManager.createQuery(
                "SELECT e FROM Course e WHERE e.id = ?1", Course.class);
        Object course = query.setParameter(1, courseId).getSingleResult();
        return (Course)course;
    }

}
