import React from 'react';
import { Link } from 'react-router-dom';

export default function InfoFooter({classProps}) {

    return (
        <section className={classProps} >
            <p className='text-center'>© 2023 React Shop All Rights Reserved </p>
            <div className='flex flex-col justify-center items-center gap-2 pt-4'>
                <Link className='underline hover:text-gray-700' to='intellectual-property'> Intellectual Property </Link>
                <Link className='underline hover:text-gray-700' to='terms-and-conditions'> Terms and Conditions </Link>
            </div>
        </section>
    )
}