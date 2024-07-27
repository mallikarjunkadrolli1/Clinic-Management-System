import AuthLayout from '../Layouts/AuthLayout';
import DoctorFormLogin from '../Components/Form/DoctorFormLogin';
const DoctorLoginPage = () => {
    return (
        <AuthLayout Form={DoctorFormLogin}/>
    );
};

export default DoctorLoginPage;
