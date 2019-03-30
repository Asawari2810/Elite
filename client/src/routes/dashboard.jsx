import {Fingerprint ,Dashboard} from "@material-ui/icons";
import dashboard from "../view/UserDashboard.jsx";
import Subjects from "../view/Subjects.jsx";
import Groups from '../view/Groups.jsx';

const demoRoutes = [];
const dashboardRoutes = [
    // {
    //     collapse: true,
    //     path : "/dashboard",
    //     name : "Groups",
    //     mini : "UD",
    //     icon: Dashboard,
    //     state: "collapseSub",
    //     views : [
    //          {
    //             path : "/group1",
    //             name : "Group1",
    //             component : Group1
    //         },
    //         {
    //             path: "/group2",
    //             name: "Group2",
    //             component: Group2
    //         }
    //     ]
       
    // },

    {
        path: "/groups",
        name: "Groups",
        mini: "UD",
        icon: Dashboard,
        component: Groups,
       // collapse : "true"
    }
];

export default dashboardRoutes;