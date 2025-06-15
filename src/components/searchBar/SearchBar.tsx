import React from "react"
import { Input } from 'antd';
import { useStyles } from "./styles";

const SearchBar: React.FC = () => {
    const {styles} = useStyles();
    const { Search } = Input;

    return (
        <div className={styles.SearchContainer}>
            <Search className={styles.Input} placeholder="Search..." enterButton />
        </div>
        
    )
}
export default SearchBar