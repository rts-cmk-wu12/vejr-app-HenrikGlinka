import "./search-bar.sass";
import SearchIcon from "./assets/icons/search.svg?raw";

export default function SearchBar({onSubmit = null}) {

    const BASE_CLASS = "search-bar";

    const handleSubmit = event => {
        event.preventDefault();
        if (onSubmit) {
            const formData = new FormData(event.target);
            const searchQuery = formData.get("query");
            onSubmit(searchQuery);
        }
    }

    return (
        <form className={BASE_CLASS} onSubmit={handleSubmit}>
            <input className={`${BASE_CLASS}__input`} name="query" type="search" placeholder="Search for a city..." />
            <button className={`${BASE_CLASS}__button`} type="submit" dangerouslySetInnerHTML={{__html:SearchIcon}} />
        </form>
    );
}