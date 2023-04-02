package com.mt2022082.erp.dao;

import com.mt2022082.erp.bean.Employee;

public interface EmployeeDAO {
    Employee checkEmployeeCredentials(String email);
}
