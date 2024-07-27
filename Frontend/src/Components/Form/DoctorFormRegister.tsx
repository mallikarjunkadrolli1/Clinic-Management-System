// RegisterDoctor.tsx
import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    number: string;
    specialty: string;
    password: string;
}

const RegisterDoctor: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        number: '',
        specialty: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-100'>
            <form 
                onSubmit={handleSubmit} 
                className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md'
            >
                <h2 className='text-2xl font-bold mb-4 text-center text-green-700'>Register Doctor</h2>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
                        Name
                    </label>
                    <input 
                        type='text' 
                        name='name' 
                        value={formData.name} 
                        onChange={handleChange} 
                        required 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Your Name'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input 
                        type='email' 
                        name='email' 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Your Email'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='number'>
                        Number
                    </label>
                    <input 
                        type='text' 
                        name='number' 
                        value={formData.number} 
                        onChange={handleChange} 
                        required 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Your Number'
                    />
                </div>

                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='specialty'>
                        Your Specialty
                    </label>
                    <input 
                        type='text' 
                        name='specialty' 
                        value={formData.specialty} 
                        onChange={handleChange} 
                        required 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Your Specialty'
                    />
                </div>

                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input 
                        type='password' 
                        name='password' 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline'
                        placeholder='Your Password'
                    />
                </div>

                <div className='flex items-center justify-between'>
                    <button 
                        type='submit' 
                        className='bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full'
                    >
                        Register doctor
                    </button>
                </div>

                <div className='text-center mt-4'>
                    <a href='/login' className='inline-block align-baseline font-bold text-sm text-green-700 hover:text-green-800'>
                        Have an Account? Login
                    </a>
                </div>
            </form>
        </div>
    );
};

export default RegisterDoctor;
