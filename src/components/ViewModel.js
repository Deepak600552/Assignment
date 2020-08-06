import React from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import data from '../data.json';

const ViewModel = (props) => {
        const data1 = data.members; 
        const currData = data1.filter(d => d.id == props.userId);
        const userObj = {}
        currData.map(user => {
            userObj["name"] = user.real_name;
            userObj["tzs"] = user.tz;
        })
         const timeZone =  currData.map(user => (
                user.activity_periods.map(time => (
                    <div>
                        <p><b>Activity Period</b></p>
                        <p>Start Time: {time.start_time}</p>
                        <p>End Time: {time.end_time}</p>
                    </div>  
                ))
            ))
            console.log(timeZone)
        
        return(
            <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      More Details
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                    <p><b>Name:</b> {userObj.name}</p>
                    <p><b>Time Zone:</b> {userObj.tzs}</p>
                    {timeZone}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
}

export default ViewModel