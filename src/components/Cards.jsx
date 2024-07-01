import nosolo from '../assets/WhoWeAre-b-940.jpg'
import wherewebelong from '../assets/WhereWeBelong-b-940.jpg'
import howwereact from '../assets/HowWeAct-c-940.jpg'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { useState } from 'react'

const Cards = ({ mainref }) => {
    const [position, setPosition] = useState(0)
    const [scrollstop, setScrollStop] = useState(0)
    const [upperDivHei, setUpperdivHei] = useState(0)
    const [thirdDivhei, setThirdDivhei] = useState(0)
    const [firstLinkhei, setFirstLinkhei] = useState(0)
    const sectionref = useRef(null)
    const firstLink = useRef(null)
    const thirdDiv = useRef(null)

    const [viewport, setViewport] = useState('');


    // useEffect(() => {
    //     // console.log(thirdDiv.current.getBoundingClientRect());
    // }, [])

    const { scrollY, scrollYProgress } = useScroll({
        target: sectionref,
        offset: ['start start', 'end end']
    })

    useEffect(() => {
        const transfor = () => {
            setViewport(getWindowDimensions())
            setUpperdivHei(mainref.current.children[0].getBoundingClientRect().height)
            setThirdDivhei(thirdDiv.current.getBoundingClientRect().height)
            setFirstLinkhei(firstLink.current.getBoundingClientRect().height)
            // console.log(firstLink.current.getBoundingClientRect());
        }
        transfor()
        window.addEventListener('resize', transfor)
        return () => window.removeEventListener('resize', transfor)

    }, [])

    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        setPosition(latest)
        if (latest === 1) {

            // console.log(latest);
            setScrollStop(scrollY.get())
        }
        // console.log(scrollY.get());
    })
    // console.log(scrollstop);
    // console.log(thirdDivTop);
    // console.log(height);


    const resolVariants1 = {

        desktop1: {
            y: scrollstop - upperDivHei,

        }
    }

    const resolVariants2 = {

        desktop1: {
            y: scrollstop - upperDivHei - 2 * 76 - thirdDivhei,

        }
    }

    const resolVariants3 = {



        desktop1: {
            y: scrollstop - upperDivHei - 2 * thirdDivhei - 295,

        }
    }

    function getWindowDimensions() {
        const { innerWidth: width, } = window;
        console.log(innerWidth);
        // Add logic to categorize width for mobile, tablet, and desktop based on your needs
        return width <= 768 ? 'mobile' : width <= 1024 ? 'tablet1' : 'desktop1';
    }
    console.log(viewport);
    // console.log(position);
    return (
        <section ref={sectionref} className=" rounded-tl-[20px] bg-inherit relative tablet:mb-[40px] tablet:rounded-tl-[15px] tablet:rounded-tr-[15px]  rounded-tr-[20px] z-[1] pb-[228px]">
            <motion.a ref={firstLink} style={position < 1 ? { position: 'sticky', } : { position: 'relative', }} transition={{ duration: 0, type: "tween" }} animate={position < 1 ? '' : viewport} variants={resolVariants1} href="" className={`mt-0 tablet:px-5 z-[1] top-0  bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[152px] `}>
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">1</span>
                <h2 className="leading-[150%] font-light mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">Who we are</h2>
            </motion.a>
            <div style={{ minHeight: `calc(-${firstLinkhei * 3}px + 100vh)`, top: `${firstLinkhei}px`, marginBottom: `${-firstLinkhei}px`, maxHeight: `${viewport === 'tablet1' | viewport === 'mobile' ? `calc(-${firstLinkhei * 3}px + 100vh)` : ''}` }} className={` bg-inherit sticky flex flex-col  rounded-tl-[15px] rounded-tr-[15px]  `}>
                <div className=" max-w-[1440px] mx-auto px-[60px] w-full tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:py-0 tablet:px-[20px]">

                    <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px] tablet:flex tablet:flex-col tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:flex-nowrap tablet:pt-0 tablet:pb-[30px] ">
                        <div className=" tablet:flex-1 tablet:w-full tablet:max-w-full  tablet:max-h-[400px] tablet:min-h-[188px] basis-[37.5%] max-w-[37.5%] px-[20px] flex flex-col flex-grow-0 flex-shrink-0 ml-[4.1666666667%] tablet:ml-0">
                            <img src={nosolo} alt="" className="tablet:h-full tablet:flex-grow tablet:flex-shrink tablet:basis-[100%] tablet:rounded-[15px] rounded-[20px] w-full block h-auto  object-cover tablet:aspect-[unset] aspect-[47/50]" />
                        </div>
                        <div className=' px-[20px] tablet:flex-auto tablet:px-[20px] tablet:basis-[100%] tablet:max-w-[100%] tablet:ml-0 basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                            <h3 className='tablet:mt-[30px]  tablet:text-[1.375rem]  tablet:mb-[10px]  leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>One band, no solo artists</h3>
                            <p className='leading-[150%] mobile:text-[1rem] tablet:mt-[10px] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>It’s our culture. It’s our values. It’s who we are and what we’re not. It’s why we do things the way we do and why that matters.</p>
                            <a href="" className=' mobile:text-[.875rem] tablet:mt-[20px] bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                                Read our manifesto
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <motion.a style={position < 1 ? { position: 'sticky', } : { position: 'relative', }} transition={{ duration: 0, type: "tween" }} animate={position < 1 ? '' : viewport} variants={resolVariants2} href="" className="mt-[76px] tablet:px-5 sticky z-[1] top-[76px] bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[76px]">
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">2</span>
                <h2 className="leading-[150%] font-light mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">Where we belong</h2>
            </motion.a>
            <div style={{ minHeight: `calc(-${firstLinkhei * 3}px + 100vh)`, top: `${firstLinkhei * 2}px`, marginBottom: `${-firstLinkhei * 2}px` }} className={`  sticky bg-inherit flex flex-col  `}>
                <div className=" max-w-[1440px] mx-auto px-[60px] w-full tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:py-0 tablet:px-[20px]">

                    <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px] tablet:flex tablet:flex-col tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:flex-nowrap tablet:pt-0 tablet:pb-[30px]">
                        <div className="tablet:flex-1 tablet:w-full tablet:max-w-full  tablet:max-h-[400px] tablet:min-h-[188px] basis-[37.5%] max-w-[37.5%] px-[20px] flex-grow-0 flex-shrink-0 ml-[4.1666666667%] tablet:ml-0">
                            <img src={wherewebelong} alt="" className="tablet:h-full tablet:flex-grow tablet:flex-shrink tablet:basis-[100%] tablet:rounded-[15px] rounded-[20px] w-full block h-auto object-cover tablet:aspect-[unset] aspect-[47/50]" />
                        </div>
                        <div className='px-[20px] tablet:flex-auto tablet:px-[20px] tablet:basis-[100%] tablet:max-w-[100%] tablet:ml-0 basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                            <h3 className='tablet:mt-[30px]  tablet:text-[1.375rem]  tablet:mb-[10px]  leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>We all have parts to play</h3>
                            <p className='leading-[150%] mobile:text-[1rem] tablet:mt-[10px] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>We want you to feel like you belong here and can thrive here. No two creators or listeners are the same, so neither are we.</p>
                            <a href="" className='mobile:text-[.875rem] tablet:mt-[20px] bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                                Learn about belonging
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <motion.a href="" style={position < 1 ? { position: 'sticky', } : { position: 'relative', }} transition={{ duration: 0, type: "tween" }} animate={position < 1 ? '' : viewport} variants={resolVariants3} className="mt-[150px] tablet:px-5 sticky z-[1] top-[150px] bg-[#fff]  rounded-tl-[20px] py-[20px]  rounded-tr-[20px]  border-t-[1px] border-solid border-transparent border-l-[1px] border-r-[1px] flex bottom-[0px]">
                <span className="rounded-[100vw] mr-[.5em] leading-[150%] border-[1px] border-solid w-[1.5em] h-[1.5em] justify-center items-center text-center mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)] ml-[4.166666666667%] flex border-[#696666]">3</span>
                <h2 className="leading-[150%] font-light mobile:text-[.875rem] md:text-[calc(1.25rem+.25*(100vw-48rem)/42)]  m-0 p-0">How we act</h2>
            </motion.a>
            <div ref={thirdDiv} style={{ minHeight: `calc(-${firstLinkhei * 3}px + 100vh)`, top: `${firstLinkhei * 3}px`, marginBottom: `${-firstLinkhei * 3}px` }} className={`  sticky bg-inherit flex flex-col  `}>
                <div className=" max-w-[1440px] mx-auto px-[60px] w-full tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:py-0 tablet:px-[20px]">
                    <div className="flex items-center pt-[40px] pb-[70px] mx-[-20px] tablet:flex tablet:flex-col tablet:max-h-[inherit] tablet:min-h-[inherit] tablet:flex-nowrap tablet:pt-0 tablet:pb-[30px]">
                        <div className="tablet:flex-1 tablet:w-full tablet:max-w-full  tablet:max-h-[400px] tablet:min-h-[188px] basis-[37.5%] max-w-[37.5%] px-[20px] flex-grow-0 flex-shrink-0 ml-[4.1666666667%] tablet:ml-0">
                            <img src={howwereact} alt="" className="tablet:h-full tablet:flex-grow tablet:flex-shrink tablet:basis-[100%] tablet:rounded-[15px] rounded-[20px] w-full block h-auto object-cover tablet:aspect-[unset] aspect-[47/50]" />
                        </div>
                        <div className='px-[20px] tablet:flex-auto tablet:px-[20px] tablet:basis-[100%] tablet:max-w-[100%] tablet:ml-0 basis-[50%] max-w-[50%] flex-grow-0 flex-shrink-0 ml-[4.16666667%]'>
                            <h3 className='tablet:mt-[30px]  tablet:text-[1.375rem]  tablet:mb-[10px]  leading-[110%] text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] mb-[20px]  w-full font-normal m-0 p-0 '>Listening and learning</h3>
                            <p className='leading-[150%] mobile:text-[1rem] tablet:mt-[10px] text-[calc(1.25rem+.25*(100vw-48rem)/42)] mt-[20px] mb-0  '>We’re not just shaping the future of audio. We want to help shape a better future for society and the planet too. Bit by bit. Day by day.</p>
                            <a href="" className='mobile:text-[.875rem] tablet:mt-[20px] bg-[#191414] rounded-[100px] py-[19px] px-[30px] text-[#fff] inline-block cursor-pointer border-[1px] border-solid border-transparent font-normal text-[calc(1rem+.125*(100vw-48rem)/42)]  mt-[40px] '>
                                See our approach
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Cards