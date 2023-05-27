import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { useRouter } from "next/router";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import ImageComp from "../ImageComp";
import { useContext, useState } from "react";
import { DataContext } from "../../store/GlobalState";
import SelectOption from "../SelectOption";

const PopularLocation = ({ data, translations, categories }) => {
  const router = useRouter();
  const [categ, setCateg] = useState(categories[0].cate);
  const { state, dispatch } = useContext(DataContext);
  let lang = state.lang.d_lang;
  return (
    <div className={styles.interior_section}>
      <div className="reveal fade-bottom">
        <div className={styles.interior_title}>
          <div className={styles.interior_title_content1}>
            <h2>{translations.popular_location}</h2>
            <select
              value={categ}
              onChange={(e) => {
                setCateg(e.target.value);
              }}
            >
              {categories.map((item, i) => {
                return (
                  <option value={item.cate} key={i}>
                    {item.cate}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div>
          <div className={styles.interior_design_sample_container}>
            {data.map((item, i) => {
              return (
                <div
                  key={item.id}
                  className={`${styles.interior__design_card}`}
                  onClick={() => {
                    router.push(`${lang}/category/${categ}/${item.location}`);
                  }}
                >
                  <ImageComp imageUrl={item.image_url} />
                  <p className={styles.popular_place}>
                    <FontAwesomeIcon icon={faLocationDot} width={20} />
                    {item.location}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PopularLocation;
