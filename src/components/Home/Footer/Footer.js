import React from 'react';
import style from './Footer.module.css';
import surokkha from '../../../img/surokkha.png';
import { Link } from 'react-router-dom';
import ict from '../../../img/ict.png';
import affiliates from '../../../img/affiliates.png';
export default function Footer() {
    return (
        <section id={style.footerContainer}>
            <div className="container">

            </div>
            <div className="row">
                <div className="col-md-2">
                    <div className={style.colOne}>
                        <img className={style.surokkhaLogo} src={surokkha} alt="" />
                    </div>
                </div>
                <div className="col-md-2">
                    <div className={style.colTwo}>
                        <ul>
                            <li><Link to="">FAQ</Link></li>
                            <li><Link to="">Manual</Link></li>
                            <li><Link to="">Privacy Policy</Link></li>
                            <li><Link to="">Terms of service</Link></li>
                            <li><Link to="">Other Affiliates</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.colThree}>
                        <p className={style.title}>Developed by - Department of ICT  </p>
                        <div className={style.imgContainer}>
                            <img className={style.img} src={ict} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={style.colThree}>
                        <p className={style.title}>Developed by - Department of ICT  </p>
                        <div className={style.imgContainer}>
                            <img className={style.img} src={affiliates} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
