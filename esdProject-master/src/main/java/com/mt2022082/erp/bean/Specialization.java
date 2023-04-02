package com.mt2022082.erp.bean;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "specialization")
public class Specialization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(unique = true, nullable = false)
    private String code;

    @Column(unique = false)
    private String name;

    private String description;

    @Column(nullable = false)
    private Integer Year;

    @Column(name = "credits_required", nullable = false)
    private Integer creditsRequired;

    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "specialization_course",
            joinColumns = { @JoinColumn(name = "course_id") },
            inverseJoinColumns = { @JoinColumn(name = "project_id") }
    )
    private Set<Specialization> specializations = new HashSet<>();
}
