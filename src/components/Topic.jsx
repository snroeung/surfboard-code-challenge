import React, {useState} from "react";
import {Button, Card, Modal, Form } from "react-bootstrap";

function Topic ( {
    topic, 
    id, 
    attendingTopic, 
    removeTopic, 
    setAddTimeDuration,
    setTopic
} ) {
    const [showEdit, setShowEdit] = useState(false);
    const [showComment, setShowComment] = useState(false);

    const [updatedTitle, setUpdatedTitle] = useState(topic.title);
    const [updatedTimeDuration, setUpdatedTimeDuration] = useState(topic.timeDuration);
    const [updatedText, setUpdatedText] = useState(topic.text);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const handleCloseComment = () => setShowComment(false);
    const handleShowComment = () => setShowComment(true);

    const editTopic = (title, text, timeDuration) => {
        const newTopic = [...topic];
        newTopic.title = title;
        newTopic.text = text;
        newTopic.timeDuration = timeDuration;
        setTopic(topic);
    }

    const handleChange = (e) => {
        //does not work
        e.preventDefault();
        editTopic(updatedTitle, updatedText, updatedTimeDuration);
    }

    return (
        <div className = "Topic">
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>{topic.title}</Card.Title>
                    <Card.Text>{topic.timeDuration}</Card.Text>
                    <Card.Text>{topic.text}</Card.Text>
                    <div className="TopicButtonsGroup">
                        {(topic.isAttending) ? <Button className="TopicButton" onClick={() => attendingTopic(id)} variant="success" size="sm">"Attending"</Button>: <Button className="TopicButton" onClick={() => attendingTopic(id)} size="sm">"Attending?"</Button>}
                        <Button className="TopicButton" onClick={() => removeTopic(id)} size="sm">Delete</Button>
                        <Button className="TopicButton" onClick={handleShowEdit} size="sm">Edit</Button>
                        <Button className="TopicButton" onClick={handleShowComment} size="sm">Comments</Button>
                    </div>
                </Card.Body>
            </Card>

            <Modal show={showEdit} onHide={handleCloseEdit}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Meeting</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={handleChange}>
                    <Form.Group>
                        <Form.Label><b>Add Meeting</b></Form.Label>
                        <Form.Control type="text" className="input" value={updatedTitle} onChange={event => setUpdatedTitle(event.target.value)} placeholder="Title of new meeting" />
                        <Form.Label><b>Add Description</b></Form.Label>
                        <Form.Control type="text" className="input" value={updatedText} onChange={event => setUpdatedText(event.target.value)} placeholder="Description of new meeting" />
                        <Form.Label><b>Add Time Duration</b></Form.Label>
                        <Form.Control type="text" className="input" value={updatedTimeDuration} onChange={event => setUpdatedTimeDuration(event.target.value)} placeholder="Description of new meeting" />
                        <Button type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
            </Modal.Footer>
            </Modal>  

            <Modal show={showComment} onHide={handleCloseComment}>
                <Modal.Header closeButton>
                    <Modal.Title>Comments</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="CommentSection">
                        <h3>*NOT FULLY IMPLEMENTED*</h3>
                        <p>If implemented, this would show a list of comments</p>
                        <Form>
                        <Form.Group>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Add comment</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>             
        </div>
    );
}
export default Topic;