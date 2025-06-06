import "./search-bar.sass";
import SearchIcon from "./assets/icons/search.svg?raw";

export default function SearchBar({onSubmit = null}) {

    const BASE_CLASS = "search-bar";

    const handleSubmit = event => {
        event.preventDefault();
        if (onSubmit) {
            const form = event.target;
            const formData = new FormData(form);
            const searchQuery = formData.get("query");

            form.reset();

            onSubmit(searchQuery);
        }
    }

    return (
        <form className={BASE_CLASS} onSubmit={handleSubmit}>
            <input className={`${BASE_CLASS}__input`} name="query" type="search" placeholder="Søg efter en by..." />
            <button className={`${BASE_CLASS}__button`} type="submit" dangerouslySetInnerHTML={{__html:SearchIcon}} />
        </form>
    );
}