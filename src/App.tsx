import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import {Route, Routes} from "react-router-dom";
import About from "./components/About/About";
// @ts-ignore
import styles from './App.module.css';

function App() {


    return (
        <div className={styles.app_wrapper}>

            <div className={styles.header}>
                <Header/>
            </div>


            <div className={styles.bottom_part}>

                <div className={styles.navbar}>
                    <Navbar/>
                </div>

                <div className={styles.content}>
                    <Routes>

                        <Route path="/user/:userID" element={<ProfilePage/>}/>
                        <Route path="/" element={<About/>}/>

                    </Routes>

                </div>

            </div>


        </div>
    );
}

export default App;
