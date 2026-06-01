Student Management System

A Spring Boot REST API project for managing student records with CRUD operations, validation, exception handling, logging, email notifications, file uploads, pagination, and sorting.

Features
Create Student
Get Student by ID
Get All Students
Update Student
Delete Student
Validation using Jakarta Validation
Global Exception Handling
Logging with SLF4J
Swagger/OpenAPI Documentation
Pagination
Sorting
Email Notification on Registration
File Upload
MySQL Database Integration
Tech Stack
Java 17+
Spring Boot
Spring Data JPA
MySQL
Maven
Lombok
Swagger OpenAPI
Jakarta Validation
Project Structure
# Project Structure

```text
Student-Management-System
│
├── uploads/
│
├── src
│   ├── main
│   │   ├── java
│   │   │   └── com
│   │   │       └── example
│   │   │           └── demo
│   │   │               │
│   │   │               ├── DemoApplication.java
│   │   │               │
│   │   │               ├── controller
│   │   │               │   ├── StudentController.java
│   │   │               │   └── FileController.java
│   │   │               │
│   │   │               ├── dto
│   │   │               │   ├── StudentRequestDto.java
│   │   │               │   └── StudentResponseDto.java
│   │   │               │
│   │   │               ├── entity
│   │   │               │   └── Student.java
│   │   │               │
│   │   │               ├── repository
│   │   │               │   └── StudentRepository.java
│   │   │               │
│   │   │               ├── service
│   │   │               │   ├── StudentService.java
│   │   │               │   └── MailService.java
│   │   │               │
│   │   │               └── exception
│   │   │                   ├── StudentNotFoundException.java
│   │   │                   └── GlobalExceptionHandler.java
│   │
│   └── resources
│       └── application.properties
│
├── src/test
│   └── java
│       └── com
│           └── example
│               └── demo
│                   └── DemoApplicationTests.java
│
├── .gitignore
├── .gitattributes
├── mvnw
├── mvnw.cmd
├── pom.xml
└── README.md
```

Setup Instructions
1. Clone the Repository
git clone <repository-url>
cd demo
2. Create MySQL Database

Open MySQL and run:

CREATE DATABASE studentmanagementdb;
3. Configure Database

Update src/main/resources/application.properties

spring.datasource.url=jdbc:mysql://localhost:3306/studentmanagementdb
spring.datasource.username=your-username
spring.datasource.password=your-password
4. Configure Email

For email notifications, update:

spring.mail.username=your-email@gmail.com
spring.mail.password=your-gmail-app-password

Use a Gmail App Password, not your Gmail account password.

5. Create Uploads Folder

Create the following folder manually in the project root:

demo
└── uploads

or using terminal:

mkdir uploads

Uploaded files will be stored inside this folder.

6. Run the Project
./mvnw spring-boot:run

Application starts on:

http://localhost:8081
API Endpoints
Student APIs
Method	Endpoint	Description
POST	/students	Create Student
GET	/students/{id}	Get Student By ID
GET	/students	Get All Students
PUT	/students/update/{id}	Update Student
DELETE	/students/delete/{id}	Delete Student
GET	/students/page?page=0&size=5	Pagination
GET	/students/sort	Sort Students
File Upload API
Method	Endpoint
POST	/files/upload
Postman
Method: POST
Body → form-data
Key: file
Type: File
Value: Select file
Swagger Documentation

Open:

http://localhost:8081/swagger-ui/index.html
Sample Student Request
{
  "name": "preethi",
  "age": 20,
  "course": "CSBS",
  "email": "preethi@example.com"
}
Future Improvements
JWT Authentication
Role-Based Authorization
Docker Support
AWS Deployment
Unit & Integration Testing
