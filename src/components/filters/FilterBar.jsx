import PropTypes from "prop-types";

import {
  Grid,
  MenuItem,
  TextField,
  Button
} from "@mui/material";

import SearchBar from "./SearchBar";

function FilterBar({
  search,
  filters,
  options,
  onSearchChange,
  onFilterChange,
  onClear
}) {
  return (
    <Grid container spacing={2} mb={2}>
      <Grid item xs={12} md={4}>
        <SearchBar
          value={search}
          onChange={onSearchChange}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          select
          fullWidth
          size="small"
          label="Weight"
          value={filters.weight}
          onChange={(e) =>
            onFilterChange("weight", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.weights.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          select
          fullWidth
          size="small"
          label="Shade"
          value={filters.shade}
          onChange={(e) =>
            onFilterChange("shade", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.shades.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} md={2}>
        <TextField
          select
          fullWidth
          size="small"
          label="Weave"
          value={filters.weave}
          onChange={(e) =>
            onFilterChange("weave", e.target.value)
          }
        >
          <MenuItem value="">All</MenuItem>

          {options.weaves.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} md={2}>
        <Button
          fullWidth
          variant="contained"
          onClick={onClear}
          sx={{ height: "40px" }}
        >
          Clear
        </Button>
      </Grid>
    </Grid>
  );
}

FilterBar.propTypes = {
  search: PropTypes.string.isRequired,
  filters: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired
};

export default FilterBar;