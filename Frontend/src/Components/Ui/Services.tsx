import ServicesCard from '../Cards/ServicesCard';
import { useRef } from 'react';
import useIsVisible from '../../Hooks/ScrollEffect.hook';
const Services = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref);

    return (
        <div
            ref={ref}
            className={`services transition-all ease-in-out duration-1000 ${
                isVisible
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-[200px]'
            }`}
        >
            <div className=' my-5  text-center grid place-items-center'>
                <h2 className='text-3xl p-2 border-green-700 border-b-2 font-bold'>
                    What We Do{' '}
                </h2>
                <div className='md:px-72'>
                    <p className='text-center'>
                       
                    </p>
                </div>
            </div>
            <div className='flex justify-center items-center flex-wrap'>
                <ServicesCard
                    title='Dental Care'
                    desc='Experience comprehensive dental care tailored to solve your oral health issues at our clinic. Our skilled team of professionals is dedicated to providing effective solutions, ensuring your journey to a healthier, brighter smile'
                />
                
            
                <ServicesCard
                    title='Daily Checkup'
                    desc='Experience thorough daily checkups at our clinic, where our dedicated team of professionals is committed to addressing your health concerns. From comprehensive examinations to personalized wellness plans, we ensure your journey towards a healthier and more vibrant life.'
                />
            </div>
        </div>
    );
};

export default Services;
