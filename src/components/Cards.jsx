import nosolo from '../assets/WhoWeAre-b-940.jpg'
import wherewebelong from '../assets/WhereWeBelong-b-940.jpg'
import howwereact from '../assets/HowWeAct-c-940.jpg'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

const Cards = () => {
    const [position, setPosition] = useState(0)
    const [scrollstop, setScrollStop] = useState(0)
    const [sectionTop, setSectionTop] = useState(0)
    const sectionref = useRef(null)
    const firstLink = useRef(null)
    const [viewport, setViewport] = useState(getWindowDimensions());
    const { scrollY, scrollYProgress } = useScroll({
        target: sectionref,
        offset: ['start start', 'end end']
    })
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setPosition(latest)
        if (latest === 1) {
            console.log(latest);
            setScrollStop(scrollY.get())
        }
        // console.log(scrollY.get());
    })
    // console.log(scrollstop);
    useEffect(() => {
        setSectionTop(sectionref.current.getBoundingClientRect().top)
        // console.log(firstLink.current.getBoundingClientRect())
    }, [firstLink])

    const resolVariants1 = {

        tablet1: {
            y: scrollstop, // Adjust offset for tablet
            transition: '0s'
        },

        desktop1: {
            y: scrollstop - 350,
        }
    }

    const resolVariants2 = {

        tablet1: {
            y: scrollstop - 780, // Adjust offset for tablet
            transition: '0s'
        },

        desktop1: {
            y: scrollstop - 880,
        }
    }

    const resolVariants3 = {

        tablet1: {
            y: scrollstop - 780, // Adjust offset for tablet
            transition: '0s'
        },

        desktop1: {
            y: scrollstop - 1268,
            top: 0
        }
    }

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        // Add logic to categorize width for mobile, tablet, and desktop based on your needs
        return width <= 768 ? 'mobile' : width <= 1024 ? 'tablet1' : 'desktop1';
    }
    // console.log(viewport);
    // console.log(position);
    return (
        <section ref={sectionref} className=" rounded-tl-[20px] bg-inherit relative  rounded-tr-[20px] z-[1] pb-[228px]">
            <motion.a ref={firstLink} style={position < 1 ? { position: 'sticky' } : { position: 'relative' }} transition='0s' animate={position < 1 ? '' : viewport} variants={resolVariants1} href="" className={`mt-0  z-[1] top-0  bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[152px] `}>
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">1</span>
                <h2 className="leading-[150%] font-light text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">Who we are</h2>
            </motion.a>
            <div className="min-h-[calc(100vh-228px)] top-[76px]  mb-[-76px] bg-inherit sticky flex flex-col   ">
                <div className=" max-w-[1440px] mx-auto px-[60px] w-full">

                    <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px]">
                        <div className="basis-[37.5%] max-w-[37.5%] px-[20px] flex-grow-0 flex-shrink-0 ml-[4.1666666667%]">
                            <img src={nosolo} alt="" className="rounded-[20px] w-full block h-auto object-cover aspect-[47/50]" />
                        </div>
                        <div className='px-[20px] basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                            <h3 className='leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>One band, no solo artists</h3>
                            <p className='leading-[150%] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>It’s our culture. It’s our values. It’s who we are and what we’re not. It’s why we do things the way we do and why that matters.</p>
                            <a href="" className=' bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                                Read our manifesto
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <motion.a style={position < 1 ? { position: 'sticky' } : { position: 'relative' }} animate={position < 1 ? '' : viewport} transition='0s' variants={resolVariants2} href="" className="mt-[76px] sticky z-[1] top-[76px] bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[76px]">
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">2</span>
                <h2 className="leading-[150%] font-light text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">Where we belong</h2>
            </motion.a>
            <div className="min-h-[calc(100vh-228px)] top-[152px] mb-[-152px] sticky bg-inherit flex flex-col  ">
                <div className=" max-w-[1440px] mx-auto px-[60px] w-full">

                    <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px]">
                        <div className="basis-[37.5%] max-w-[37.5%] px-[20px] flex-grow-0 flex-shrink-0 ml-[4.1666666667%]">
                            <img src={wherewebelong} alt="" className="rounded-[20px] w-full block h-auto object-cover aspect-[47/50]" />
                        </div>
                        <div className='px-[20px] basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                            <h3 className='leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>We all have parts to play</h3>
                            <p className='leading-[150%] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>We want you to feel like you belong here and can thrive here. No two creators or listeners are the same, so neither are we.</p>
                            <a href="" className=' bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                                Learn about belonging
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <motion.a href="" style={position < 1 ? { position: 'sticky' } : { position: 'relative' }} animate={position < 1 ? '' : viewport} variants={resolVariants3} className="mt-[150px] sticky z-[1] top-[150px] bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[0px]">
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">3</span>
                <h2 className="leading-[150%] font-light text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">How we act</h2>
            </motion.a>
            <div className="min-h-[calc(100vh-222px)] top-[222px] mb-[-250px] sticky bg-inherit flex flex-col  ">
                <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px]">
                    <div className="basis-[37.5%] max-w-[37.5%] px-[20px] flex-grow-0 flex-shrink-0 ml-[4.1666666667%]">
                        <img src={howwereact} alt="" className="rounded-[20px] w-full block h-auto object-cover aspect-[47/50]" />
                    </div>
                    <div className='px-[20px] basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                        <h3 className='leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>Listening and learning</h3>
                        <p className='leading-[150%] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>We’re not just shaping the future of audio. We want to help shape a better future for society and the planet too. Bit by bit. Day by day.</p>
                        <a href="" className=' bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                            See our approach
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Cards