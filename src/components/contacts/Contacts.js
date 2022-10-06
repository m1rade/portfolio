import React from "react";
import s from "./Contacts.module.css";
import sContainer from "../../common/styles/Container.module.css";

const Contacts = () => {
    return (
        <section className={s.block}>
            <div className={`${s.container} ${sContainer.container}`}>
                <h2 className={s.title}>Contact me</h2>
                <div className={s.contacts}>
                    <form action="#">
                        <div className={s.formInputName}>
                            <input id="name" placeholder="Name" />
                        </div>
                        <div className={s.formInputEmail}>
                            <input id="email" placeholder="Email" />
                        </div>
                        <div className={s.formInputMessage}>
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div className={s.formSubmitButton}>
                            <button type="submit">Sent</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contacts;
