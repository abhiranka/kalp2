import PropTypes from "prop-types";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function CategoryPanel({
  category,
  expanded,
  onChange,
  children
}) {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disableGutters
      elevation={0}
      sx={{
        mb: 1,
        border: "1px solid #E5E7EB",
        borderRadius: "10px !important",
        overflow: "hidden",
        "&:before": {
          display: "none"
        }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography
          fontWeight={600}
          color="primary"
        >
          {category}
        </Typography>
      </AccordionSummary>

      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

CategoryPanel.propTypes = {
  category: PropTypes.string.isRequired,
  expanded: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default CategoryPanel;