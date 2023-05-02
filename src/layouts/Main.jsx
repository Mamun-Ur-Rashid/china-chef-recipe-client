import React from 'react';
import Header from '../pages/shared/header/Header';
import Footer from '../pages/shared/footer/Footer';
import Home from '../pages/home/Home';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Home></Home> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;