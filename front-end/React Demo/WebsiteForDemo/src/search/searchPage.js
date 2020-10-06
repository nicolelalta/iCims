import React from "react";
import Header from "../layouts/header";
import SearchBar from "../layouts/searchbar";
import Search from "./search";

export default function SearchPage() {
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      <Search />
    </React.Fragment>
  );
}
