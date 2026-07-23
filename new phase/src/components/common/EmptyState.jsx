import { Box, Typography } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";

function EmptyState({ message = "No data available." }) {
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <InboxIcon sx={{ fontSize: 64, color: "text.disabled" }} />
      <Typography mt={2} color="text.secondary">
        {message}
      </Typography>
    </Box>
  );
}

export default EmptyState;