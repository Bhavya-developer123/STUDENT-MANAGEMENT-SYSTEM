import { useState } from "react";
import { addStudent } from "../api/StudentService";
import { useNavigate } from "react-router-dom";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

function AddStudent() {
    const navigate = useNavigate();

    const [student, setStudent] = useState({
        name: "",
        age: "",
        course: "",
        email: ""
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setStudent({
            ...student,
            [name]: value
        });
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await addStudent(student);
            alert("✅ Student Added Successfully");
            setStudent({
                name: "",
                age: "",
                course: "",
                email: ""
            });
            navigate("/students");
        } catch (error) {
            console.log(error.response);
            console.log(error.message);
        }
    }

    return (
        <div style={{ maxWidth: "500px", margin: "50px auto", padding: "20px", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
            <h2 style={{ textAlign: "center", color: "#2c3e50" }}>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <Input 
                    type="text" 
                    name="name" 
                    placeholder="Enter Name" 
                    value={student.name} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="number" 
                    name="age" 
                    placeholder="Enter Age" 
                    value={student.age} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="text" 
                    name="course" 
                    placeholder="Enter Course" 
                    value={student.course} 
                    onChange={handleChange} 
                    required 
                />
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Enter Email" 
                    value={student.email} 
                    onChange={handleChange} 
                    required 
                />
                <Button type="submit" style={{ width: "100%", marginTop: "15px", backgroundColor: "#27ae60" }}>
                    Save Student
                </Button>
            </form>
        </div>
    );
}

export default AddStudent;