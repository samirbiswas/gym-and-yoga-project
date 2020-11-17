
import React from 'react';
import { Button } from 'react-bootstrap';
import './AdvanceGymClassTime.css';

const AdvanceGymClassTime = () => {
    return (
        <div className="gymClassTime-container">
            <h2><span style={{'color': '#FCD842'}}>CLASS</span> SCHEDULE</h2>
            
            <div className="row">
                <div className="col-md-6">
                    <div className="days">
                        <h3>Monday</h3>
                        <p style={{'color': '#FCD842'}}>8.00 AM - 9.00 AM</p>
                    </div>
                    <div className="days">
                        <h3>Wednesday</h3>
                        <p style={{'color': '#FCD842'}}>7.00 AM - 8.00 AM</p>
                    </div>
                    <div className="days">
                        <h3>Friday</h3>
                        <p style={{'color': '#FCD842'}}>6.00 AM - 7.00 AM</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="days">
                        <h3>Tuesday</h3>
                        <p style={{'color': '#FCD842'}}>10.00 AM - 11.00 AM</p>
                    </div>
                    <div className="days">
                        <h3>Thursday</h3>
                        <p style={{'color': '#FCD842'}}>5.00 AM - 6.00 AM</p>
                    </div>
                    <div className="days">
                        <h3>Saturday</h3>
                        <p style={{'color': '#FCD842'}}>7.00 AM - 8.00 AM</p>
                    </div>
                </div>

            </div>
            <div className="button-area">
                <Button variant="warning">JOIN US</Button>
            </div>
        </div>
    );
};

export default AdvanceGymClassTime;