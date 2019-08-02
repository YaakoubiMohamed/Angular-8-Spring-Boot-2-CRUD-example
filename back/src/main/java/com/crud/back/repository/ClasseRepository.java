/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.crud.back.repository;

/**
 *
 * @author mohamed
 */

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.crud.back.model.Classe;

@Repository
public interface ClasseRepository extends JpaRepository<Classe,Long> {

    
    
}
