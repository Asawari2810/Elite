import Auth from '../layouts/auth.jsx';
import Dashboard from '../layouts/dashboard.jsx';
import AdminDashboard from '../layouts/adminDashboard';
import EmailConfirmation from '../view/EmailConfirmation';
import EmailActivation from '../view/EmailActivation';

var  indexRoutes = [
    { path: '/admin/courses', component: AdminDashboard},
    { path: '/admin/courseDetails/:id', component: AdminDashboard},
    { path: '/admin/group/:course_id', component: AdminDashboard},
    { path: '/admin/subject/:group_id', component: AdminDashboard},
    { path: '/admin/chapter/:subject_id', component: AdminDashboard},

    {path : '/login', name: 'Auth' ,component : Auth },
    {path : '/register' , name :'Auth' , component : Auth},
    {path: '/mailsent', name: 'Email confirmation', component: EmailConfirmation},
    {path: '/verifymail', name: 'Email verification', component: EmailActivation},

    {path : '/dashboard' , name : 'Dashboard', component : Dashboard },
    { path: '/groups', name: 'Dashboard', component: Dashboard},
    { path: '/modalList/:id', name: 'Dashboard', component: Dashboard},
    { path: '/fullTestList/:id', name: 'Dashboard', component: Dashboard},
    { path: '/fullTest/:subId', name: 'Dashboard', component: Dashboard},
    { path: '/fullTestSubmitScore', name: 'Dashboard', component: Dashboard},
    {path : '/' , name:'Auth' , component : Auth}
];

export default indexRoutes;
