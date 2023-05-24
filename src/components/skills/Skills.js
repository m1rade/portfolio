import React from "react";
import sContainer from "common/styles/Container.module.css";
import sWrapper from "common/styles/WrapperForCards.module.css";
import s from "./Skills.module.css";
import { Skill } from "components/skills/skill";

export const Skills = () => {
    return (
        <section className={s.block}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <h2 className={sWrapper.title}>Skills</h2>
                <div className={sWrapper.wrapper}>
                    <Skill
                        title={"JavaScript"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Skill
                        title={"HTML/CSS"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Skill
                        title={"React"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Skill
                        title={"Redux"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Skill
                        title={"React Native"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Skill
                        title={"Angular"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                </div>
            </div>
        </section>
    );
};
