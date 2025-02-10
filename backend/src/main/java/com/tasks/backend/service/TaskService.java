package com.tasks.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tasks.backend.models.TaskModel;
import com.tasks.backend.repository.TaskRepository;

@Service
public class TaskService {
    
    @Autowired
    private TaskRepository repository;

    // GET
    public Iterable<TaskModel> allTask(){
        return repository.findAll();
    }

    // POST/PUT - Registro ou Modificação
    
}
