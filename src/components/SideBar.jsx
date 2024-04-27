import NavBar from "./NavBar";
import React from "react";
import SearchBar from "./SearchBar";
import UsersList from "./UsersList";

function SideBar() {
  return (
    <div className=" sidebar  md:w-full relative">
        <NavBar className={'relative'}/>
        <SearchBar/>
        <UsersList/>
    </div>
  )
}

export default SideBar