import Image from "next/image";
import React from "react";
import GoogleMapComp from "../../components/GoogleMapComp";
import ProductPagination from "../../components/ProductPagination";
import Layout from "../../sections/Layout";
import styles from "../../styles/ProduceDetail/ProductDetail.module.css";
import { data } from "../../utils/data";

const ProductDetails = () => {
  return (
    <Layout noFind noSlide>
      <div className={styles.product_details_container}>
        <ProductPagination />
        <div className={styles.mid_container}>
          <div>
            <h4>Your Project Name</h4>
            <div>
              <span>Type: </span>
              <span className="text-muted">Condo</span>
            </div>
            <div>
              <span>Address: </span>
              <span className="text-muted">
                2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
              </span>
            </div>
            <div>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet. Amet minim
                mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet. Amet minim mollit non
                deserunt ullamco est sit aliqua dolor do amet sint. Velit
                officia consequat duis enim velit mollit. Exercitation veniam
                consequat sunt nostrud amet. Amet minim mollit non deserunt
                ullamco est sit aliqua dolor do amet sint. Velit officia
                consequat duis enim velit mollit. Exercitation veniam consequat
                sunt nostrud amet.
              </p>
            </div>
          </div>
          <div>
            {data.slice(0, 4).map((item, index) => {
              return (
                <div className={styles.project_container} key={index}>
                  {index % 2 == 0 ? (
                    <>
                      <div className={styles.project_container_text}>
                        <h4>Your Project Name</h4>
                        <div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                          </p>
                        </div>
                      </div>
                      <div className={styles.project_container_img}>
                        <Image
                          src={`/${item.url}`}
                          width={4000}
                          height={4000}
                          priority
                          alt={"p1"}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.project_container_img}>
                        <Image
                          src={`/${item.url}`}
                          width={4000}
                          height={4000}
                          priority
                          alt={"p1"}
                        />
                      </div>
                      <div className={styles.project_container_text}>
                        <h4>Your Project Name</h4>
                        <div>
                          <p>
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis enim velit mollit. Exercitation veniam
                            consequat sunt nostrud amet. Amet minim mollit non
                            deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                            Exercitation veniam consequat sunt nostrud amet.
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>

          {/*  */}
        </div>
        <GoogleMapComp width="100%" />
      </div>
    </Layout>
  );
};

export default ProductDetails;
{
  /* <div className={styles.project_container} key={index}>
        <div className={styles.project_container_text}>
          <h4>Your Project Name</h4>
          <div>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint. Velit officia consequat duis enim
              velit mollit. Exercitation veniam consequat sunt nostrud
              amet. Amet minim mollit non deserunt ullamco est sit
              aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt
              nostrud amet. Amet minim mollit non deserunt ullamco est
              sit aliqua dolor do amet sint. Velit officia consequat
              duis enim velit mollit. Exercitation veniam consequat
              sunt nostrud amet. Amet minim mollit non deserunt
              ullamco est sit aliqua dolor do amet sint. Velit officia
              consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet. Amet minim mollit non
              deserunt ullamco est sit aliqua dolor do amet sint.
              Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet
              minim mollit non deserunt ullamco est sit aliqua dolor
              do amet sint. Velit officia consequat duis enim velit
              mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
        </div>
        <div className={styles.project_container_img}>
          <Image
            src={`/images/p1.png`}
            width={400}
            height={400}
            priority
            alt={"p1"}
          />
        </div>
      </div> */
}
