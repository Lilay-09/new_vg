import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ImageComp from "../ImageComp";

const PopularLocation = ({ data }) => {
  const router = useRouter();

  return (
    <div className={styles.interior_design_sample_container}>
      {data.map((item, i) => {
        return (
          <div
            key={item.id}
            className={`${styles.interior__design_card}`}
            onClick={() => {
              router.push(`categories/buy/`);
            }}
          >
            <ImageComp imageUrl={item.image_url} />
            <p className={styles.popular_place}>
              <FontAwesomeIcon icon={faLocationDot} width={20} />
              Phnom Penh
            </p>
          </div>
        );
      })}
    </div>
  );
};
export default PopularLocation;
