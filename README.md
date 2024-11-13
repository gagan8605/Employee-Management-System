## Employee Management System
The Employee Management System is a secure web application designed to manage employee data efficiently. Users can add, view, edit, or delete employee records after logging in, with data stored in a MongoDB database. JWT-based authentication ensures secure access, making it ideal for HR departments to streamline employee management.

## Features
User Authentication: Secure login and signup with password encryption and JWT tokens.
Employee CRUD Operations: Create, view, update, and delete employee records.
Unique Employee ID: Each employee record has a system-generated unique ID.
Employee Details: Includes fields like name, age, position, department, salary, and status (active/inactive).
Authorization: Only authenticated users can access and modify employee data.
Responsive Design: Easy-to-navigate UI for efficient data management.
## Project Structure
employee-management-system/
├── public/
│   ├── index.html            # Main GUI
│   ├── login.html            # Login page
│   ├── signup.html           # Signup page
│   ├── script.js             # Main JavaScript file for index.html
│   └── style.css             # Shared CSS file
├── models/
│   ├── employee.js           # Employee model
│   └── user.js               # User model (for login/signup)
├── server.js                 # Main server file
├── package.json              # Node.js dependencies
└── .env                      # Environment variables (JWT secret)

Ensure you have the following installed:

Node.js: JavaScript runtime for backend operations.
MongoDB: NoSQL database for storing employee and user data.

Installation
Clone the repository:

bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system

Install dependencies:

bash
Copy code
npm install
Configure environment variables:

Create a .env file at the root with the following content:

JWT_SECRET=your_jwt_secret
Start MongoDB:

Make sure MongoDB is running on localhost:27017. Alternatively, you can configure MongoDB Atlas or a remote connection in server.js.

Run the application:

bash
Copy code
node server.js
Open your browser and navigate to:

http://localhost:3000
### API Endpoints
### Authentication
POST /api/signup: Registers a new user with a username and password.
POST /api/login: Authenticates the user, returning a JWT token on success.
Employee Management (Protected Routes)
GET /api/employees: Retrieves a list of all employees.
POST /api/employees: Adds a new employee record.
PUT /api/employees/
: Updates an employee record by ID.
DELETE /api/employees/
: Deletes an employee record by ID.
Note: Protected routes require an Authorization header with the format Bearer <token>.

### Usage

Employee Management:
Add new employees via the form on index.html.
View the employee list, edit entries, or delete records using the buttons beside each employee.

### Dependencies

Express: Web framework for handling HTTP requests.
Mongoose: MongoDB object modeling for Node.js.
bcrypt: Hashing passwords for secure storage.
jsonwebtoken: JWT library for secure user authentication.

### Troubleshooting

Token Not Stored: Ensure localStorage.setItem('token', data.token); is called on successful login.
CORS Issues: Make sure the server has CORS enabled.
Database Connection: Confirm MongoDB is running locally or update the connection string in server.js.
