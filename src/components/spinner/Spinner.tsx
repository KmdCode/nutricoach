"use client";
import { Spin } from "antd";
import { useStyles } from "./style";

const Spinner = () => {

    const {styles} = useStyles();

    return (
        <div className={styles.Spin}>
            <Spin size="large" />
        </div>
    )
}
export default Spinner;