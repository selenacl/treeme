import React from 'react';

import '../sass/App.scss';
import '../sass/Search.scss';

import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <TextField
          label="Search"
          id="outlined-margin-none"
          placeholder="Search for a tree"
          variant="outlined"
          InputProps={{
            endAdornment:
            <InputAdornment position="end">
                <IconButton>
                    <SearchIcon/>
                </IconButton>
            </InputAdornment>
        }}
    />
  );
}

export default Search;
