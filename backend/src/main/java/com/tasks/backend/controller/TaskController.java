package com.tasks.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tasks.backend.models.TaskModel;
import com.tasks.backend.models.TaskResponse;
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

    @PostMapping("/registerTask")
    public ResponseEntity<?> register(@RequestBody TaskModel taskModelo){
        return action.registerOrChange(taskModelo, "Register");
    }

    @PutMapping("/changeTask")
    public ResponseEntity<?> change(@RequestBody TaskModel taskModelo){
        return action.registerOrChange(taskModelo, "Change");
    }

    @DeleteMapping("/removeTask/{code}")
    public ResponseEntity<TaskResponse> remove(@PathVariable long code){
        return action.remove(code);
    }
}
