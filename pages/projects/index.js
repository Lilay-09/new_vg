import Image from "next/image";
import React from "react";
import Layout from "../../sections/Layout";
import styles from "../../styles/Project.module.css";
import { data } from "../../utils/data";
const Projects = () => {
  return (
    <Layout map>
      {data.slice(0, 6).map((item, i) => {
        return (
          <div className={styles.container} key={i}>
            <div className={styles.innerContainer_img}>
              <Image src="/images/l1.png" width={400} height={400} alt="land" />
            </div>
            <div className={styles.innerContainer_text}>
              <h4>Your Project Name</h4>
              <div>
                <span>Type :</span>
                <span className="text-muted">Condo</span>
              </div>
              <div>
                <span>Address :</span>
                <span className="text-muted">Condo</span>
              </div>
              <div>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </Layout>
  );
};

export default Projects;
