import React, { useState } from "react";

import '../sass/App.scss';
import '../sass/Search.scss';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function Search(props) {

  return (
    <form onSubmit={(e, searchInput) => props.submit(e, searchInput)}>
      <TextField
          label="Search"
          id="outlined-margin-none"
          placeholder="Search for a tree by name"
          variant="outlined"
          value={props.searchInput}
          onChange={props.onChange}
          InputProps={{
            endAdornment:
            <InputAdornment position="end">
                <IconButton type="submit" id="searchIcon">
                    <SearchIcon/>
                </IconButton>
            </InputAdornment>
        }}
    />
    </form>
  );
}

export default Search;
