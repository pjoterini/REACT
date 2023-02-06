import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      console.log(searchTerm);
      setSearchTerm("");
    }
  }

  return (
    <div>
      <Paper
        component="form"
        onSubmit={(e: React.FormEvent) => {
          handleSubmit(e);
        }}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          paddingLeft: "2",
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          style={{
            marginLeft: "1rem",
          }}
          className="search-bar"
          type="text"
          placeholder="search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            console.log(searchTerm);
          }}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
          <Search />
        </IconButton>
      </Paper>
    </div>
  );
};

export default SearchBar;
