import phone from "../../assets/phone.svg";
import styles from "./navContactLink.module.css";

export const NavContactLinks = () => {

  
  return (
    <div className="flex gap-[39px] items-center justify-center">
      <div className="border-[1px] border-[#0D6EFD] flex items-center justify-center rounded-full p-1">
        <a href="tel://+919717327212" className="">
          <img src={phone} alt="phone" width="22px" height="22px" />
        </a>
      </div>
      <div>
        <button className={styles.btn}>
          Contact
        </button>
      </div>
    </div>
  );
}
