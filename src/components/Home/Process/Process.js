import React from 'react';
import style from './Process.module.css';
import registration from '../../../img/registration.png';
import sms from '../../../img/sms.png';
import hospital from '../../../img/hospital.png';
import googlePlay from '../../../img/googlePlay.png';
import { Link } from "react-router-dom";

export default function Process() {
    return (
        <section className="container">
            <div className={style.processCard}>
                <div className={style.processHeader}>
                    <h2>The process of receiving the Covid-19 corona vaccine</h2>
                    <div className="mt-5" id={style.box}>

                        <div className="row">
                            <div className="col-md-4">
                                <img className={style.registrationImg} src={registration} alt="" />
                                <h3> <strong>Online Registration</strong> </h3>
                                <p className={style.regisPara}>First, you have to complete the online registration by verifying your national identity card and correct mobile number through this portal.</p>
                            </div>
                            <div className="col-md-4">
                                <img className={style.registrationImg} src={sms} alt="" />
                                <h3> <strong>SMS Notification</strong> </h3>
                                <p className={style.regisPara}>After registering online, you will receive a text message on your mobile phone mentioning the date of vaccination and the name of the vaccination center.</p>
                            </div>
                            <div className="col-md-4">
                                <img className={style.registrationImg} src={hospital} alt="" />
                                <h3> <strong>Vaccination</strong> </h3>
                                <p className={style.regisPara}>Subject to receiving a text message on the mobile phone, you have to appear in person at the vaccination center on the specified date with the vaccine card, national identity card and signed consent form to receive the Covid-19 vaccine.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* download android app */}
            <div className="mt-5 mb-4">
                <div className="row" id={style.box}>
                    <div className="col-md-6">
                        <div className="colLeft">
                            <h6> <strong>Download App</strong> </h6>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <a href="https://play.google.com/store/apps/details?id=com.codersbucket.surokkha_app" target="_blank">
                            <img className={style.googlePlayImg} src={googlePlay} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
