import { Title } from "common/components";
import sContainer from "common/styles/container.module.css";
import sSection from "common/styles/section.module.css";
import sWrapper from "common/styles/wrapperForCards.module.css";
import { Project } from "components/projects/Project";
import React from "react";

export const Projects = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <Title title="My" title2="Projects" />
                <div className={sWrapper.wrapper}>
                    <Project
                        title={"Todo List"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                    <Project
                        title={"Social Network"}
                        description={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, natus."}
                    />
                </div>
            </div>
        </section>
    );
};
