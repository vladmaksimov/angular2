package com.maksimov.services;

import com.maksimov.dao.TodoDao;
import com.maksimov.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created on 12.08.16.
 */
@Service
@Component
@Transactional
public class TodoServiceImpl implements TodoService{

    @Autowired
    private TodoDao todoDao;

    public void saveTodo(Todo todo) {
        todoDao.saveTodo(todo);
    }

    public void deleteTodo(Todo todo) {
        todoDao.deleteTodo(todo);
    }

    public List<Todo> getAll() {
        return todoDao.getAll();
    }

}
