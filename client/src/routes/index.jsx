import Auth from '../layouts/auth.jsx';
import Dashboard from '../layouts/dashboard.jsx';
import AdminDashboard from '../layouts/adminDashboard';

var  indexRoutes = [
    { path: '/admin/courses', component: AdminDashboard},

    {path : '/login', name: 'Auth' ,component : Auth },
    {path : '/register' , name :'Auth' , component : Auth},
    {path : '/dashboard' , name : 'Dashboard', component : Dashboard },
    { path: '/groups', name: 'Dashboard', component: Dashboard},
    { path: '/modalList/:id', name: 'Dashboard', component: Dashboard},
    { path: '/fullTestList', name: 'Dashboard', component: Dashboard},
    {path : '/' , name:'Auth' , component : Auth}
];

export default indexRoutes;
