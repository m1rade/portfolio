import { Button, Subtitle, Title } from "common/components";
import sContainer from "common/styles/container.module.scss";
import sSection from "common/styles/section.module.scss";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import s from "./Contacts.module.scss";

export const Contacts = () => {
    return (
        <section className={sSection.sectionBlock}>
            <div className={`${s.contactsContainer} ${sContainer.container}`}>
                <Subtitle subtitle="Contact" icon={<FaAddressCard />} />
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
                        <Button type="submit">
                            Send message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};
