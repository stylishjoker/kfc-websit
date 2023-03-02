import NewButton from "../newButton"
import classes from "./banner.module.css"

const Banner =()=>{
    return(
        <div className={classes.wrapper}>
            <span>Đặt Ngay</span>
            <div className={`${classes.icon}` + ` ${classes.delivery}`}></div>
            <span>Giao Hàng</span>
            <div className={`${classes.icon}` + ` ${classes.bakery}`}></div>
            <span>hoặc Mang Đi</span>
            <NewButton name="Bắt đầu đặt hàng" color="red"/>
        </div>
    )
}
export default Banner