import React from "react";
import s from "./Projects.module.css";
import sContainer from "../../common/styles/Container.module.css";
import sWrapper from "../../common/styles/WrapperForCards.module.css";
import Project from "./Project/Project";

const Projects = () => {
    return (
        <section className={s.block}>
            <div className={`${sWrapper.container} ${sContainer.container}`}>
                <h2 className={sWrapper.title}>My projects</h2>
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

export default Projects;
