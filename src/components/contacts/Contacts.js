import React from "react";
import sContainer from "common/styles/Container.module.css";
import s from "./Contacts.module.css";

export const Contacts = () => {
    return (
        <section className={s.block}>
            <div className={`${s.container} ${sContainer.container}`}>
                <h2 className={s.title}>Contact me</h2>
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
