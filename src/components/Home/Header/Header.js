import React from 'react';
import style from './Header.module.css';
import people from '../../../img/people.png';
import nid from '../../../img/nid.png';
import {Link} from "react-router-dom";
import checkMark from '../../../img/checkMark.png';
import card from '../../../img/card.png';
import certificate from '../../../img/certificate.png';
import question from '../../../img/question.png';
export default function Header() {
    return (
        <section id={style.head}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6" id={style.colLeft}>
                        <div className={style.boxOne}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img src={people} alt="" id={style.colLeftImg}/>
                                <strong className={style.title}>  VACCINE <br /> REGISTRATION</strong>
                            </div>
                            <div className="mt-5">
                                <strong id={style.footerTilte}>During Registration You Need</strong>
                                <img src={nid} id={style.nid} alt="" />
                            </div>
                            <div className={style.line}>
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6" id={style.colRight}>
                        <div className="mt-5">
                           <Link className={style.suBannerCard} id={style.cardStatus} to="/">
                               <img src={checkMark}  id={style.img} alt="" />
                               <p id={style.title}> <strong>Check Status</strong> </p>
                           </Link>
                           <Link className={style.suBannerCard} id={style.cardCollect} to="/">
                               <img src={card}  id={style.imgTwo} alt="" />
                               <p id={style.title}> <strong>VACCINE CARD</strong> </p>
                           </Link>
                           <Link className={style.suBannerCard} id={style.cardFile} to="/">
                               <img src={certificate}  id={style.img} alt="" />
                               <p id={style.title}> <strong>CERTIFICATE</strong> </p>
                           </Link>
                           <Link className={style.suBannerCard} id={style.cardQuestion} to="/">
                               <img src={question}  id={style.img} alt="" />
                               <p id={style.title}> <strong>FAQ</strong> </p>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
