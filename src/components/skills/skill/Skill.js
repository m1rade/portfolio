import React from 'react';
import s from "./Skill.module.css";
import sCard from "../../../common/styles/Card.module.css";

const Skill = (props) => {
  return (
      <div className={sCard.container}>
          <div className={s.icon}>icon</div>
          <h3>{props.title}</h3>
          <span className={s.description}>{props.description}</span>
      </div>
  );
}

export default Skill;