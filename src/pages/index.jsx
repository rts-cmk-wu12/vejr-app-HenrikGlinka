import AvoiderGame from "../components/avoider-game/avoider-game";
import SearchBar from "../components/search-bar/search-bar";

export default function IndexPage() {

    return (
        <>
            <SearchBar onSubmit={searchQuery => {
                console.log("Search query submitted:", searchQuery);
            }} />
        </>
    )
}