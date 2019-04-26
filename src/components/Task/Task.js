import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const Task = props => {
    const tasks = props.tasks.length ? (
        props.tasks.map(task => {
            return (
                <ListGroup.Item
                    className={
                        "justify-content-between d-flex " +
                        (Boolean(task.status) ? "bg-success text-white" : "")
                    }
                    key={task.id}
                >
                    <div className="d-inline-block">
                    <input
                            type="checkbox"
                            value={task.status}
                            className="align-middle mr-2"
                            onChange={e => props.statusChange(e, task.id)}
                            checked={Boolean(task.status)}
                        />
                        {task.title}
                    </div>
                    <div className="d-inline-block">
                        <Button 
                            className="p-0 small"
                            variant="link"
                            size="sm"
                            onClick={() => props.deleteTask(task.id)}
                        >
                        Delete</Button>
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
