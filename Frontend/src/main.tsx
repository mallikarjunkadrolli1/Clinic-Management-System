import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import HomePage from './Pages/HomePage';
import DoctorsPage from './Pages/DoctorsPage';
import ProfilePage from './Pages/ProfilePage';
import Appointment from './Pages/AppointmentPage';
import { Authprovider } from './Store/auth';
import ProtectedRoutes from './Layouts/ProtectedRouteLayout';
import DoctorLoginPage from './Pages/doctorLogin';
import DoctorFormRegister from './Components/Form/DoctorFormRegister';
import AdminPanelLogin from './adminLogin';
import AdminDashboard from './adminDashboard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
              path:'',
              element:<HomePage/>
            },
            {
                path: 'home',
                element: <HomePage />,
            },
            {
                path: 'appointment',
                element: (
                    <ProtectedRoutes>
                        <Appointment />
                    </ProtectedRoutes>
                ),
            },
            {
                path: 'doctors',
                element: <DoctorsPage />,
            },
            {
                path: 'profile',
                element: (
                    <ProtectedRoutes>
                        <ProfilePage />
                    </ProtectedRoutes>
                ),
            },
        ],
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/doctorRegister',
        element: <DoctorFormRegister />
    },
    {
        path: '/doctorLogin',
        element: <DoctorLoginPage />
    },
    {
        path: '/admin',
        element: <AdminPanelLogin />,
    },
    {
        path: '/admin/dashboard',
        element: <AdminDashboard />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Authprovider>
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    </Authprovider>,
);
