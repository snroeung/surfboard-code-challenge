import Topic from "./Topic"
import React, { useState } from "react";
import {Form, Button, Modal} from "react-bootstrap";

function TopicsContainer() {
    const [topic, setTopic] = useState([{
        title: "Sample title",
        text: "Sample description",
        timeDuration: "1 hour",
        isAttending: false
    }]);

    const [addTitle, setAddTitle] = useState("");
    const [addText, setAddText] = useState("");
    const [addTimeDuration, setAddTimeDuration] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addTopic = (title, text, timeDuration) => {
        const newTopic = [...topic, { title: title, text: text, timeDuration: timeDuration}];
        setTopic(newTopic);
    }

    const attendingTopic = (id) => {
        const newTopic = [...topic];
        newTopic[id].isAttending = !topic[id].isAttending;
        setTopic(newTopic);
    }

    const removeTopic = (id) => {
        const newTopic = [...topic];
        newTopic.splice(id, 1);
        setTopic(newTopic);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addTitle && addText) {
            addTopic(addTitle, addText, addTimeDuration);
        }
    }


    return (
        <>
        <div className="TopicsContainer">
            {topic.map((topic, id) => (
                <Topic 
                key={id}
                id={id}
                topic={topic}
                attendingTopic={attendingTopic}
                removeTopic={removeTopic}
                addTitle={addTitle}
                addText={addText}
                addTimeDuration={addTimeDuration}
                setAddTitle={setAddTitle}
                setAddText={setAddText}
                setAddTimeDuration={setAddTimeDuration}
                setTopic={setTopic}
                />
            ))}
        </div>
            <div className="AddTopicContainer">
                <Button onClick={handleShow}>
                    Add meeting
                </Button>
    
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Meeting</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label><b>Add Meeting</b></Form.Label>
                            <Form.Control type="text" className="input" value={addTitle} onChange={event => setAddTitle(event.target.value)} placeholder="Title of new meeting" />
                            <Form.Label><b>Add Description</b></Form.Label>
                            <Form.Control type="text" className="input" value={addText} onChange={event => setAddText(event.target.value)} placeholder="Description of new meeting" />
                            <Form.Label><b>Add Time Duration</b></Form.Label>
                            <Form.Control type="text" className="input" value={addTimeDuration} onChange={event => setAddTimeDuration(event.target.value)} placeholder="Description of new meeting" />
                            <Button type="submit">Submit</Button>
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                </Modal.Footer>
                </Modal>           
            </div>
        </>
    );
}

export default TopicsContainer;