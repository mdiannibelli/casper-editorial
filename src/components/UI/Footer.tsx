import PhoneIcon from '../../icons/PhoneIcon';
import InstagramIcon from '../../icons/InstagramIcon';
import FacebookIcon from '../../icons/FacebookIcon';

const Footer = () => {
    return (
        <div>
            <footer className='bg-slate-900 py-12 flex flex-col justify-center items-center'>
                <h1 className='font-hind text-3xl font-semibold text-white uppercase'>Casper Editorial</h1>
                <div className='grid gap-y-4 md:grid-cols-3 gap-x-8 justify-center items-center justify-items-center mt-8'>
                    <div className='flex gap-x-2 justify-center items-center'>
                        <PhoneIcon className='text-white' />
                        <span className='text-white font-hind text-md md:text-lg'>
                            (+54) 9 11 4563-5690
                        </span>
                    </div>
                    <div className='flex gap-x-1 justify-center items-center'>
                        <InstagramIcon className='text-white' />
                        <span className='text-white font-hind text-md md:text-lg'>
                            @casper_editorial
                        </span>
                    </div>

                    <div className='flex gap-x-1 justify-center items-center'>
                        <FacebookIcon className='text-white' />
                        <span className='text-white font-hind text-md md:text-lg'>
                            Casper Editorial
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
