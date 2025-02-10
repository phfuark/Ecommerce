package com.tasks.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tasks.backend.models.TaskModel;
import com.tasks.backend.service.*;

@RestController
@CrossOrigin(origins = "*")
public class TaskController {

    @Autowired 
    private TaskService action;
    
    @GetMapping("/")
     public String rout(){
        return "API está funcionando!";
    } 

    @GetMapping("/Tasks")
    public Iterable<TaskModel> listAll(){
        return action.allTask();
    }

}
