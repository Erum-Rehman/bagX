import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            None
          </MenuItem>
          <MenuItem value={10}>Sort</MenuItem>
          <MenuItem value={20}>Featured</MenuItem>
          <MenuItem value={30}>Best Selling</MenuItem>
          <MenuItem value={30}>Price, Low to high</MenuItem>
          <MenuItem value={30}>Price, high to low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
