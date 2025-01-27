import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import SliderCard from './SliderCard'
import { motion } from 'framer-motion'
import arrowDark from '../assets/icon-arrow-dark.svg'

const Slider = ({ position }) => {

    const [transformSlide, setTransfromSlide] = useState(0)
    const cards = [
        {
            branch: 'Sales',
            role: 'Growth Account Exective',
            speciality: '',
            location: 'Milan'
        },
        {
            branch: 'Engineering',
            role: 'Backend Engineer',
            speciality: 'Advertising',
            location: 'New York'
        },
        {
            branch: 'Content',
            role: 'Lead US Latin',
            speciality: 'Artist Partnership',
            location: 'Miami'
        },
        {
            branch: 'Data, Research & Insights',
            role: 'Junior Quantitative Developer',
            speciality: 'Forecasting',
            location: 'Stockholm'
        },
        {
            branch: 'Engineering',
            role: 'Senior Backend Engineer',
            speciality: '',
            location: 'New York'
        },


    ]
    const [cardWidth, setCardWidth] = useState(0)
    const cardsref = useRef(null)
    const [buttonClick, setButtonClick] = useState(false)
    const [current, setCurrent] = useState(1)


    const windowWidth = window.innerWidth
    // function viewPort() {
    // }

    useEffect(() => {
        // console.log(cardsref.current.getBoundingClientRect().width);
        const handleCard = () => {
            if (windowWidth >= 1300 && windowWidth < 1800) {
                setCardWidth(cardsref.current.getBoundingClientRect().width / 2.03)

            }
            else if (windowWidth >= 1800) {
                setCardWidth(cardsref.current.getBoundingClientRect().width / 2.5454)

            }
            else {
                setCardWidth(cardsref.current.getBoundingClientRect().width / 1.244)
            }
        }
        handleCard()
        window.addEventListener('resize', handleCard)
        return () => window.removeEventListener('resize', handleCard)
    }, [cardWidth])
    // console.log(cardWidth);
    useEffect(() => {

        const handle = () => {
            if (windowWidth >= 1300 && windowWidth < 1800) {

                setTransfromSlide(-cardWidth * 1.55)

            }
            else if (windowWidth >= 1800) {
                setTransfromSlide(-cardWidth * 1.289999)

            }
            else {

                setTransfromSlide(-cardWidth * 2.005)
            }

        }
        handle()
        window.addEventListener('resize', handle)

        return () => window, removeEventListener('resize', handle)
    }, [cardWidth])
    // console.log(window);

    // console.log(-cardWidth);
    // console.log(windowWidth);
    // console.log(current);
    // console.log(transformSlide);
    // console.log(transformSlide > -cardWidth * 2);

    useLayoutEffect(() => {
        const transitionEnd = () => {
            // if (current === 6) {
            //     setCurrent(0)
            // }
            if (current === 2) {
                cardsref.current.style.transitionDuration = '0ms'
                if (windowWidth >= 1300 && windowWidth < 1800) {
                    setTransfromSlide(-cardWidth * 2.58)

                }
                else if (windowWidth >= 1800) {
                    setTransfromSlide(-cardWidth * 2.319)
                } else {

                    setTransfromSlide(-cardWidth * 3.069)
                }
            }
            // console.log(-cardWidth * 4.845);

            if (current >= cards.length) {
                cardsref.current.style.transitionDuration = '0ms'
                if (windowWidth >= 1300 && windowWidth < 1800) {

                    setTransfromSlide(-cardWidth * 5.679)
                }
                else if (windowWidth >= 1800) {

                    setTransfromSlide(-cardWidth * 5.410)
                }
                else {

                    setTransfromSlide(-cardWidth * 6.262)
                }

            }
        }
        document.addEventListener('transitionend', transitionEnd)
        return () => document.removeEventListener('transitionend', transitionEnd)
    }, [current])


    const onLeftClick = () => {
        setButtonClick(true)
        setTimeout(() => {
            setButtonClick(false)
        }, 500);
        if (current <= 1) {
            setCurrent(cards.length)

        } else {
            setCurrent(prev => --prev)
        }
        setTransfromSlide(prev => prev + cardWidth + 20)

    }

    const onRightClick = () => {
        setButtonClick(true)
        setTimeout(() => {
            setButtonClick(false)
        }, 500);
        if (current >= cards.length) {
            setCurrent(1)
            // setTransfromSlide(-cardWidth * (2.78))
        } else {
            setCurrent(prev => ++prev)
        }

        if (windowWidth >= 1300 && windowWidth < 1800) {

            setTransfromSlide(prev => prev - cardWidth * 1.033)
        }
        else if (windowWidth >= 1800) {
            setTransfromSlide(prev => prev - cardWidth - 20)
        } else {

            setTransfromSlide(prev => prev - cardWidth - 20)
        }


    }

    const arrow = {
        hover: {
            backgroundImage: `url('/src/assets/icon-arrow-dark.svg')`,
            backgroundColor: '#fff',

        }
    }
    // const buttonVariants = {
    //     hover: {
    //     }
    // }
    let transition = buttonClick ? ('550ms') : ('0ms')

    return (
        <div className="min-h-screen py-[125px]">
            <div className="max-w-[1440px] mx-auto px-[60px] mb-[70px] w-full">
                <div className="px-[20px] ">
                    <h2 className={`${position >= 0.5 && position <= 0.8 ? 'text-[#fff]' : 'text-[#191414'} text-center text-[1.5rem] md:text-[calc(1.5rem+2*(100vw-48rem)/42)] tracking-[-.02em] m-0 p-0 font-normal `}>Featured jobs</h2>
                </div>
            </div>
            <div className="px-[20px] sm:px-[60px] mx-auto relative overflow-hidden z-[1] ">
                <motion.div ref={cardsref} style={{ x: transformSlide, transitionDuration: transition }} className="z-[1] relative w-full h-full flex  ">
                    <SliderCard width={cardWidth} indexed={3} current={current} branch={cards[3].branch} role={cards[3].role} speciality={cards[3].speciality} location={cards[3].location} />
                    <SliderCard width={cardWidth} indexed={4} current={current} branch={cards[4].branch} role={cards[4].role} speciality={cards[4].speciality} location={cards[4].location} />

                    {cards.map((card, index) => (
                        <SliderCard key={index} indexed={index} current={current} width={cardWidth} branch={card.branch} role={card.role} speciality={card.speciality} location={card.location} />
                    ))}
                    <SliderCard width={cardWidth} indexed={0} current={current} branch={cards[0].branch} role={cards[0].role} speciality={cards[0].speciality} location={cards[0].location} />
                    <SliderCard width={cardWidth} indexed={1} current={current} branch={cards[1].branch} role={cards[1].role} speciality={cards[1].speciality} location={cards[1].location} />

                </motion.div>
                <motion.div whileHover='hover' className='absolute top-[50%] translate-y-[-50%] z-[2] left-[calc(50%-366.5px)] tablet:hidden '>
                    <motion.button style={buttonClick ? { opacity: 0, transitionDuration: '.2s' } : { opacity: 1 }} className={`transition-[background-color] duration-[.2s] border-solid border-[1px] border-[#fff] bg-[url('./assets/icon-arrow-light.svg')]  bg-transparent   scale-x-[-1] rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0  `} variants={arrow} onClick={() => onLeftClick()}>
                    </motion.button>
                </motion.div>
                <motion.div whileHover='hover' className='absolute top-[50%] translate-y-[-50%] z-[2] left-auto right-[calc(50%-366.5px)] tablet:hidden '>
                    <motion.button style={buttonClick ? { opacity: 0 } : { opacity: 1 }} className={`  border-solid border-[1px] duration-[.2s] border-[#fff] bg-[url('./assets/icon-arrow-light.svg')] bg-transparent transition-colors   rounded-[50%] w-[60px] h-[60px] bg-no-repeat bg-[50%] leading-[1.15] m-0 `} variants={arrow} onClick={() => onRightClick()}>
                    </motion.button>
                </motion.div>
            </div>
            <div className='tablet:block hidden mt-[40px] py-0 px-5  max-w-[1440px] mx-auto w-full'>
                <div className='flex mx-[-20px] '>
                    <div className='px-[20px] basis-[25%] max-w-[25%] flex-grow-0 flex-shrink-0'>
                        <motion.button style={buttonClick ? { opacity: 0, transitionDuration: '.2s' } : { opacity: 1 }} className={`transition-[background-color] duration-[.2s] border-solid border-[1px] border-[#fff] bg-[url('./assets/icon-arrow-light.svg')]  bg-transparent   scale-x-[-1] rounded-[50%] w-[60px] h-[60px] tablet:bg-[size:45%] tablet:w-[40px] tablet:h-[40px] bg-no-repeat bg-[50%] leading-[1.15] m-0  `} variants={arrow} onClick={() => onLeftClick()}>
                        </motion.button>
                    </div>
                    <div className='flex-grow-0 flex-shrink-0 px-[20px] basis-[50%] max-w-[50%] self-center text-center'>
                        <p className='text-[#fff] transition-colors duration-[.4s] text-[.875rem] font-normal m-0'>
                            {current} of 5
                        </p>
                    </div>
                    <div className='px-[20px] basis-[25%] max-w-[25%] flex-grow-0 flex-shrink-0 flex justify-end'>
                        <motion.button style={buttonClick ? { opacity: 0 } : { opacity: 1 }} className={`  border-solid border-[1px] duration-[.2s] border-[#fff] bg-[url('./assets/icon-arrow-light.svg')] bg-transparent transition-colors   rounded-[50%] w-[60px] h-[60px] tablet:bg-[size:45%] tablet:w-[40px] tablet:h-[40px] bg-no-repeat bg-[50%] leading-[1.15] m-0 `} variants={arrow} onClick={() => onRightClick()}>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider