// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";

// Components/views
import DashboardPage from '../views/Dashboard';
import Profile from '../views/Profile';
import Relatos from '../views/Relatos';
import Atas from '../views/Atas';
import Informacoes from '../views/Informacoes';
import Calendar from '../views/Calendar';
import Documents from '../views/Documents';
import Facilitadores from '../views/Facilitadores';
import FAQ from '../views/FAQ';


const systemRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/system"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: Profile,
    layout: "/system"
  },
  {
    path: "/relatos",
    name: "Relatos",
    icon: Unarchive,
    component: Relatos,
    layout: "/system"
  },
  {
    path: "/atas",
    name: "Atas",
    icon: LibraryBooks,
    component: Atas,
    layout: "/system"
  },
  {
    path: "/information",
    name: "Informações",
    icon: BubbleChart,
    component: Informacoes,
    layout: "/system"
  },
  {
    path: "/calendar",
    name: "Calendário",
    icon: LocationOn,
    component: Calendar,
    layout: "/system"
  },
  {
    path: "/documents",
    name: "Documentos",
    icon: Notifications,
    component: Documents,
    layout: "/system"
  },
  {
    path: "/facilitadores",
    name: "Facilitadores",
    icon: Language,
    component: Facilitadores,
    layout: "/system"
  },
  {
    path: "/faq",
    name: "FAQ",
    icon: Unarchive,
    component: FAQ,
    layout: "/system"
  }
];

export default systemRoutes;
