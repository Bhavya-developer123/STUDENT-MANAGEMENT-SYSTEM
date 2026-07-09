import React, { useState } from 'react';
import { 
  Users, UserPlus, GraduationCap, BookOpen, 
  Search, SlidersHorizontal, Trash2, Edit3, X
} from 'lucide-react';

export default function Home() {
  // Mock Data for Students
  const [students, setStudents] = useState([
    { id: "STU001", name: "Sarah Jenkins", email: "sarah.j@edu.com", grade: "12th", status: "Active", gpa: "3.9" },
    { id: "STU002", name: "Michael Chang", email: "m.chang@edu.com", grade: "11th", status: "Active", gpa: "3.7" },
    { id: "STU003", name: "Amara Okezie", email: "amara.o@edu.com", grade: "12th", status: "Pending", gpa: "4.0" },
    { id: "STU004", name: "James Wilson", email: "j.wilson@edu.com", grade: "10th", status: "Inactive", gpa: "2.8" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({ name: "", email: "", grade: "12th", gpa: "" });

  // Handle Adding Student
  const handleAddStudent = (e) => {
    e.preventDefault();
    const studentToAdd = {
      id: `STU00${students.length + 1}`,
      ...newStudent,
      status: "Active"
    };
    setStudents([...students, studentToAdd]);
    setIsModalOpen(false);
    setNewStudent({ name: "", email: "", grade: "12th", gpa: "" });
  };

  // Filtered Students List
  const filteredStudents = students.filter(student => 
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans antialiased text-slate-800">
      
      {/* 1. SIDEBAR NAVIGATION */}
      <aside className="w-64 bg-slate-900 text-slate-300 hidden md:flex flex-col p-6 border-r border-slate-800">
        <div className="flex items-center gap-3 px-2 mb-8">
          <div className="p-2 bg-indigo-600 rounded-xl text-white">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white leading-none">EduPulse</h1>
            <span className="text-xs text-slate-500 font-medium">Management SMS</span>
          </div>
        </div>

        <nav className="space-y-1 flex-1">
          <button type="button" className="w-full flex items-center gap-3 px-4 py-3 bg-indigo-600 text-white rounded-xl font-medium text-left">
            <Users className="w-5 h-5" /> Students
          </button>
          <button type="button" className="w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-800 hover:text-white rounded-xl font-medium text-left text-slate-300 transition-all group">
            <BookOpen className="w-5 h-5 text-slate-500 group-hover:text-indigo-400" /> Courses
          </button>
        </nav>

        <div className="pt-4 border-t border-slate-800 text-xs text-slate-500 font-medium px-2">
          Logged in as: Administrator
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-6 lg:p-10 max-w-7xl mx-auto w-full overflow-x-hidden">
        
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900">Student Directory</h2>
            <p className="text-slate-500 text-sm mt-1">Manage admissions, view metrics, and update student profiles.</p>
          </div>
          <button 
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-md hover:bg-indigo-700 active:scale-95 transition-all text-sm"
          >
            <UserPlus className="w-4 h-4" /> Add New Student
          </button>
        </header>

        {/* 3. METRIC CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Total Enrollment</span>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">{students.length}</h3>
            </div>
            <div className="p-3 bg-indigo-50 text-indigo-600 rounded-xl"><Users className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Average GPA</span>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">3.6</h3>
            </div>
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><GraduationCap className="w-6 h-6" /></div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-slate-400 uppercase">Active Classes</span>
              <h3 className="text-3xl font-bold text-slate-900 mt-1">14</h3>
            </div>
            <div className="p-3 bg-amber-50 text-amber-600 rounded-xl"><BookOpen className="w-6 h-6" /></div>
          </div>
        </section>

        {/* 4. CONTROLS BAR */}
        <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          <div className="relative w-full sm:max-w-xs">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by name or ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            />
          </div>
          <button type="button" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 text-slate-600 font-medium rounded-xl hover:bg-slate-50 text-sm transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* 5. DATA TABLE */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/70 border-b border-slate-100 text-xs font-bold text-slate-500 tracking-wider">
                  <th className="p-4">Student ID</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Grade</th>
                  <th className="p-4">GPA</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {filteredStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-4 font-mono font-semibold text-xs text-slate-500">{student.id}</td>
                    <td className="p-4">
                      <div className="font-semibold text-slate-900">{student.name}</div>
                      <div className="text-xs text-slate-400">{student.email}</div>
                    </td>
                    <td className="p-4 text-slate-600">{student.grade}</td>
                    <td className="p-4 font-medium text-slate-900">{student.gpa}</td>
                    <td className="p-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        student.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 
                        student.status === 'Pending' ? 'bg-amber-50 text-amber-700' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="p-4 text-right space-x-2">
                      <button type="button" className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-100 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* 6. MODAL DIALOG (ADD STUDENT) */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 max-w-md w-full p-6 relative">
            <button 
              type="button"
              onClick={() => setIsModalOpen(false)} 
              className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100"
            >
              <X className="w-4 h-4" />
            </button>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4">Register Student</h3>
            
            <form onSubmit={handleAddStudent} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Full Name</label>
                <input 
                  type="text" required 
                  value={newStudent.name}
                  onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Email Address</label>
                <input 
                  type="email" required 
                  value={newStudent.email}
                  onChange={(e) => setNewStudent({...newStudent, email: e.target.value})}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">Grade Level</label>
                  <select 
                    value={newStudent.grade}
                    onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl bg-white outline-none text-sm"
                  >
                    <option>10th</option>
                    <option>11th</option>
                    <option>12th</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-500 mb-1">GPA</label>
                  <input 
                    type="number" step="0.1" max="4.0" required 
                    value={newStudent.gpa}
                    onChange={(e) => setNewStudent({...newStudent, gpa: e.target.value})}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none text-sm"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="w-full mt-2 py-2.5 bg-indigo-600 text-white font-medium rounded-xl shadow-lg shadow-indigo-100 hover:bg-indigo-700 transition-colors text-sm"
              >
                Submit Admission
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}