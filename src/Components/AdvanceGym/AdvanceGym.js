import React from 'react';
import AdvanceGymClassTime from '../AdvanceGymClassTime/AdvanceGymClassTime';
import AdvanceGymDetail from '../AdvanceGymDetail/AdvanceGymDetail';
import '../Classes/Classes.css';
import './AdvanceGym.css';

const AdvanceGym = () => {
    return (
        <section>
            <div className="class-heading text-center">
                <br/>
                <br/>
                <h3>Here will be the navigation bar</h3>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="header-tag">
                    <h1>ADVANCE GYM</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-md-7">
                    <AdvanceGymDetail></AdvanceGymDetail>
                </div>
                <div className="col-md-5">
                    <AdvanceGymClassTime></AdvanceGymClassTime>
                </div>

            </div>


        </section>
    );
};

export default AdvanceGym;