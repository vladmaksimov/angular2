package com.maksimov.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Created on 12.08.16.
 */

@Entity
@Table(name = "todo")
public class Todo {

    @Id
    @Column(name = "title")
    private String title;
    @Column(name = "done")
    private Boolean done;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Boolean getDone() {
        return done;
    }

    public void setDone(Boolean done) {
        this.done = done;
    }
}
