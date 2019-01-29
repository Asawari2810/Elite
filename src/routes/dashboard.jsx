import {Fingerprint} from "@material-ui/icons";
import Dashboard from "../view/UserDashboard.jsx";

const dashboardRoutes = [
    {
        path : "/dashboard",
        name : "User Dsahboard",
        mini : "UD",
        icon : Fingerprint,
        component : Dashboard
    }
];

export default dashboardRoutes;