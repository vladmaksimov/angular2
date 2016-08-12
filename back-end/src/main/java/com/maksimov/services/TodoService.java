package com.maksimov.services;

import com.maksimov.model.Todo;

import java.util.List;

/**
 * Created on 12.08.16.
 */

public interface TodoService {

    void saveTodo(Todo todo);

    void deleteTodo(Todo todo);

    List<Todo> getAll();

}
