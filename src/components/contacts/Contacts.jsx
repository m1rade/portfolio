import { Button, FadeIn, Subtitle, Title } from "common/components";
import React from "react";
import { FaAddressCard } from "react-icons/fa";
import s from "./Contacts.module.scss";
import { navigation } from "common/routes";

export const Contacts = () => {
    return (
        <section className={s.sectionBlock} id={navigation.contacts}>
            <FadeIn x={"0px"} y={"180px"} className={s.container}>
                <Subtitle subtitle="Contact" icon={<FaAddressCard />} />
                <Title title="Get in" title2="Touch" />
                <h3>Send me a note</h3>
                <form action="#" className={s.group}>
                    <div className={s.field}>
                        <label htmlFor="full-name">
                            Full name <sup>*</sup>
                        </label>
                        <input className={s.inputField} type="text" id="full-name" placeholder="Your full name" />
                    </div>
                    <div className={s.field}>
                        <label htmlFor="email">
                            Email <sup>*</sup>
                        </label>
                        <input className={s.inputField} type="email" id="email" placeholder="Your email address" />
                    </div>
                    <div className={s.field}>
                        <label htmlFor="message">
                            Message <sup>*</sup>
                        </label>
                        <textarea className={s.messageField} id="message" placeholder="Write your message here ..."></textarea>
                    </div>
                    <div className={s.buttonWrapper}>
                        <Button type="submit">Send message</Button>
                    </div>
                </form>
            </FadeIn>
        </section>
    );
};
