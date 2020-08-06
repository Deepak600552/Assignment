import React, {Component} from 'react';
import {Button, ButtonToolbar} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import ViewModel from './ViewModel';
 
export class MainView extends Component{

    constructor(props){
        super(props);
        this.state = { 
            addModelShow: false,
            name: '',
            id: null
        };
    }

    render(){
        let addModelClose =() => this.setState({addModelShow:false});
        return(
            <div className="row">
                <div className="col-6 mt-5 d-flex justify-content-center">
                <Card style={{ width: '25rem' }}>
                    <Card.Body >
                        <Card.Title><u className="color_heading">Member of United Nations</u></Card.Title>
                        <Card.Text>
                            <p className="name_space"><b>Designation :</b> Vice Chancellor</p>

                            <p className="name_space"><b>Coming to :</b> Los Angeles</p>

                            <p className="name_space"><b>Country :</b> United States of America</p>
                        </Card.Text>
                        <br/>
                        <ButtonToolbar>
                          <Button variant="warning" onClick={() =>this.setState({addModelShow:true, name: 'Egon Spengler', id: 'W012A3CDE'})}>
                           <b>More Detail...!</b>
                          </Button>
                          <ViewModel show={this.state.addModelShow} onHide={addModelClose} userId={this.state.id}/>
                        </ButtonToolbar>
                    </Card.Body>
                </Card>  
                </div>
                <div className="col-6 mt-5 d-flex justify-content-center">
                <Card style={{ width: '25rem' }}>
                    <Card.Body >
                        <Card.Title><u className="color_heading">Member of United Nations</u></Card.Title>
                        <Card.Text>
                        <p className="name_space"><b>Designation :</b> Vice President</p>

                        <p className="name_space"><b>Coming to :</b> United Kingdom</p>

                        <p className="name_space"><b>Country :</b> Dubai United Arab Emirates</p>                        </Card.Text>
                        <ButtonToolbar>
                          <Button variant="warning" onClick={() =>this.setState({addModelShow:true, name: 'Glinda Southgood', id: 'W07QCRPA4'})}>
                           <b>More Detail...!</b>
                          </Button>
                          <ViewModel show={this.state.addModelShow} onHide={addModelClose} userId={this.state.id} />
                        </ButtonToolbar>
                    </Card.Body>
                </Card>  
                </div>
            </div>
        )
    }
}