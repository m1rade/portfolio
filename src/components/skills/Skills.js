import { Subtitle, Title } from "common/components";
import sContainer from "common/styles/container.module.css";
import sSection from "common/styles/section.module.css";
import sWrapper from "common/styles/wrapperForCards.module.css";
import { Skill } from "components/skills/skill";
import React from "react";
import { SiJavascript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <Subtitle subtitle="My Skills" />
                <Title title="Tech" title2="Stack" />
                <div className={sWrapper.inner}>
                    <Skill title={"JavaScript"}>
                        <SiJavascript />
                    </Skill>
                    <Skill title={"HTML"}>
                        <SiHtml5 />
                    </Skill>
                    <Skill title="CSS">
                        <SiCss3 />
                    </Skill>
                    <Skill title={"React"}>
                        <SiReact />
                    </Skill>
                    <Skill title={"Redux"}>
                        <SiRedux />
                    </Skill>
                    <Skill title={"Typescript"}>
                        <SiTypescript />
                    </Skill>
                </div>
            </div>
        </section>
    );
};
