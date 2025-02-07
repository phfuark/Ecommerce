package com.tasks.backend.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.tasks.backend.models.TaksModel;

@Repository
public interface TaskRepository extends CrudRepository<TaksModel, Long>{
    
}
