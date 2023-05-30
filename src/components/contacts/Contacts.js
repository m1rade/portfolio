import sContainer from "common/styles/container.module.scss";
import sSection from "common/styles/section.module.scss";
import React from "react";
import s from "./Contacts.module.scss";
import { Title } from "common/components";

export const Contacts = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${s.contactContainer} ${sContainer.container}`}>
                <Title title="Get in" title2="Touch" />
                <div className={s.contactsGroup}>
                    <form action="#">
                        <label htmlFor="name">
                            Name
                            <input type="text" id="name" />
                        </label>
                        <label htmlFor="email">
                            Email
                            <input type="email" id="email" />
                        </label>
                        <label htmlFor="message">
                            Message<textarea id="message"></textarea>
                        </label>
                        <button className={s.formSubmitButton} type="submit">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
