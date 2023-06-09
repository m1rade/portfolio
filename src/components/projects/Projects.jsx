import socialImage from "assets/image/social-network.jpg";
import todoImage from "assets/image/todolist.jpg";
import { Subtitle, Title } from "common/components";
import { navigation } from "common/routes";
import { Project } from "components/projects/project";
import React from "react";
import { FaGripVertical } from "react-icons/fa";
import s from "./Projects.module.scss";

export const Projects = () => {
    const styleTodo = {
        backgroundImage: `url(${todoImage})`,
    };

    const styleSocial = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <section className={s.sectionBlock} id={navigation.projects}>
            <div className={s.container}>
                <Subtitle subtitle="portfolio" icon={<FaGripVertical />} />
                <Title title="My" title2="Projects" />
                <div className={s.innerContent}>
                    <Project
                        title={"To-do List"}
                        style={styleTodo}
                        link="https://it-incubator-to-do-list.vercel.app"
                        tech={["ReduxToolkit", "React Functional component"]}
                        x={"-180px"}
                        y={"0px"}
                    />
                    <Project
                        title={"Social Network"}
                        style={styleSocial}
                        link="https://github.com/m1rade/social-network"
                        tech={["React Class component", "Redux"]}
                        x={"180px"}
                        y={"0px"}
                    />
                </div>
            </div>
        </section>
    );
};
