import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const PopularLocation = () => {
  const router = useRouter();
  return (
    <div className={styles.interior_design_sample_container}>
      <div
        className={`${styles.interior__design_card}`}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/b2.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Phnom Penh
        </p>
      </div>
      <div
        className={`${styles.interior__design_card} `}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/b4.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Siem Reap
        </p>
      </div>
      <div
        className={`${styles.interior__design_card} `}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/tp2.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Koh Kong
        </p>
      </div>
      <div
        className={`${styles.interior__design_card} `}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/bed.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          {" "}
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Battambang
        </p>
      </div>
      <div
        className={`${styles.interior__design_card} `}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/b5.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Kandal
        </p>
      </div>
      <div
        className={`${styles.interior__design_card} `}
        onClick={() => {
          router.push(`/search?=/${"buy"}&${`rent`}&${"phnom-penh"}`);
        }}
      >
        <Image
          src={`/images/pool.jpg`}
          width={1000}
          height={1000}
          alt=""
          priority
        />
        <p className={styles.popular_place}>
          <FontAwesomeIcon icon={faLocationDot} width={20} />
          Takeo
        </p>
      </div>
    </div>
  );
};
export default PopularLocation;
