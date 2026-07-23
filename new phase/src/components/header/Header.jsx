import { AppBar, Box, Toolbar } from "@mui/material";

import HeaderBrand from "./HeaderBrand";
import HeaderSearch from "./HeaderSearch";
import HeaderNotifications from "./HeaderNotifications";
import HeaderProfile from "./HeaderProfile";

import { SIDEBAR_WIDTH, HEADER_HEIGHT } from "@/constants/layout";

function Header() {
  return (
    <AppBar
      position="fixed"
      color="inherit"
      elevation={1}
      sx={{
        width: `calc(100% - ${SIDEBAR_WIDTH}px)`,
        ml: `${SIDEBAR_WIDTH}px`,
        height: HEADER_HEIGHT,
        justifyContent: "center"
      }}
    >
      <Toolbar>
        <HeaderBrand />

        <Box sx={{ flexGrow: 1 }} />

        <HeaderSearch />

        <HeaderNotifications />

        <HeaderProfile />
      </Toolbar>
    </AppBar>
  );
}

export default Header;