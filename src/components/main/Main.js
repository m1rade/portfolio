import React from "react";
import s from "./Main.module.css";

const Main = () => {
    return (
        <main className={s.mainBlock}>
            <div className={s.mainWrapper}>
                <div className={s.mainText}>
                    <span>Hi There!</span>
                    <h1>I'm Golysheva Laura</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.mainPhoto}></div>
            </div>
        </main>
    );
};

export default Main;
