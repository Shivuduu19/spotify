import React from 'react'

const SliderCard = ({ branch, role, speciality, indexed, current, location, width }) => {
    return (
        <div style={{ width }} className={`flex flex-shrink-0 mr-[20px] h-auto  `}>
            <a href="" className={`tablet:px-[20px] tablet:pt-[20px] tablet:pb-[15px] tablet:rounded-[15px] border cursor-pointer w-full mx-auto my-0 transition-[border-color,background-color] duration-[.4s] p-[30px] tablet:min-h-[350px] min-h-[500px] flex flex-col tablet:max-w-[276px] max-w-[413px] flex-shrink-0 rounded-[20px] ${indexed + 1 === current ? 'bg-[#96f0b6] text-[#1914144d]' : 'bg-transparent '}  `}>
                <div className='flex justify-center '>
                    <div className={` ${indexed + 1 === current ? 'bg-[#ffffff4d]' : ' bg-[#00000033]'} tablet:py-0 tablet:px-[10px] tablet:min-h-[25px] transition-colors duration-[.4s]  px-[15px]  rounded-[100px] flex items-center min-h-[40px] `}>
                        <p className={` ${indexed + 1 === current ? 'text-[#191414]' : 'text-[#fff]'} transition-colors duration-[.4s]  font-normal text-[calc(1rem+.125*(100vw-48rem)/42)] m-0 mobile:text-[.75rem]`}>{branch}</p>
                    </div>
                </div>
                <p className=' tablet:mt-[25px] tablet:mb-[20px] transition-colors duration-[.4s] flex-grow-[1] break-words mb-[35px]  text-center leading-[120%] font-normal text-[calc(1.375rem+.875*(100vw-48rem)/42)] mt-[40px] m-0 text-[#1914144d]'>
                    <span className={` ${indexed + 1 === current ? 'text-[#191414]' : ' text-[#fff]'} transition-colors duration-[.4s] `}>{role}</span>
                    <br />
                    {speciality}
                </p>
                <div className=''>
                    <p className={`${indexed + 1 === current ? 'text-[#191414]' : ' text-[#fff] '} mobile:text-[.75rem] transition-colors duration-[.4s] text-[calc(1rem+.125*(100vw-48rem)/42)] text-center font-normal m-0`}>{location}</p>
                </div>
            </a>
        </div>
    )
}

export default SliderCard