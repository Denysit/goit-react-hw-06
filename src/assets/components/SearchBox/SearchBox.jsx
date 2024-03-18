import css from "./SearchBox.module.css";

export default function SearchBox({ inputValue, handleChange }) {
    return (
        <div className={css.searchBox}>
            <label htmlFor="name" className={css.label}>Search contact by name</label>
            <input
                id="name"
                type="text"
                value={inputValue}
                onChange={handleChange}
                className={css.input}
            />
        </div>
    );
}
