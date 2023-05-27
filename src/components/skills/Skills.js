import sContainer from "common/styles/container.module.css";
import sWrapper from "common/styles/wrapperForCards.module.css";
import { Skill } from "components/skills/skill";
import React from "react";
import sSection from "common/styles/section.module.css";
import { Title } from "common/components";

export const Skills = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <Title title="My" title2="Skills" />
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
