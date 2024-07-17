import Image from "next/image";
import logo from "../../public/VectorLogo.png";
import styles from "../../styles/Header.module.css";
import HeaderUser from "./HeaderUser";

const Header = () => {

    return (
        <header className="w-screen red-light-bg text-white p-5">
            <div className={styles.headerWrper}>
                <div className={styles.left}>
                    <div className="w-[6.56rem] h-[2.40rem]">
                        <Image src={logo} alt="Logo" />
                    </div>
                </div>
                <div className={styles.middle}>
                    <h3 className="pl-[1px] font-medium">
                        <span className="text-[#9C9C9C] pr-2">Let&#39;s</span>
                        <span className="text-[#0D0500]">Create Your Campaign</span>
                    </h3>
                </div>
                <div className={styles.right}>
                    <HeaderUser />
                </div>
            </div>
        </header>
    )
}


export default Header;