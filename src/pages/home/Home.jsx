import styles from "./home.module.css";

import SVG1 from "../../assets/SVG1.svg";

import { ServiceBox } from "../../components/serviceBox/ServiceBox";

const Home = () => {
  return (
    <>
      <div className="mt-10 flex flex-col items-center ">
        {/* SECTION-1 */}
        <div className="text-xs section-1 h-full w-full flex flex-col items-center justify-center gap-[59px] ">
          <div className="text-[2.3rem] md:text-[52px] flex flex-col items-center justify-center  font-[600] ">
            <h1 className={`${styles.titlemainwhite}`}>Best Website</h1>
            <h1 className={styles.titlemainblue}>Development Company</h1>
          </div>
          <div>
            <p className={styles.boxpara}>
              Trusted IT consulting and Software Development Company.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="mx-2 flex flex-col items-center justify-center gap-[7px]">
              <h1
                className={`${styles.secondtitle} text-[1.5rem] md:text-[2rem]`}
              >
                Tech Oceanic Technologies
              </h1>
              <p className={`${styles.secondpara} text-[10px] md:text-[15px] `}>
                Build B2B, B2C, D2C online marketplace stores, Software, CRM,
                ERP, AI, Digital
              </p>
              <p className={`${styles.secondpara} text-[10px] md:text-[15px]`}>
                Transformation, Cloud Operation & mobile apps
              </p>
            </div>
            <div className="mt-10 flex items-center gap-5">
              <button className={styles.whatsappbtn}>WhatsApp Now</button>
              <button className="text-[#0277B8]"> I Request Callback</button>
            </div>
          </div>
        </div>

        {/* SECTION-2 */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 items-center justify-center mt-14">
          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />

          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />

          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />

          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />

          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />

          <ServiceBox
            imgsrc={SVG1}
            titletext="Web Design"
            boxtext="Crafting visually appealing and user-friendly website layouts to make a strong online impression."
          />
        </div>
      </div>
    </>
  );
};

export default Home;
