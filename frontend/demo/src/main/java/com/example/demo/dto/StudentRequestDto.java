package com.example.demo.dto;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class StudentRequestDto {
    @NotBlank
    private String name;
    @Min(18)
    private int age;
    @NotBlank
    private String course;
    @Email
    private String email;
}
