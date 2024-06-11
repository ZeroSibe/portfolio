import React from "react";
import classNames from "classnames";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className="container mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <div className={styles.text}>
            <h2>Get in touch</h2>
            <p>
              I am currently seeking opportunities for a junior software
              development role. If there are any opportunities, please don't
              hesitate to contact me!
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h2 className="mt-5 text-center">Send me a message</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message:
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className={classNames(
                  "btn",
                  "btn-primary",
                  styles.submitButton
                )}
                style={{ backgroundColor: "#4e6961" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
