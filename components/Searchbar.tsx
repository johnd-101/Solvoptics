"use client";

import { Search } from "lucide-react";
import { useState } from "react";


interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}


export default function SearchBar({
  placeholder = "Search...",
  onSearch,
}: SearchBarProps) {

  const [search, setSearch] = useState("");


  function handleChange(value: string) {

    setSearch(value);

    if (onSearch) {
      onSearch(value);
    }

  }


  return (

    <div
      className="
        relative
        w-full
        max-w-md
      "
    >

      <Search
        size={18}
        className="
          absolute
          left-3
          top-1/2
          -translate-y-1/2
          text-gray-400
        "
      />


      <input

        type="text"

        value={search}

        onChange={(e) =>
          handleChange(e.target.value)
        }

        placeholder={placeholder}

        className="
          w-full
          pl-10
          pr-4
          py-2
          border
          rounded-md
          text-gray-700
          focus:outline-none
          focus:ring-2
          focus:ring-blue-500
        "

      />

    </div>

  );
}