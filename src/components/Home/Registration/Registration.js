import React from 'react';
import style from "./Registration.module.css";

export default function Registration() {
    return (
        <section className={style.pageInnerTitle}>
            <div className="container">
                <div className="row" id={style.textLeft}>
                    <div className="col-12">
                        <h3>Vaccine Registration</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
