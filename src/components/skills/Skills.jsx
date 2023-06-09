import { Subtitle, Title } from "common/components";
import { navigation } from "common/routes";
import { Skill } from "components/skills/skill";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiMui, SiReact, SiRedux, SiTypescript } from "react-icons/si";
import s from "./Skills.module.scss";

export const Skills = () => {
    return (
        <section className={s.sectionBlock} id={navigation.skills}>
            <div className={s.container}>
                <Subtitle subtitle="My Skills" icon={<FaGraduationCap />} />
                <Title title="Tech" title2="Stack" />
                <div className={s.innerContent}>
                    <Skill title="JavaScript" x={"-180px"} y={"0px"}>
                        <SiJavascript />
                    </Skill>
                    <Skill title="HTML" x={"0px"} y={"180px"}>
                        <SiHtml5 />
                    </Skill>
                    <Skill title="CSS" x={"180px"} y={"0px"}>
                        <SiCss3 />
                    </Skill>
                    <Skill title="React" x={"-180px"} y={"0px"}>
                        <SiReact />
                    </Skill>
                    <Skill title="Redux/Toolkit" x={"0px"} y={"-180px"}>
                        <SiRedux />
                    </Skill>
                    <Skill title="Typescript" x={"180px"} y={"0px"}>
                        <SiTypescript />
                    </Skill>
                    <Skill title="Material UI" x={"0px"} y={"180px"}>
                        <SiMui />
                    </Skill>
                </div>
            </div>
        </section>
    );
};
