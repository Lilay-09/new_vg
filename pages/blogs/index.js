import Image from "next/image";
import Link from "next/link";
import React from "react";
import BannerImg from "../../components/BannerImg";
import BtnComp from "../../components/BtnComp";
import CardComp from "../../components/CardComp";
import Layout from "../../sections/Layout";
import styles from "../../styles/Blogs.module.css";
const Blogs = () => {
  return (
    <Layout noFind noSlide>
      <BannerImg title="Blogs" />
      <CardComp title="News">
        <div className={styles.new_container}>
          <div className={styles.new_container_left}>
            <Link className={styles.new_img} href="/blogs/news/condos" passHref>
              <Image
                src="/images/building3.png"
                alt="building3"
                priority
                width={300}
                height={300}
              />
              <div className={styles.new_inner_text}>
                <BtnComp isRed>Condos</BtnComp>
                <h5>Amet minim mollit non deserunt...</h5>
                <span>Peb 22, 2023</span>
              </div>
            </Link>
          </div>
          <div className={styles.new_container_right}>
            <div className={styles.new_container_top}>
              <div className={styles.new_container_top_img}>
                <Image
                  src="/images/building3.png"
                  alt="building3"
                  priority
                  width={300}
                  height={300}
                />
                <div className={styles.new_container_top_inner_text}>
                  <BtnComp isRed>Condos</BtnComp>
                  <h5>Amet minim mollit non deserunt...</h5>
                  <span>Peb 22, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.new_container_bottom}>
              <div className={styles.new_container_bottom_img}>
                <Image
                  src="/images/building3.png"
                  alt="building3"
                  priority
                  width={300}
                  height={300}
                />
                <div className={styles.new_container_bottom_inner_text}>
                  <BtnComp isRed>Agriculture Lands</BtnComp>
                  <h5>Amet minim mollit non deserunt...</h5>
                  <span>Peb 22, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardComp>
      <CardComp title="Annoucements">
        <div className={styles.annoucement_card}>
          <div className={styles.announcement_img}>
            <Image
              src="/images/announcement.png"
              alt="announcement"
              width={500}
              height={500}
            />
          </div>
          <div className={styles.announcement_text}>
            <span className="text-muted">March 24, 2023 9:37am</span>
            <h5>Announcement</h5>
            <p>
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud
              irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
              deserunt mollit dolore cillum minim tempor enim. Elit aute irure
              tempor cupidatat incididunt sint deserunt ut voluptate aute id
              deserunt nisi. Nulla Lorem mollit cupidatat irure. Laborum magna
              nulla duis ullamco cillum dolor. Voluptate exercitation incididunt
              aliquip deserunt reprehenderit elit laborum. Aliqua id fugiat
              nostrud irure ex duis ea quis id quis ad et. Sunt qui esse
              pariatur duis deserunt mollit dolore cillum minim tempor enim.
              Elit aute irure tempor cupidatat incididunt sint deserunt ut
              voluptate aute id deserunt nisi.{" "}
              <Link href="/blogs/announcements/subscribe">Read more</Link>
            </p>
          </div>
        </div>
      </CardComp>
      <CardComp title="Activities">
        <div className={styles.new_container}>
          <div className={styles.new_container_left}>
            <Link className={styles.new_img} href="/blogs/activity/trips">
              <Image
                src="/images/act1.png"
                alt="building3"
                priority
                width={300}
                height={300}
              />
              <div className={styles.new_inner_text}>
                <BtnComp isRed>Condos</BtnComp>
                <h5>Amet minim mollit non deserunt...</h5>
                <span>Peb 22, 2023</span>
              </div>
            </Link>
          </div>
          <div className={styles.new_container_right}>
            <div className={styles.new_container_top}>
              <div className={styles.new_container_top_img}>
                <Image
                  src="/images/act.png"
                  alt="building3"
                  priority
                  width={300}
                  height={300}
                />
                <div className={styles.new_container_top_inner_text}>
                  <BtnComp isRed>Condos</BtnComp>
                  <h5>Amet minim mollit non deserunt...</h5>
                  <span>Peb 22, 2023</span>
                </div>
              </div>
            </div>
            <div className={styles.new_container_bottom}>
              <div className={styles.new_container_bottom_img}>
                <Image
                  src="/images/act2.png"
                  alt="building3"
                  priority
                  width={300}
                  height={300}
                />
                <div className={styles.new_container_bottom_inner_text}>
                  <BtnComp isRed>Agriculture Lands</BtnComp>
                  <h5>Amet minim mollit non deserunt...</h5>
                  <span>Peb 22, 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardComp>
      <CardComp title="Blogs">
        <div className={styles.blogs_container}>
          <div className={styles.blogs_card}>
            <div className={styles.blog_card_img}>
              <Image
                src="/images/l2.png"
                alt="building3"
                priority
                width={300}
                height={300}
              />
            </div>
            <div className={styles.blog_card_text}>
              <span className="text-muted">March 24, 2023 9:37am</span>
              <h5>Announcement</h5>
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud
                irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                deserunt mollit dolore cillum minim tempor enim. Elit aute irure
                tempor cupidatat incididunt sint deserunt ut voluptate aute id
                deserunt nisi. Nulla Lorem mollit cupidatat irure. Laborum magna
                nulla duis ullamco cillum dolor. Voluptate exercitation
                incididunt aliquip deserunt reprehenderit elit laborum. Aliqua
                id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt
                ut voluptate aute id deserunt nisi.
              </p>
              <div className="align-self-end">
                <BtnComp href="/blogs/blog1">Read more</BtnComp>
              </div>
            </div>
          </div>
          <div className={styles.blogs_card}>
            <div className={styles.blog_card_img}>
              <Image
                src="/images/l2.png"
                alt="building3"
                priority
                width={300}
                height={300}
              />
            </div>
            <div className={styles.blog_card_text}>
              <span className="text-muted">March 24, 2023 9:37am</span>
              <h5>Announcement</h5>
              <p>
                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
                ullamco cillum dolor. Voluptate exercitation incididunt aliquip
                deserunt reprehenderit elit laborum. Aliqua id fugiat nostrud
                irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis
                deserunt mollit dolore cillum minim tempor enim. Elit aute irure
                tempor cupidatat incididunt sint deserunt ut voluptate aute id
                deserunt nisi. Nulla Lorem mollit cupidatat irure. Laborum magna
                nulla duis ullamco cillum dolor. Voluptate exercitation
                incididunt aliquip deserunt reprehenderit elit laborum. Aliqua
                id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui
                esse pariatur duis deserunt mollit dolore cillum minim tempor
                enim. Elit aute irure tempor cupidatat incididunt sint deserunt
                ut voluptate aute id deserunt nisi. Read more...
              </p>
              <div className="align-self-end">
                <BtnComp href="/blogs/blog1">Read more</BtnComp>
              </div>
            </div>
          </div>
        </div>
      </CardComp>
    </Layout>
  );
};

export default Blogs;
