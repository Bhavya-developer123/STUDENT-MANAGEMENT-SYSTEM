package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.example.demo.dto.StudentRequestDto;
import com.example.demo.dto.StudentResponseDto;
import com.example.demo.entity.Student;
import com.example.demo.exception.StudentNotFoundException;
import com.example.demo.repository.StudentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class StudentService {
    @Autowired
    StudentRepository repo;
    @Autowired 
    MailService mailservice;
    private static final Logger logger=LoggerFactory.getLogger(StudentService.class);
    public StudentResponseDto saveStudent(StudentRequestDto dto){
        logger.info("Saving Student {}",dto.getName());
        Student s=new Student();
        s.setName(dto.getName());
        s.setAge(dto.getAge());
        s.setCourse(dto.getCourse());
        s.setEmail(dto.getEmail());
        Student saved=repo.save(s);
        mailservice.sendEmail(dto.getEmail(),"Registration Successful","Hello " + saved.getName() +",\nWelcome to Student Management System 🎓");
        logger.info("Student Saved Successfully id {}", saved.getId());
        StudentResponseDto response=new StudentResponseDto();
        response.setId(saved.getId());
        response.setName(saved.getName());
        response.setAge(saved.getAge());
        response.setCourse(saved.getCourse());
        response.setEmail(saved.getEmail());
        return response;
    }
    public StudentResponseDto getStudentById(int id){
        logger.info("Fetching student with id {}", id);
        Student s=repo.findById(id).orElseThrow(()->new StudentNotFoundException("Student is not found with id:"+id));
        StudentResponseDto response=new StudentResponseDto();
        response.setId(s.getId());
        response.setName(s.getName());
        response.setAge(s.getAge());
        response.setCourse(s.getCourse());
        response.setEmail(s.getEmail());
        return response;
    }
    public List<StudentResponseDto> getAllStudents(){
        List<Student>students=repo.findAll();
        List<StudentResponseDto>response=new ArrayList<>();
        for(int i=0;i<students.size();i++){
            Student s=students.get(i);
            StudentResponseDto dto=new StudentResponseDto();
            dto.setId(s.getId());
            dto.setName(s.getName());
            dto.setAge(s.getAge());
            dto.setCourse(s.getCourse());
            dto.setEmail(s.getEmail());
            response.add(dto);
        }
        return response;
    }
    public StudentResponseDto updateStudent(int id,StudentRequestDto dto){
        Student s=repo.findById(id).orElseThrow(()->new StudentNotFoundException("Student not found with id:"+id));
        s.setName(dto.getName());
        s.setAge(dto.getAge());
        s.setCourse(dto.getCourse());
        s.setEmail(dto.getEmail());
        Student updated=repo.save(s);
        StudentResponseDto response=new StudentResponseDto();
        response.setId(updated.getId());
        response.setName(updated.getName());
        response.setAge(updated.getAge());
        response.setCourse(updated.getCourse());
        response.setEmail(updated.getEmail());
        return response;
    }
    public String deleteStudentById(int id){
        logger.warn("Deleting student with id {}", id);
        Student s=repo.findById(id).orElseThrow(()->{logger.error("Student not found with id {}", id); return new StudentNotFoundException("student not found with id:"+id);});
        repo.delete(s);
        logger.info("Student deleted successfully with id {}", id);
        return "Student deleted successfully";
    }
    public Page<Student>getStudentspages(int page,int size){
        return repo.findAll(PageRequest.of(page,size));
    }
    public List<Student>sortStudents(){
        return repo.findAll(Sort.by("name"));
    }
}
