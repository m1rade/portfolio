import React from "react";
import s from "./MovingBg.module.scss";
import wave from "../../assets/video/waves.mp4";

export const MovingBg = () => {
    return (
        <div className={s.container}>
            <video src={wave} autoPlay muted loop />
        </div>
    );
};
