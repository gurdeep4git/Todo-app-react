import React from "react";
import { ListGroup } from "react-bootstrap";

const Task = props => {
    const tasks = props.tasks.length ? (
        props.tasks.map(task => {
            return (
                <ListGroup.Item
                    className={
                        "justify-content-between d-flex " +
                        (Boolean(task.status) ? "bg-success" : "")
                    }
                    key={task.id}
                >
                    <div
                        className="d-inline-block"
                        onClick={() => props.deleteTask(task.id)}
                    >
                        {task.title}
                    </div>
                    <div className="d-inline-block">
                        <input
                            type="checkbox"
                            value={task.status}
                            onChange={e => props.statusChange(e, task.id)}
                            checked={Boolean(task.status)}
                        />
                    </div>
                </ListGroup.Item>
            );
        })
    ) : (
        <ListGroup.Item>No Tasks left. Enjoy!</ListGroup.Item>
    );

    return (
        <div>
            <ListGroup>{tasks}</ListGroup>
        </div>
    );
};

export default Task;
