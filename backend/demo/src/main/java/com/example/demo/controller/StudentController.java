package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.StudentRequestDto;
import com.example.demo.dto.StudentResponseDto;
import com.example.demo.entity.Student;
import com.example.demo.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired 
    private StudentService service;
    @Operation(summary="Student saved",description="new student record")
    @PostMapping
    public StudentResponseDto saveStudent(@Valid @RequestBody StudentRequestDto dto){
        return service.saveStudent(dto);
    }
    @Operation(summary="Student get by id",description="return student details")
    @GetMapping("/{id}")
    public StudentResponseDto getStudent(@PathVariable int id){
        return service.getStudentById(id);
    }
    @Operation(summary="Student all students",description="return all students details")
    @GetMapping
    public List<StudentResponseDto> getStudents(){
        return service.getAllStudents();
    }
    @Operation(summary="Student updated by id",description="return updated student details")
    @PutMapping("/update/{id}")
    public StudentResponseDto updateStudent(@RequestBody StudentRequestDto dto,@PathVariable int id){
        return service.updateStudent(id,dto);
    }
    @DeleteMapping("/delete/{id}")
    @Operation(summary="Student delete by id",description="return message about student deletion")
    public String deleteStudent(@PathVariable int id){
        return service.deleteStudentById(id);
    }
    @Operation(summary="Student get by pages",description="return student details in pages")
    @GetMapping("/page")
    public Page<Student> getStudentspages(@RequestParam int page,@RequestParam int size){
        return service.getStudentspages(page,size);
    }
    @GetMapping("/sort")
    @Operation(summary="Student get by pages in sorting order",description="return student details in sorting order")
    public List<Student> getsorting(){
        return service.sortStudents();
    }
}
