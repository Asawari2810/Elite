import {Fingerprint ,Dashboard} from "@material-ui/icons";
import dashboard from "../view/UserDashboard.jsx";
import Subjects from "../view/Subjects.jsx";
import Groups from '../view/Groups.jsx';
import ModalPaperList from '../view/ModalPaperList';
import FullTestList from '../view/FullTestList';
import FullTest from '../view/FullTest';
import FullTestSubmitScore from '../view/FullTestSubmitScore';
import FullTestInstructions from '../view/FullTestInstructions';


import Courses from '../admin/views/Courses';
import CourseDetails from '../admin/views/CourseDetails';
import Group from '../admin/views/Groups';
import AdminSubjects from '../admin/views/Subjects';
import AdminChapters from '../admin/views/Chapters';

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
    },

];

export const otherRoutesAdmin = [
    {
        path: "/admin/group/:course_id",
        name: "Group",
        mini: "UD",
        icon: Dashboard,
        component: Group,
       // collapse : "true"
    },
    {
        path: "/admin/subject/:group_id",
        name: "Subjects",
        mini: "UD",
        icon: Dashboard,
        component: AdminSubjects,
       // collapse : "true"
    },
    {
        path: "/admin/chapter/:subject_id",
        name: "Subjects",
        mini: "UD",
        icon: Dashboard,
        component: AdminChapters,
       // collapse : "true"
    },
    {
        path: "/admin/courseDetails/:id",
        name: "CourseDetails",
        mini: "UD",
        icon: Dashboard,
        component: CourseDetails,
       // collapse : "true"
    }
]

export const otherRoutes = [
   
    { 
        path: '/modalList/:id', 
        component : ModalPaperList, 
        name: 'Modal Paper List'
    },

    {
        path: '/fullTestList/:id',
        component : FullTestList, 
        name: 'Full Test List'
    },
    {
        path: '/fullTest/:id/:subId',
        component : FullTest, 
        name: 'Full Test'
    },
    {
        path: '/fullTestSubmitScore',
        component : FullTestSubmitScore, 
        name: 'Results'
    },
    {
        path: '/fullTestInstructions/:id/:subId',
        component : FullTestSubmitScore, 
        name: 'Results'
    }

]
