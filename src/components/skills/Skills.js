import React from "react";
import s from "./Skills.module.css";
import sWrapper from "../../common/styles/WrapperForCards.module.css";
import sContainer from "../../common/styles/Container.module.css";
import Skill from "./skill/Skill";

const Skills = () => {
    return (
        <section className={s.block}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <h2 className={sWrapper.title}>Skills</h2>
                <div className={sWrapper.wrapper}>
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
                    <Skill
                        title={"React/Redux"}
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
                    <Skill
                        title={"React/Redux"}
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
        </section>
    );
};
export default Skills;
