import { FaHeart } from 'react-icons/fa';
import BookLink from '../Buttons/BooksLink';

const HeroBanner = () => {
    return (
        <div className='bg-[#b1e4c8] w-full md:px-20 px-12 flex md:py-20 flex-wrap-reverse py-4'>
            <div className='md:w-1/2 md:pr-4'>
                <p className='text-gray-700 text-lg flex justify-start items-center'>
                    <FaHeart style={{ color: 'red' }} /> Love Your Smile
                </p>
                <h2 className='font-bold my-5 text-3xl md:text-5xl '>
                    Find Your Doctor and Take an Appointment
                </h2>
                <p className='my-5 '>
                    Welcome to our comprehensive doctor appointment platform,
                    where we connect patients with trusted healthcare
                    professionals. Seamlessly schedule appointments, explore
                    specialized doctors, and prioritize your well-being with our
                    user-friendly and efficient online service.
                </p>
                <div className='my-10 flex justify-center items-center w-full'>
                    <BookLink />
                </div>
                <div className='flex text-center justify-center items-center mt-10'>
                    <div>
                        <p className='text-green-700 font-semibold'>140k+</p>
                        <p className='text-sm text-gray-700'>
                            Received Patients
                        </p>
                    </div>
                    <div className='mx-10'>
                        <p className='text-green-700 font-semibold '>50+</p>
                        <p className='text-sm text-gray-700'>Expert Doctors</p>
                    </div>
                    <div>
                        <p className='text-green-700 font-semibold'>10+</p>
                        <p className='text-sm text-gray-700'>
                            Years Experience
                        </p>
                    </div>
                </div>
            </div>
            <div className='md:w-1/2 flex justify-center items-center'>
                <img
                    src='https://royalimplant.com/blogs/wp-content/uploads/2022/06/doctor-and-dentist-thumbs-up.jpg'
                    alt='Dentist'
                    className='w-full h-auto rounded-lg shadow-lg'
                />
            </div>
        </div>
    );
};

export default HeroBanner;
