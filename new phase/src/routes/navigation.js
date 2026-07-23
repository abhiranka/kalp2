import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import TableChartIcon from "@mui/icons-material/TableChart";
import CollectionsIcon from "@mui/icons-material/Collections";
import SettingsIcon from "@mui/icons-material/Settings";

import ROUTES from "./RouteConstants";

const navigation = [
  {
    id: "dashboard",
    title: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: DashboardIcon
  },

  {
    id: "categories",
    title: "Categories",
    path: ROUTES.CATEGORIES,
    icon: CategoryIcon
  },

  {
    id: "fabrics",
    title: "Fabric Library",
    path: ROUTES.FABRICS,
    icon: TableChartIcon
  },

  {
    id: "gallery",
    title: "Image Gallery",
    path: ROUTES.GALLERY,
    icon: CollectionsIcon
  },

  {
    id: "settings",
    title: "Settings",
    path: ROUTES.SETTINGS,
    icon: SettingsIcon
  }
];

export default navigation;