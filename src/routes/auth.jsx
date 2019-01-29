import {PersonAdd , Fingerprint} from "@material-ui/icons";
import LoginPage from '../view/LoginPage';
import RegistrationPage from '../view/RegistrationPage';
import MainPage from "../view/MainPage.jsx";
import UserDashboard from "../view/UserDashboard.jsx";

const authRoute = [
    {
        path: "/login",
        name : "Login Page",
        mini: "LP",
        icon : Fingerprint,
        component : LoginPage
    } ,
    {
        path : "/register",
        name : "Register Page",
        mini : "RP",
        icon : Fingerprint,
        component : RegistrationPage
    },
    {
        path : "/dashboard",
        name : "User Dsahboard",
        mini : "UD",
        icon : Fingerprint,
        component :UserDashboard    
    },

    {
        path : "/main",
        name : "Main Page",
        mini : "MP",
        icon : Fingerprint,
        component : MainPage
    },
    { redirect: true, path: "/", pathTo: "/main", name: "Main Page" ,component: MainPage}
];

export default authRoute;