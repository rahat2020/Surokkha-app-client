import React from 'react';
import style from './Features.module.css';
import { Link } from 'react-router-dom';
import earphn from '../../../img/earphn.png';

export default function Features() {
    return (
        <section className="container">
            <div id={style.main}>
                <div className={style.Box}>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleIcon}>
                                <img className={style.img} src={earphn} alt="" />
                            </span>
                            <span className={style.text}>
                                Hotline
                            </span>
                        </Link>
                    </div>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleNum}>
                                333
                            </span>
                            <span className={style.text}>
                                National Call Center
                            </span>
                        </Link>
                    </div>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleNum}>
                                16263
                            </span>
                            <span className={style.text}>
                                Health Portal
                            </span>
                        </Link>
                    </div>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleNum}>
                                10655
                            </span>
                            <span className={style.text}>
                                IEDCR
                            </span>
                        </Link>
                    </div>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleNum}>
                                09666777222
                            </span>
                            <span className={style.text}>
                                Covid-19 Telehealth
                            </span>
                        </Link>
                    </div>
                    <div className={style.subBox}>
                        <Link to="telephone">
                            <span className={style.teleIcon}>
                                <img className={style.img} src={earphn} alt="" />
                            </span>
                            <span className={style.text}>
                               All Call Centers
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
