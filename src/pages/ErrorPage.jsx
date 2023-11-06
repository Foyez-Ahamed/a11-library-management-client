import { Link } from 'react-router-dom';
import errorPage from '../../src/assets/images/404.jpg'

const ErrorPage = () => {
    return (
        <div>
            <div className='relative'>
                <img className='lg:h-[400px] w-full object-cover' src={errorPage} alt="" />
            </div>

            <h1 className='text-center'><Link to='/'><button className='font-bold shadow-2xl px-5 py-2 bg-gray-500 rounded-md text-white'>Go Home</button></Link></h1>
        </div>
    );
};

export default ErrorPage;