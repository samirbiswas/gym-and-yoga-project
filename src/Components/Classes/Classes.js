import React, { useState } from 'react';
import './Classes.css';
import fakeData from '../fakeData/fakeData';
import ClassItems from '../ClassItems/ClassItems';
import NavBar from '../Shared/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Classes = () => {
    const [service] = useState(fakeData);
    return (
        <>
        <div className="class-container">
            <div className="class-heading text-center">
            <NavBar></NavBar>
                <div className="header-tag">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <h1>OUR CLASSES</h1>
                </div>           
            </div>
          <section>
          <Container>
          <div className="row">
                {
                    service.map(service => <ClassItems service={service}></ClassItems>)
                }
            </div>
          </Container>
          </section>
        </div>
        <Footer>  </Footer>
        </>
    );
};

export default Classes;