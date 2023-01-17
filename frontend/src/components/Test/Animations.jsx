// Button click effect

// const variants = {
//     pressed: { scale: 0.95 },
//     normal: { scale: 1 },
//   };
{
  /* <motion.button
          variants={variants}
          whileTap="pressed"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          Click me
</motion.button> */
}

// Paralax Fade In

{
  /* <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ staggerChildren: 0.2, duration: 1 }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <motion.div key="1">1</motion.div>
              <motion.div key="2">2</motion.div>
              <motion.div key="3">3</motion.div>
            </Grid>
            <Grid item xs={6}>
              <motion.div key="1">1</motion.div>
              <motion.div key="2">2</motion.div>
              <motion.div key="3">3</motion.div>
            </Grid>
          </Grid>
        </motion.div> */
}

// blur

// <motion.div whileHover={{ filter: "blur(1px)" }}>
//           Tits
//         </motion.div>

import { useState, useRef, useEffect } from "react";
import {
  useViewportScroll,
  useScroll,
  useMotionValue,
  useTransform,
  useCycle,
  motion,
  useAnimation,
  AnimateSharedLayout,
  AnimatePresence,
} from "framer-motion";
import "./test.css";
import { Grid } from "@material-ui/core";
import Sidebar from "./Sidebar";
import HeroGrid from "./StatsGrid/StatsGrid";
import BetterTestimonials from "./BetterTestimonials/BetterTestimonials";

export function TypingEffect({ text, duration }) {
  const animation = useAnimation();

  useEffect(() => {
    animation.start("typing");
  }, []);

  return (
    <motion.div
      animate={animation}
      initial={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="clown-ass"
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: duration, delay: index * duration }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
}

export const NumberCounter = ({ end, seconds }) => {
  const [final, setfinal] = useState(end - 1);
  const [count, setCount] = useState(1);
  const duration = 1000 * seconds;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => {
        if (count === final) {
          clearInterval(intervalId);
        }
        return count + 1;
      });
    }, duration / (final - count));
    return () => clearInterval(intervalId);
  }, [final]);

  return <div>{count}</div>;
};

export default function MyAdvancedAnimations() {
  const text = "Suck my cock";
  return (
    <>
      <div className="yar-container">
        <div className="flexer">
          <div className="testerer">
            <BetterTestimonials />
            <HeroGrid />
            <AnimateSharedLayout>
              <TypingEffect text={text} />
              <TypingEffect text="Eat my ass" />
              <TypingEffect text="Lick my taint" />
              <TypingEffect text="Churdle my balls" />
              <TypingEffect text="Spit on my hog" />
              <TypingEffect text="Cream my corn" />
              <TypingEffect text="Salt my taters" />
              <TypingEffect text="Out of ideas" />
              <div className="numchange">
                <NumberCounter end={100} />
              </div>
            </AnimateSharedLayout>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <motion.div
          whileHover={{ rotateY: 180, transition: { duration: 1 } }}
          transformStyle="preserve-3d"
        >
          <p>Hover over me</p>
        </motion.div>
        <motion.div
          animate={controls}
          onClick={() => {
            controls.start({ rotateY: isRotating ? 0 : 360 });
            setIsRotating(!isRotating);
          }}
          transition={{ duration: 1 }}
          transformStyle="preserve-3d"
        >
          <p>Click me</p>
        </motion.div>

        <motion.div
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ x: [0, 100, 0] }}
            transition={{ duration: 1 }}
            staggerChildren={0.2}
          >
            <motion.div>
              <p>Child 1</p>
            </motion.div>
            <motion.div>
              <p>Child 2</p>
            </motion.div>
            <motion.div>
              <p>Child 3</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={controls}
          onMouseMove={(event) => x.set(event.clientX)}
        >
          <p>Move your mouse</p>
        </motion.div>

        <motion.path
          d="M20,380 C20,380 150,20 150,20"
          variants={variants}
          animate="end"
          transition={{ duration: 1, ease: "easeInOut" }}
        />

        <motion.div animate={controls} onClick={() => cycle()}>
          <img src={images[index]} alt="" />
        </motion.div>
        <button onClick={() => cycle()}>Next</button>
        <AnimatePresence>
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>{item.text}</p>
            </motion.div>
          ))}
        </AnimatePresence>

        <motion.div
          animate={{ width: isOpen ? 200 : 100 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <p>Click me</p>
        </motion.div>

        <motion.div
          animate={controls}
          onClick={() => {
            controls.start({
              width: isOpen ? 100 : 200,
              height: isOpen ? 100 : 200,
            });
            setIsOpen(!isOpen);
          }}
        >
          <p>Click me</p>
        </motion.div>

        <motion.div ref={ref} animate={controls} style={{ y: 100, opacity: 0 }}>
          <p>
            I will slide in from the bottom when I become visible in the
            viewport
          </p>
        </motion.div>
      </AnimateSharedLayout> */
}
