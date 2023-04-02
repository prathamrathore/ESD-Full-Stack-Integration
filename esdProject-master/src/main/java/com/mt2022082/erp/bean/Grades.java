package com.mt2022082.erp.bean;

import jakarta.persistence.*;

@Entity
@Table(name = "grades")
public class Grades {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    public Grades(String gradePoints) {
        this.gradePoints = gradePoints;
    }
    public Grades(){}


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "grade_points", nullable = false)
    private String gradePoints;

    public String getGradePoints() {
        return gradePoints;
    }

    public void setGradePoints(String gradePoints) {
        this.gradePoints = gradePoints;
    }
}
