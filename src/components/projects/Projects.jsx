import socialImage from "assets/image/social-network.jpg";
import todoImage from "assets/image/todolist.jpg";
import { Subtitle, Title } from "common/components";
import sContainer from "common/styles/container.module.scss";
import sSection from "common/styles/section.module.scss";
import { Project } from "components/projects/Project";
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
        <section className={sSection.block}>
            <div className={`${s.container} ${sContainer.custom}`}>
                <Subtitle subtitle="portfolio" icon={<FaGripVertical />} />
                <Title title="My" title2="Projects" />
                <div className={s.innerContent}>
                    <Project
                        title={"To-do List"}
                        style={styleTodo}
                        link="https://it-incubator-to-do-list.vercel.app"
                        tech={["ReduxToolkit", "React Functional component"]}
                    />
                    <Project
                        title={"Social Network"}
                        style={styleSocial}
                        link="https://github.com/m1rade/social-network"
                        tech={["React Class component", "Redux"]}
                    />
                </div>
            </div>
        </section>
    );
};
