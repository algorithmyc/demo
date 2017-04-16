package service;

import java.util.List;

import model.Employee;

public interface EmployeeService {

	public List<Employee> getAllEmployees();

	public Employee getEmployeeById(long id);

}