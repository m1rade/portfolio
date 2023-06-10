import { Subtitle, Title } from "common/components";
import { navigation } from "common/routes";
import { Skill } from "components/skills/skill";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import {
    SiAxios,
    SiCss3,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiJest,
    SiMui,
    SiPostman,
    SiReact,
    SiReactrouter,
    SiRedux,
    SiSass,
    SiStorybook,
    SiTypescript,
} from "react-icons/si";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={s.sectionBlock} id={navigation.skills}>
            <div className={s.container}>
                <Subtitle subtitle="My Skills" icon={<FaGraduationCap />} />
                <Title title="Tech" title2="Stack" />
                <div className={s.innerContent}>
                    <Skill title="JavaScript" x="-180px" y="0px">
                        <SiJavascript />
                    </Skill>
                    <Skill title="HTML" x="0px" y="180px">
                        <SiHtml5 />
                    </Skill>
                    <Skill title="CSS" x="180px" y="0px">
                        <SiCss3 />
                    </Skill>
                    <Skill title="React" x="-180px" y="0px">
                        <SiReact />
                    </Skill>
                    <Skill title="React-router-dom" x="0px" y="180px">
                        <SiReactrouter />
                    </Skill>
                    <Skill title="Redux/Toolkit" x="0px" y="-180px">
                        <SiRedux />
                    </Skill>
                    <Skill title="Typescript" x="180px" y="0px">
                        <SiTypescript />
                    </Skill>
                    <Skill title="Material UI" x="0px" y="180px">
                        <SiMui />
                    </Skill>
                    <Skill title="Jest" x="-180px" y="0px">
                        <SiJest />
                    </Skill>
                    <Skill title="Git" x="0px" y="180px">
                        <SiGit />
                    </Skill>
                    <Skill title="Storybook" x="-180px" y="0px">
                        <SiStorybook />
                    </Skill>
                    <Skill title="Postman" x="180px" y="0px">
                        <SiPostman />
                    </Skill>
                    <Skill title="Axios" x="0px" y="-180px">
                        <SiAxios />
                    </Skill>
                    <Skill title="Sass" x="0px" y="180px">
                        <SiSass />
                    </Skill>
                </div>
            </div>
        </section>
    );
};
