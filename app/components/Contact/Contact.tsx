"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

const FORMSPREE_ID = "mdkwypzk";

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");
    setMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // tiny bot trap
    if ((data.get("website") as string)?.length) {
      setState("success");
      setMessage("Thanks. If you are a real person you beat the bots.");
      form.reset();
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        setMessage("Message sent. I will hit you back soon.");
        form.reset();
      } else {
        const json = await res.json().catch(() => null);
        const err =
          json?.errors?.[0]?.message ||
          "Something went wrong. Try again or email me directly.";
        setState("error");
        setMessage(err);
      }
    } catch {
      setState("error");
      setMessage("Network had a moment. Please try again.");
    }
  }

  return (
    <section className={styles.wrap}>
      <div className={`${styles.card}`}>
        <header className={styles.header}>
          <h1 className={styles.title}>Let’s build something</h1>
          <p className={styles.subtitle}>
            Slide a message into my inbox. I read everything.
          </p>
        </header>

        <form className={styles.form} onSubmit={onSubmit} noValidate>
          {/* accessibility helpers */}
          <p className="visuallyHidden" id="contact-desc">
            Contact form with fields for name, email, subject, and message.
          </p>

          {/* spam honeypot */}
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            className={styles.honey}
            aria-hidden="true"
          />

          <div className={styles.grid}>
            <label className={styles.field}>
              <span className={styles.label}>Name</span>
              <input
                className={styles.input}
                type="text"
                name="name"
                placeholder="Jane Doe"
                required
                autoComplete="name"
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                name="email"
                placeholder="jane@email.com"
                required
                autoComplete="email"
                inputMode="email"
              />
            </label>
          </div>

          <label className={styles.field}>
            <span className={styles.label}>Subject</span>
            <input
              className={styles.input}
              type="text"
              name="subject"
              placeholder="Let’s talk collab"
              maxLength={120}
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              name="message"
              placeholder="Hit me with the details"
              required
              rows={6}
              maxLength={2000}
            />
          </label>

          <div className={styles.actions}>
            <button
              className={styles.button}
              type="submit"
              disabled={state === "submitting"}
              aria-live="polite"
            >
              {state === "submitting" ? "Sending..." : "Send message"}
            </button>

            {state !== "idle" && message ? (
              <span
                className={
                  state === "success" ? styles.success : styles.error
                }
                role={state === "error" ? "alert" : "status"}
              >
                {message}
              </span>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
