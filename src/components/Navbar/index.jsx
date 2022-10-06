import React from 'react'


export default function index() {
    return (
        <nav className='shadow-md '>
            <div className='p-2 flex flex-row justify-between items-center '>
                {/* left */}
                <div className='basis-1/3'>
                    <div className='flex space-x-1 justify-start items-center'>
                        <div>
                            <box-icon type='solid' color="#0ea5e9" name='shopping-bag-alt' size="lg"></box-icon>
                        </div>
                        <div className='text-2xl text-sky-500 font-bold'>
                            RShop
                        </div>
                    </div>
                </div>
                {/* mid */}
                <div className='basis-1/3'>
                    <div className='flex flex-row justify-center items-center space-x-4 text-xl'>
                        <div className='hover:text-sky-500 cursor-pointer'>Home</div>
                        <div className='hover:text-sky-500 cursor-pointer'>Store</div>
                        <div className='hover:text-sky-500 cursor-pointer'>About</div>
                    </div>
                </div>
                {/* right */}
                <div className='basis-1/3'>
                    <div className='flex justify-end items-center'>
                        <div className='border border-sky-500 flex justify-center items-center rounded-full p-2 cursor-pointer'>
                            <box-icon name='cart-alt' type='solid' color="#0ea5e9" size="sm"></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
