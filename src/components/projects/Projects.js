import socialImage from "assets/image/social-network.jpg";
import todoImage from "assets/image/todolist.jpg";
import { Title } from "common/components";
import sContainer from "common/styles/container.module.css";
import sSection from "common/styles/section.module.css";
import sWrapper from "common/styles/wrapperForCards.module.css";
import { Project } from "components/projects/Project";
import React from "react";

export const Projects = () => {
    const styleTodo = {
        backgroundImage: `url(${todoImage})`,
    };

    const styleSocial = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <Title title="My" title2="Projects" />
                <div className={sWrapper.wrapper}>
                    <Project 
                        title={"To-do List"} 
                        style={styleTodo} link="https://it-incubator-to-do-list.vercel.app" 
                    />
                    <Project
                        title={"Social Network"}
                        style={styleSocial}
                        link="https://github.com/m1rade/social-network"
                    />
                </div>
            </div>
        </section>
    );
};