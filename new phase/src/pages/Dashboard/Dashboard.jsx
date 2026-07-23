import { Box, Typography, Paper } from "@mui/material";

function Dashboard() {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 4,
        borderRadius: 3
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Dashboard
      </Typography>

      <Typography mt={2} color="text.secondary">
        Welcome to Kalp Cotspin Denim Library.
      </Typography>
    </Paper>
  );
}

export default Dashboard;