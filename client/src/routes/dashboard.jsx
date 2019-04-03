import {Fingerprint ,Dashboard} from "@material-ui/icons";
import dashboard from "../view/UserDashboard.jsx";
import Subjects from "../view/Subjects.jsx";
import Groups from '../view/Groups.jsx';
import ModalPaperList from '../view/ModalPaperList';
import FullTestList from '../view/FullTestList';


import Courses from '../admin/views/Courses';

const demoRoutes = [];
export const dashboardRoutes = [
    {
        path: "/groups",
        name: "Groups",
        mini: "UD",
        icon: Dashboard,
        component: Groups,
       // collapse : "true"
    }
];

export const adminDashboardRoutes = [
    {
        path: "/admin/courses",
        name: "Courses",
        mini: "UD",
        icon: Dashboard,
        component: Courses,
       // collapse : "true"
    }
];

export const otherRoutes = [
   
    { 
        path: '/modalList/:id', 
        component : ModalPaperList, 
        name: 'Modal Paper List'
    },

    {
        path: '/fullTestList',
        component : FullTestList, 
        name: 'Full Test List'
    }

]
