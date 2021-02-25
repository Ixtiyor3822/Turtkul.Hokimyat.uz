import React from 'react';
import Customer from './customers/Customer';
const Home = () => {
    return (
        <div className="container">
            <h2>Home page</h2>
            <p>Bu yerda qandayda bir yangiliklar chiqadi yoki Hokimyatda ishlovchilar haqida malumotlar joylashtiriladi</p>
            <Customer />
        </div>
    )
};

export default Home;