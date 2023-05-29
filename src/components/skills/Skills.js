import { Subtitle, Title } from "common/components";
import sContainer from "common/styles/container.module.css";
import sSection from "common/styles/section.module.css";
import { Skill } from "components/skills/skill";
import React from "react";
import { SiCss3, SiHtml5, SiJavascript, SiMui, SiReact, SiRedux, SiTypescript } from "react-icons/si";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${s.skillsContainer} ${sContainer.container}`}>
                <Subtitle subtitle="My Skills" />
                <Title title="Tech" title2="Stack" />
                <div className={s.inner}>
                    <Skill title="JavaScript">
                        <SiJavascript />
                    </Skill>
                    <Skill title="HTML">
                        <SiHtml5 />
                    </Skill>
                    <Skill title="CSS">
                        <SiCss3 />
                    </Skill>
                    <Skill title="React">
                        <SiReact />
                    </Skill>
                    <Skill title="Redux/Toolkit">
                        <SiRedux />
                    </Skill>
                    <Skill title="Typescript">
                        <SiTypescript />
                    </Skill>
                    <Skill title="Material UI">
                        <SiMui />
                    </Skill>
                </div>
            </div>
        </section>
    );
};
