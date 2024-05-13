import React, { ReactNode } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import search from "./search.module.scss";

type SearchProps = ReactNode | {}

export const Search: React.FC<SearchProps> = (): JSX.Element => {
    return (
      <form
        action=""
        className={search.search}
        data-testid="search"
      >
        <input
          placeholder="What are you looking for?"
          type="search"
        />
        <button 
            role="button"
            type="submit"> 
                <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  };
