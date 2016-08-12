package com.maksimov.dao;

import com.maksimov.model.Todo;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created on 12.08.16.
 */

@Repository
@Component
public class TodoDaoImpl implements TodoDao {

    @Autowired
    @Qualifier(value = "sessionFactory")
    private SessionFactory sessionFactory;

    public void saveTodo(Todo todo) {
        sessionFactory.getCurrentSession().save(todo);
    }

    public void deleteTodo(Todo todo) {
        sessionFactory.getCurrentSession().delete(todo);
    }

    @SuppressWarnings("inchecked")
    public List<Todo> getAll() {
        return (List<Todo>) sessionFactory.getCurrentSession().createCriteria(Todo.class).list();
    }
}
