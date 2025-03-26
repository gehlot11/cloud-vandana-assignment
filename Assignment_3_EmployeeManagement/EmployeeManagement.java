// Employee Management System Assignment - Java File
import java.util.ArrayList;
import java.util.List;

class Employee {
    int id;
    String name;
    double salary;

    Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    public void displayDetails() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("-----------------------");
    }
}

public class EmployeeManagement {

    public static void main(String[] args) {
        List<Employee> employees = new ArrayList<>();
        employees.add(new Employee(1, "Mitali Gehlot", 55000));
        employees.add(new Employee(2, "John Doe", 60000));
        employees.add(new Employee(3, "Jane Smith", 65000));

        for (Employee emp : employees) {
            emp.displayDetails();
        }
    }
}
