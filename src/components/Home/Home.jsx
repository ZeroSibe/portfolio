import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { AiFillGithub } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import skills from "../../data/skills.json";
import SkillCard from "./SkillCard";
const Home = () => {
  const [text, setText] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const animatedText =
    "Hi. I'm Tami Kazehare. A passionate Software Developer based in London";
  const delay = 50;

  return (
    <section className={styles.body}>
      <div className={`hero-section container ${styles.container}`}>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-8">
            <div>
              <h1 className={`display-2 ${styles.title}`}>
                <span
                  className={`${styles.titleName} ${
                    isHovered ? styles.bounce : ""
                  }`}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  Junior Software Developer 👋
                </span>
              </h1>
              <h2>
                Hi, I'm Tami Kazehare. A passionate Software Developer based in
                London
              </h2>

              <p className={`lead ${styles.description}`}>{text.join("")}</p>
              <Row>
                <Col md={12}>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        window.open("https://github.com/ZeroSibe");
                      }}
                      className={`socialMediaBtn ${styles.socialMediaBtn}`}
                      style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "10px",
                        marginRight: "10px",
                      }}
                    >
                      <AiFillGithub
                        className="icon"
                        style={{ marginRight: "8px" }}
                      />{" "}
                      GitHub
                    </button>

                    <button
                      onClick={() => {
                        window.open("mailto:kazehare.t@gmail.com");
                      }}
                      className={`socialMediaBtn ${styles.socialMediaBtn}`}
                      style={{
                        fontSize: "18px",
                        padding: "12px 24px",
                        borderRadius: "10px",
                      }}
                    >
                      <HiOutlineMail
                        className="icon"
                        style={{ marginRight: "8px" }}
                      />{" "}
                      Email
                    </button>
                  </div>
                </Col>
              </Row>
              <section>
                <div className={styles.skillContainer}>
                  <h3>Tech Stack | </h3>
                  {skills.map((skill, id) => (
                    <SkillCard key={id} skill={skill} />
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
