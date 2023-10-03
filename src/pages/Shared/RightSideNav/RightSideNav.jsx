import { FaFacebook, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-4 mb-10'>
                <h2 className="text-3xl font-semibold">Login With</h2>
                <div className='space-y-4'>
                    <button className="btn btn-outline w-full">
                        <FaGoogle /> Login with google
                    </button>
                    <button className="btn btn-outline w-full">
                        <FaGithub /> Login with github
                    </button>
                </div>
            </div>

            <div className='p-4 space-y-4'>
                <h2 className="text-3xl font-semibold"> Find us on</h2>
                <div className=''>
                    <a className='flex p-4 text-lg items-center border rounded-t-lg' href='#'>
                        <FaFacebook className='mr-3' /> Facebook
                    </a>
                    <a className='flex p-4 text-lg items-center border-x' href='#'>
                        <FaTwitter className='mr-3' /> Twitter
                    </a>
                    <a className='flex p-4 text-lg items-center border rounded-b-lg' href='#'>
                        <FaInstagram className='mr-3'></FaInstagram>  Instgram
                    </a>
                </div>
            </div>

            <div className='p-4 space-y-4 mb-10'>
                <h2 className="text-3xl font-semibold"> Q Zone</h2>
                <div className='space-y-4'>
                    <img src={qZone1}/>
                    <img src={qZone2}/>
                    <img src={qZone3}/>
                </div>
            </div> 

        </div>
    );
};

export default RightSideNav;