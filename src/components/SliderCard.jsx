import React from 'react'

const SliderCard = ({ branch, role, speciality, location, width }) => {
    return (
        <div style={{ width }} className={`flex flex-shrink-0 mr-[20px] h-auto  `}>
            <a href="" className={`border cursor-pointer w-full mx-auto my-0 transition-[border-color,background-color] duration-[.4s] p-[30px] min-h-[500px] flex flex-col max-w-[413px] flex-shrink-0 rounded-[20px] bg-transparent   `}>
                <div className='flex justify-center '>
                    <div className='bg-[#00000033] px-[15px]  rounded-[100px] flex items-center min-h-[40px] '>
                        <p className='text-[#fff] font-normal text-[calc(1rem+.125*(100vw-48rem)/42)] m-0'>{branch}</p>
                    </div>
                </div>
                <p className='transition-colors duration-[.4s] flex-grow-[1] break-words mb-[35px]  text-center leading-[120%] font-normal text-[calc(1.375rem+.875*(100vw-48rem)/42)] mt-[40px] m-0 text-[#1914144d]'>
                    <span className='text-[#fff] '>{role}</span>
                    <br />
                    {speciality}
                </p>
                <div className=''>
                    <p className='text-[#fff] text-[calc(1rem+.125*(100vw-48rem)/42)] text-center font-normal m-0'>{location}</p>
                </div>
            </a>
        </div>
    )
}

export default SliderCard