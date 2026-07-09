import { Link } from "react-router-dom";
import "../styles/StudentCard.css";

function StudentCard({ student, onDelete }) {
    return (
        <div className="student-card">
            <h2>👤{student.name}</h2>
            <p><strong>🎓 Course:</strong> {student.course}</p>
            <p><strong>📧 Email:</strong> {student.email}</p>
            <p><strong>🎂 Age:</strong> {student.age}</p>
            <div className="btn-group">
                <Link to={`/edit-student/${student.id}`}>
                    <button className="edit-btn">Edit</button>
                </Link>
                <button className="delete-btn" onClick={() => onDelete(student.id)}>Delete</button>
            </div>
        </div>
    );
}

export default StudentCard;