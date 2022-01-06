import React from 'react';
import style from './Mujib.module.css';
import mujib from '../../../img/mujib.png';
import googlePlay from '../../../img/googlePlay.png';
import appStore from '../../../img/appStore.png';

export default function Mujib() {
    return (
        <section className="container mb-5">
            <div className={style.mujibContainer}>
                <div className={style.mujibHeader}>
                    <h2 className={style.mujibTitle}>Mujib 100</h2>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="https://mujib100.gov.bd/" target="_blank">
                                <div className="d-block justify-content-center align-items-center">
                                    <div className={style.boxOne}>
                                        <img className={style.mujibImg} src={mujib} alt="" />
                                    </div>
                                    <p> <strong>Mujib 100 iOS App</strong> </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4">
                            <a href="https://play.google.com/store/apps/details?id=bd.gov.mujib100app" target="_blank">
                                <div className="d-block justify-content-center align-items-center">
                                     <div className={style.boxTwo}>
                                        <img className={style.googlePlay} src={googlePlay} alt="" />
                                    </div>
                                    <p> <strong>Mujib 100 iOS App</strong> </p>
                                </div>
                            </a>

                        </div>
                        <div className="col-md-4">
                            <a href="https://apps.apple.com/us/app/mujib100-app/id1538327787" target="_blank">
                                <div className="d-block justify-content-center align-items-center">
                                    <div className={style.boxTwo}>
                                        <img className={style.appStore} src={appStore} alt="" />
                                    </div>
                                    <p> <strong>Mujib 100 iOS App</strong> </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
