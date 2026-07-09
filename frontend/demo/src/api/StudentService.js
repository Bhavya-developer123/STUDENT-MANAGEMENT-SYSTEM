import StudentApi from "./StudentApi";

export const getAllStudents = () => {
    return StudentApi.get("/students");
};

export const deleteStudent = (id) => {
    return StudentApi.delete(`/students/delete/${id}`);
};
export const addStudent=(student)=>{
    return StudentApi.post("/students",student);
};
export const getStudentById = (id) => {
    return StudentApi.get(`/students/${id}`);
};

export const editStudent = (id, student) => {
    return StudentApi.put(`/students/update/${id}`, student);
};