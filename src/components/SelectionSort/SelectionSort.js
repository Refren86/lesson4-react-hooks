import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

export const SelectionSort = ({ options, defaultValue, value, sortArray }) => {
  return (
    <Box sx={{ width: 120 }}>
      <FormControl variant="standard" fullWidth>
        <InputLabel>Sort by</InputLabel>
        <Select value={value} onChange={(e) => sortArray(e.target.value)}>
          <MenuItem disabled value="">
            {defaultValue}
          </MenuItem>

          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
