/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.back.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.crud.back.exception.ResourceNotFoundException;
import com.crud.back.model.Classe;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.crud.back.repository.ClasseRepository;


//
@RestController
@Transactional
@RequestMapping("/api")
//@CrossOrigin(origins = "localhost:3000", maxAge = 3600)
@CrossOrigin(origins = "http://localhost:4200")
/**
 *
 * @author mohamed
 */
public class ClasseController {
    @Autowired
    private ClasseRepository ClasseRepository;
    
    @RequestMapping("/hello")
	public String index() {
		return "Spring Boot Example!!";
	}

    @GetMapping("/classes")
    public List<Classe> getAllClasss() {
        return  (List<Classe>) ClasseRepository.findAll();
        //return (List<Class>) ClasseRepository.findAll();
    }


    @GetMapping("/classes/{id}")
    public ResponseEntity<Classe> getClassById(@PathVariable(value = "id") Long departement)
        throws ResourceNotFoundException {
        Classe classes = ClasseRepository.findById(departement)
          .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + departement));
        return ResponseEntity.ok().body(classes);
    }
    
    @PostMapping("/classe")
    public Classe createClass(@Valid @RequestBody Classe classes) {
        return ClasseRepository.save(classes);
    }

    @PutMapping("/classes/{id}")
    public ResponseEntity<Classe> updateClass(@PathVariable(value = "id") Long departement,
         @Valid @RequestBody Classe classesDetails) throws ResourceNotFoundException {
        Classe classes = ClasseRepository.findById(departement)
        .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + departement));

        classes.setDepartement(classesDetails.getDepartement());
        classes.setLevel(classesDetails.getLevel());
        classes.setName(classesDetails.getName());
        final Classe updatedClass = ClasseRepository.save(classes);
        return ResponseEntity.ok(updatedClass);
    }

    @DeleteMapping("/classes/{id}")
    public Map<String, Boolean> deleteClass(@PathVariable(value = "id") Long departement)
         throws ResourceNotFoundException {
        Classe classes = ClasseRepository.findById(departement)
       .orElseThrow(() -> new ResourceNotFoundException("Class not found for this id :: " + departement));

        ClasseRepository.delete(classes);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
}
