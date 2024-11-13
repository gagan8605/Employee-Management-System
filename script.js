// Fetch and display all employees
async function fetchEmployees() {
    const res = await fetch('/api/employees');
    const employees = await res.json();
    const employeeTableBody = document.getElementById('employeeTableBody');
    employeeTableBody.innerHTML = '';

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.employeeId}</td>
            <td>${employee.name}</td>
            <td>${employee.age}</td>
            <td>${employee.position}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.status}</td>
            <td>
                <button onclick="editEmployee('${employee._id}')">Edit</button>
                <button onclick="deleteEmployee('${employee._id}')">Delete</button>
            </td>
        `;
        employeeTableBody.appendChild(row);
    });
}

// Save or update an employee
async function saveEmployee() {
    const id = document.getElementById('employeeId').value;
    const employeeData = {
        name: document.getElementById('name').value,
        age: document.getElementById('age').value,
        position: document.getElementById('position').value,
        department: document.getElementById('department').value,
        salary: document.getElementById('salary').value,
        status: document.getElementById('status').value
    };

    if (id) {
        // Update employee
        await fetch(`/api/employees/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData),
        });
    } else {
        // Create new employee
        await fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(employeeData),
        });
    }

    clearForm();
    fetchEmployees();
}

// Edit employee
async function editEmployee(id) {
    const res = await fetch(`/api/employees/${id}`);
    const employee = await res.json();
    document.getElementById('employeeId').value = employee._id;
    document.getElementById('name').value = employee.name;
    document.getElementById('age').value = employee.age;
    document.getElementById('position').value = employee.position;
    document.getElementById('department').value = employee.department;
    document.getElementById('salary').value = employee.salary;
    document.getElementById('status').value = employee.status;
}

// Delete employee
async function deleteEmployee(id) {
    await fetch(`/api/employees/${id}`, { method: 'DELETE' });
    fetchEmployees();
}

// Clear the form fields
function clearForm() {
    document.getElementById('employeeId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('position').value = '';
    document.getElementById('department').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('status').value = 'active';
}

// Initial fetch of employees
fetchEmployees();
