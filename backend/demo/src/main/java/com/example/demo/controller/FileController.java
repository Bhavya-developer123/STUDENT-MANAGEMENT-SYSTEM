package com.example.demo.controller;

import java.io.File;
import java.io.IOException;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/files")
public class FileController {
    @PostMapping("/upload")
    public String uploadFile(@RequestParam("file")MultipartFile file) {
          try {
            if (file.isEmpty()) {
                return "File is empty";
            }
            String path ="D:/STUDENT MANAGEMENT SYSTEM/demo/uploads/";
            File directory = new File(path);
            if (!directory.exists()) {
                directory.mkdirs();
            }
            String filePath=path + file.getOriginalFilename();
            file.transferTo(new File(filePath));
            return "File uploaded successfully";
        } catch (IOException e) {
            e.printStackTrace();
            return "Error: " + e.getMessage();
        }
    }
}