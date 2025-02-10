package com.tasks.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.tasks.backend.models.TaskModel;
import com.tasks.backend.models.TaskResponse;
import com.tasks.backend.repository.TaskRepository;

@Service
public class TaskService {
    
    @Autowired
    private TaskResponse response;

    @Autowired
    private TaskRepository repository;

    // GET
    public Iterable<TaskModel> allTask(){
        return repository.findAll();
    }

    // POST/PUT - Registro ou Modificação
    public ResponseEntity<?> registerOrChange(TaskModel model, String action){
        if (model.getName().equals("") || model.getDescription().equals("") || !TaskModel.isValidDate(model.getTaskDate())){
            response.setMessage("Inválido, preencha todos os campos!");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        } else {
            if(action.equals("Change")){
                return new ResponseEntity<>(repository.save(model), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(repository.save(model), HttpStatus.CREATED);
            }
        }
    }

    // DELETEEEE
    public ResponseEntity<TaskResponse> remove(long code) {
        if (repository.findById(code).isPresent()) {
            repository.deleteById(code);
            response.setMessage("Task deleted successfully!");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            response.setMessage("Task not found!");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }
    
}