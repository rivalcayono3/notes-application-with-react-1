import { useState } from "react";
import Input from "../element/Input";

function Header({ onChange, ...props }) {
  // const handleSearch = (e) => {
  //   setSearchItem(e.target.value);
  // };
  // const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchItem.toLowerCase()));

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    handleSearch(e.target.value);
  };
  return (
    <header className="flex justify-between w-full h-20 items-center p-6 bg-[#1B1A17] border-b-2 border-[#a3560981]">
      <h1 id="#" className="text-4xl font-semibold text-white">
        Notes
      </h1>
      <Input type={"text"} placeholder={"Cari catatan ..."} onChange={onChange} />
    </header>
  );
}

export default Header;
