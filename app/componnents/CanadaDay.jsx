import styles from "../../styles/CanadaDay.module.css";

function CanadaDay() {
    return (
        <div className={`w-full rounded-[0.31rem] mt-2 ${styles.canadianBg}`}>
            <h3 className="text-[#FFFFFF] text-center text-[1.50rem] font-medium py-2">Canada Day 2024</h3>
        </div>
    )
}

export default CanadaDay;