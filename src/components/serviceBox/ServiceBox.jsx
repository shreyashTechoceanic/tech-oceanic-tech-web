/* eslint-disable react/prop-types */
import styles from "./serviceBox.module.css";

export const ServiceBox = ({ imgsrc, titletext, boxtext }) => {
  return (
    <div>
      <div className={`${styles.box}`}>
        <div className={`${styles.logobox}`}>
          <img
            src={imgsrc}
            alt="service-logo"
            width={"23.802px"}
            height={"23.802px"}
            className="flex-shrink-0"
          />
        </div>
        <h4 className={styles.titletext}>{titletext}</h4>
        <p className={styles.boxtext}>{boxtext}</p>
      </div>
    </div>
  );
};
