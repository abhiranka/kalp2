import PropTypes from "prop-types";
import { TextField } from "@mui/material";

function SearchBar({ value, onChange }) {
  return (
    <TextField
      fullWidth
      size="small"
      placeholder="Search fabrics..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchBar;