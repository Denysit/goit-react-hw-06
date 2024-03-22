import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, selectNameFilter } from "../../redux/filtersSlice";


export default function SearchBox() {
    
    const dispatch = useDispatch();
    const filterValue = useSelector(selectNameFilter);

    const handleChange = (event) => {
        const inputValue = event.target.value;
        dispatch(changeFilter(inputValue))

    }

    return (
        <div className={css.searchBox}>
            <label htmlFor="name" className={css.label}>Search contact by name</label>
            <input
                id="name"
                type="text"
                onChange={handleChange}
                className={css.input}
                value={filterValue}
            />
        </div>
    );
}
