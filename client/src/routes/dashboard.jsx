import {Fingerprint ,Dashboard} from "@material-ui/icons";
import dashboard from "../view/UserDashboard.jsx";
import Subjects from "../view/Subjects.jsx";

const demoRoutes = [];
const dashboardRoutes = [
    {
        collapse: true,
        path : "/dashboard",
        name : "Subjects",
        mini : "UD",
        icon: Dashboard,
        state: "collapseSub",
        views : [
             {
                path : "/sub1",
                name : "Subject1",
                component : Subjects
            },
            {
                path: "/sub1",
                name: "Subject2",
                component: Subjects
            }
        ]
       
    },

    {
        path: "/subj",
        name: "Test Series",
        mini: "UD",
        icon: Dashboard,
        component: dashboard,
       // collapse : "true"
    }
];

export default dashboardRoutes;