import React from "react";
import { Input } from 'antd';
import { useStyles } from "./style";

type SearchBarProps = {
    onSearch: (value: string) => void;
    onChange: (value: string) => void
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onChange }) => {
    const { styles } = useStyles();

    const { Search } = Input;

    return (
        <div className={styles.SearchContainer}>
            <Search
                className={styles.Input}
                placeholder="Search"
                enterButton
                onSearch={onSearch}
                allowClear
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
