import { useState } from "react";
import KitchenImage from "../assets/kitchen-comparison.jpg";
import Icons from "./common/Icons";

const BeforeAfter = () => {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl select-none">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={KitchenImage}
          alt="Kitchen before"
          draggable="false"
          className="absolute left-0 top-0 h-full w-[200%] max-w-none object-fill"
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden"
        style={{
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <img
          src={KitchenImage}
          alt="Kitchen after"
          draggable="false"
          className="absolute top-0 h-full w-[200%] max-w-none object-fill"
          style={{ left: "-100%" }}
        />
      </div>

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          zIndex: 10,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
        }}
      >
        <span className="absolute left-6 top-6 rounded-full bg-white px-5 max-w-24 w-full py-2 font-medium leading-160 text-black text-lg">
          Before
        </span>
      </div>

      <div
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{
          zIndex: 10,
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <span className="absolute left-[54%] top-6 rounded-full bg-white px-5 max-w-20.75 w-full py-2 font-medium leading-160 text-black text-lg">
          After
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        style={{ zIndex: 30 }}
        className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
      />

      <div
        style={{ left: `${position}%`, zIndex: 40 }}
        className="absolute bottom-0 top-0 w-1 bg-white pointer-events-none"
      >
        <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black shadow-md">
          <Icons icon="arrows" />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
