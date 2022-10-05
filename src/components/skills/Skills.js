import React from "react";
import s from "./Skills.module.css";
import sContainer from "../../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <div className={s.block}>
            <div className={`${s.container} ${sContainer.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.wrapper}>
                    <Skill
                        title={"JavaScript"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."
                        }
                    />
                    <Skill
                        title={"HTML/CSS"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."
                        }
                    />
                    <Skill
                        title={"React/Redux"}
                        description={
                            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."
                        }
                    />
                </div>
            </div>
        </div>
    );
};
export default Skills;
