import React, { useState } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import {
  i18nTextContactDropMessage,
  i18nTextContactEmail,
  i18nTextContactError,
  i18nTextContactMessage,
  i18nTextContactSubmit,
  i18nTextContactSuccess,
} from "../messages/i18nMessages";

const Contact = () => {
  const [formResult, setFormResult] = useState("");
  const { t } = useTranslation("contact");

  const submitForm = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setFormResult("ok");
      } else {
        setFormResult("error");
      }
    };
    xhr.send(data);
  };

  return (
    <section id="contact" className="bg-customlight dark:bg-darkgray text-text">
      <div className="container grid content-center mx-auto 3xl:max-w-none lg:grid-cols-2 min-h-screen-incl-footer">
        <div data-aos="flip-right" className="hidden p-6 lg:block">
          <Image
            alt="Illustration of man sitting on a block"
            src="/connect.svg"
            width={129}
            height={150}
            layout="responsive"
          />
        </div>
        <div
          data-aos="flip-left"
          data-aos-delay="200"
          className="flex flex-col justify-center p-6"
        >
          <h2 className="mb-6 text-2xl font-bold text-primary">
            {t(i18nTextContactDropMessage)}
          </h2>
          <form
            onSubmit={(e) => submitForm(e)}
            action="https://formspree.io/f/xpzkowbg"
            method="POST"
          >
            <div className="flex flex-col mb-4">
              <label className="mb-3" htmlFor="email">
                {t(i18nTextContactEmail)}
              </label>
              <input
                className="px-4 py-2 bg-white border-2 rounded-md outline-none border-primary text-primary focus:border-4 focus:border-double"
                id="email"
                type="email"
                name="email"
                placeholder="info@example.com"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="my-2" htmlFor="message">
                {t(i18nTextContactMessage)}
              </label>
              <textarea
                className="px-4 py-2 bg-white border-2 rounded-md outline-none border-primary text-primary focus:border-4 focus:border-double"
                rows={3}
                id="message"
                name="message"
                placeholder="Hey, I would like to get in touch with you"
                required
              />
            </div>

            <button
              className="px-8 py-4 mt-4 text-white rounded-md bg-primary hover:bg-hv"
              type="submit"
            >
              {t(i18nTextContactSubmit)}
            </button>
            {formResult === "error" && (
              <p className="error">{t(i18nTextContactError)}</p>
            )}
            {formResult === "ok" && (
              <p className="success">{t(i18nTextContactSuccess)}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
