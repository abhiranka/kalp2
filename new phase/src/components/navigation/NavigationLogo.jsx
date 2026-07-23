import { Box, Typography } from "@mui/material";

function NavigationLogo() {
  return (
    <Box
      sx={{
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderBottom: 1,
        borderColor: "divider"
      }}
    >
      <Typography
        variant="h6"
        fontWeight={700}
        color="primary"
      >
        Kalp Cotspin
      </Typography>
    </Box>
  );
}

export default NavigationLogo;