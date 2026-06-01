package com.example.demo.dto;

import lombok.Data;

@Data
public class StudentResponseDto {
    private int id;
    private String name;
    private int age;
    private String course;
    private String email;
}
