import { Box, Typography } from "@mui/material";
import { DenimAccordion } from "@/components/accordion";

function Dashboard() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
      >
        Denim Library
      </Typography>

      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3 }}
      >
        Browse fabric categories below.
      </Typography>

      <DenimAccordion />
    </Box>
  );
}

export default Dashboard;