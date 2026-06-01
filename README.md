<div align="center">

# 🎓 Student Management System

A Spring Boot REST API project for managing student records with CRUD operations, validation, exception handling, logging, email notifications, file uploads, pagination, and sorting.

</div>

---

# ✨ Features

* ✅ Create Student
* ✅ Get Student By ID
* ✅ Get All Students
* ✅ Update Student
* ✅ Delete Student
* ✅ Validation using Jakarta Validation
* ✅ Global Exception Handling
* ✅ Logging with SLF4J
* ✅ Swagger/OpenAPI Documentation
* ✅ Pagination
* ✅ Sorting
* ✅ Email Notification on Registration
* ✅ File Upload
* ✅ MySQL Database Integration

---

# 🛠️ Tech Stack

| Technology         | Usage                      |
| ------------------ | -------------------------- |
| Java 17+           | Programming Language       |
| Spring Boot        | Backend Framework          |
| Spring Data JPA    | Database Operations        |
| MySQL              | Database                   |
| Maven              | Dependency Management      |
| Lombok             | Boilerplate Code Reduction |
| Swagger/OpenAPI    | API Documentation          |
| Jakarta Validation | Request Validation         |

---

# 📂 Project Structure

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
│   │   │
│   │   │               ├── DemoApplication.java
│   │   │
│   │   │               ├── controller
│   │   │               │   ├── StudentController.java
│   │   │               │   └── FileController.java
│   │   │
│   │   │               ├── dto
│   │   │               │   ├── StudentRequestDto.java
│   │   │               │   └── StudentResponseDto.java
│   │   │
│   │   │               ├── entity
│   │   │               │   └── Student.java
│   │   │
│   │   │               ├── repository
│   │   │               │   └── StudentRepository.java
│   │   │
│   │   │               ├── service
│   │   │               │   ├── StudentService.java
│   │   │               │   └── MailService.java
│   │   │
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

---

# ⚙️ Setup Instructions

## 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd demo
```

---

## 2️⃣ Create MySQL Database

Run the following command in MySQL:

```sql
CREATE DATABASE studentmanagementdb;
```

---

## 3️⃣ Configure Database

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/studentmanagementdb
spring.datasource.username=your-username
spring.datasource.password=your-password
```

---

## 4️⃣ Configure Email

```properties
spring.mail.username=your-email@gmail.com
spring.mail.password=your-gmail-app-password
```

> Use a Gmail App Password, not your Gmail account password.

---

## 5️⃣ Create Uploads Folder

Create the folder manually:

```text
demo
└── uploads
```

Or using terminal:

```bash
mkdir uploads
```

Uploaded files will be stored in this folder.

---

## 6️⃣ Run the Project

```bash
./mvnw spring-boot:run
```

Application runs at:

```text
http://localhost:8081
```

---

# 📌 API Endpoints

## Student APIs

| Method | Endpoint                       | Description       |
| ------ | ------------------------------ | ----------------- |
| POST   | `/students`                    | Create Student    |
| GET    | `/students/{id}`               | Get Student By ID |
| GET    | `/students`                    | Get All Students  |
| PUT    | `/students/update/{id}`        | Update Student    |
| DELETE | `/students/delete/{id}`        | Delete Student    |
| GET    | `/students/page?page=0&size=5` | Pagination        |
| GET    | `/students/sort`               | Sort Students     |

---

## File Upload API

| Method | Endpoint        |
| ------ | --------------- |
| POST   | `/files/upload` |

### Postman Testing

* Method: **POST**
* Body → **form-data**
* Key: **file**
* Type: **File**
* Value: Select any file

---

# 📖 Swagger Documentation

Open:

```text
http://localhost:8081/swagger-ui/index.html
```

---

# 🧪 Sample Student Request

```json
{
  "name": "Preethi",
  "age": 20,
  "course": "CSBS",
  "email": "preethi@example.com"
}
```

---

# 🚀 Future Improvements

* JWT Authentication
* Role-Based Authorization
* Docker Support
* AWS Deployment
* Unit Testing
* Integration Testing

---

<div align="center">

### 👨‍💻 Developed by Bhavya Sri

Spring Boot Developer | Open Source Contributor

</div>
