import "./test.css";

// import { useTransition, animated, useTrail } from "react-spring";

// function MyComponent() {
//   const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
//   const trail = useTrail(items.length, {
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     config: { delay: 250, duration: 500 },
//   });
//   return (
//     <>
//       <div>
//         {trail.map(({ opacity }, index) => (
//           <animated.div className="testerer" style={{ opacity }} key={index}>
//             {items[index]}
//           </animated.div>
//         ))}
//       </div>
//     </>
//   );
// }

// import { useSpring, animated } from "react-spring";

// function MyComponent() {
//   const paddingProps = useSpring({ padding: "0px", from: { padding: "20px" } });
//   return <animated.div className="testerer" style={paddingProps}>Hello!</animated.div>;
// }

// className="testerer"

import React from "react";
import { useSprings, animated } from "react-spring";

const items = [1, 2, 3, 4, 5, 6];
const itemsConfig = { mass: 5, tension: 2000, friction: 200 };
const columnsConfig = { mass: 1, tension: 500, friction: 30 };

const MyComponent = () => {
  const [grid, setGrid] = React.useState([]);
  const [columns, setColumns] = React.useState(3);
  const springs = useSprings(
    grid.length,
    items.map((item, index) => ({
      config: itemsConfig,
      xy: [0, 0],
      immediate: true,
      onFrame: ({ xy }) => {
        if (!grid[index]) {
          setGrid((prev) => [...prev, xy]);
        }
      },
    }))
  );

  return (
    <div className="testerer">
      
    </div>
  );
};

export default MyComponent;
{/* <button onClick={() => setColumns(columns + 1)}> Add Columns</button>
      <div className="grid">
        {grid.map(([x, y], index) => (
          <animated.div
            key={items[index]}
            className="grid-item"
            style={{
              transform: springs[index].xy.interpolate(
                (x, y) => `translate3d(${x}%, ${y}%, 0)`
              ),
            }}
          >
            {items[index]}
          </animated.div>
        ))}
      </div> */}