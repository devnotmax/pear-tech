import { FaCcVisa, FaCcMastercard, FaCcAmex, FaPaypal } from 'react-icons/fa';
import Link from 'next/link';

import { Pathroutes } from '@/utils/PathRoutes';

const Footer = () => {
    return (
        <footer className='bg-black text-white flex flex-col items-center p-4 mt-10'>
          
        
          <div className='w-full mb-4'>
            <h3 className='text-center  text-m font-semibold mb-2'>Payment methods</h3>
            <div className='flex justify-center space-x-4'>
                {/* Tarjetas de medios de pago */}
                <div><FaCcVisa size={30} /></div>
                <div><FaCcMastercard size={30} /></div>
                <div><FaCcAmex size={30} /></div>
                <div><FaPaypal size={30} /></div>
            </div>
          </div>
  
          {/* Derechos de autor y QR */}
          <div className="w-full text-center mt-4">
            <p className='text-m'>© 2024 Apple Center. All rights reserved.</p>
          </div>
        </footer>
    );
}

export default Footer;