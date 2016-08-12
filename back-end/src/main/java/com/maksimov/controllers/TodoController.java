package com.maksimov.controllers;

import com.maksimov.model.Todo;
import com.maksimov.services.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created on 12.08.16.
 */
@Controller
@Component
@RequestMapping("/todos")
public class TodoController {

    @Autowired
    private TodoService todoService;

    @RequestMapping(value = "/get/all")
    @ResponseBody
    public List<Todo> getAllTodos() {
        return todoService.getAll();
    }

    @RequestMapping(value = "/put", method = RequestMethod.POST)
    @ResponseBody
    public void putTodo(@RequestBody Todo todo) {
        todoService.saveTodo(todo);
    }

    @RequestMapping("/delete")
    @ResponseBody
    public void delete(Todo todo) {
        todoService.deleteTodo(todo);
    }

}
