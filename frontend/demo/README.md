<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
=======
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
>>>>>>> 4d757bb3f8b16c091d44d43aeda31812b1fd15da
