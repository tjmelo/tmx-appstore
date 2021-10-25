import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import search from "./search.module.scss";

interface SearchProps {}

export const Search: React.VFC<SearchProps> =
  (): JSX.Element => {
    return (
      <form
        data-testid="search"
        className={search.search}
        action=""
      >
        <input
          type="search"
          placeholder="What are you looking for?"
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  };
