import React, { Component } from 'react';
import {Card} from 'react-bootstrap';
import alkem from '../img/alkem.png'
import alencure from '../img/alencure.png';
import instas from '../img/instas.png';
import mankind from '../img/mankind.jpg'


class Ourpartners extends Component{
    render(){
        return(
            <div className="container imgpartners" id="ourpartners">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>OUR PARTNERS</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 roww"> 
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={alkem} />
                        <Card.Body>
                            <Card.Title>Alken Pharmaceutical</Card.Title>
                            <Card.Text>
                                Stockist in generic medicine,Sagwara
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>

                   
                    <div className="col-sm-6 roww">
                        <Card style={{ width: '15rem' }}>
                        <Card.Img variant="top" src={mankind} />
                        <Card.Body>
                            <Card.Title>Mankind</Card.Title>
                            <Card.Text>
                                Stockist in generic medicine,Sagwara
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                    <div className="row">
                        <div className="col-sm-6 roww">
                                <Card style={{ width: '15rem' }}>
                                <Card.Img variant="top" src={alencure} />
                                <Card.Body>
                                    <Card.Title>Alencure</Card.Title>
                                    <Card.Text>
                                        Stockist in generic medicine,Sagwara
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                        </div>
                        <div className="col-sm-6 roww">
                            <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src={instas} />
                            <Card.Body>
                                <Card.Title>Intas Pharmaceutical</Card.Title>
                                <Card.Text>
                                    Stockist in generic medicine,Sagwara
                                </Card.Text>
                            </Card.Body> 
                            </Card>
                        </div>
                    </div>

                </div>
        );
    }
}

export default Ourpartners;