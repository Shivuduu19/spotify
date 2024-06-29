import { useRef, useState } from "react"
import Cards from "./components/Cards"
import { LayoutGroup, useMotionValueEvent, useScroll } from "framer-motion"
import Slider from "./components/Slider"



function App() {
  const mainref = useRef(null)
  const [position, setPosition] = useState(0)

  const { scrollYProgress } = useScroll({
    target: mainref,
    offset: ['start start', 'end end']
  })

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {

    setPosition(latest)

  })
  // console.log(position);
  return (

    <>
      <main ref={mainref} style={position >= 0.5 && position <= 0.8 ? { backgroundColor: '#2d46b9', opacity: 1, transition: 'background-color .45s' } : { backgroundColor: '#fff' }} className="">

        <div className="h-[70vh]  relative"></div>
        <Cards position={position} />
        <Slider position={position} />
        <div className="h-[150vh]  relative"></div>
      </main>
    </>

  )
}

export default App
