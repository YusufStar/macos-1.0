"use client";

import { useState } from "react";
import { Rnd } from "react-rnd";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 300, height: 200 });

  return (
    <div className="h-screen">
      <Rnd
        size={size}
        position={position}
        onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
        onResize={(_e, _direction, ref, _delta, pos) => {
          setPosition(pos);
          setSize({
            width: ref.offsetWidth,
            height: ref.offsetHeight,
          });
        }}
        className="w-20 h-20 bg-black text-white"
      >
        test
      </Rnd>
    </div>
  );
}
