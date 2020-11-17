import React, { useEffect, useState } from 'react';
import './Classes.css';
// import fakeData from '../fakeData/fakeData';
import ClassItems from '../ClassItems/ClassItems';
import NavBar from '../Shared/NavBar/NavBar';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';

const Classes = () => {

    // const [service, setService] = useState(fakeData);
    // console.log(service);

    const [service, setService] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-castle-90518.herokuapp.com/getClass')
        .then(res => res.json())
        .then(data => setService(data))
    }, [])

    return (
        <>
        <div className="class-container">

            <div className="class-heading text-center">
                
                <NavBar></NavBar>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="header-tag">
                    <h1>OUR CLASSES</h1>
                </div>
                
            </div>
           <section>
               <Container>
               <div className="row">
                {
                    service.map(service => <ClassItems service={service} key={service.id}></ClassItems>)
                }
            </div>
               </Container>
           </section>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Classes;