"use client";
import { Maximize2, Minus, X } from "lucide-react";
import React, { useState } from "react";
import { Rnd } from "react-rnd";

type Props = {
  windowTitle: string;
  isFinder: boolean;
  appId: number;
  width;
  height;
};

const AppWindow = ({
  isFinder = false,
  windowTitle,
  appId,
  height,
  width,
}: Props) => {
  const [size, setSize] = useState({ width: height, height: width });
  const [position, setpPosition] = useState({ x: 0, y: 0 });

  return (
    <Rnd
      size={size}
      position={position}
      onDragStop={(e, d) => {
        setpPosition({ x: d.x, y: d.y });
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        });
        setpPosition(position);
      }}
      className="min-w-[400px] min-h-[100px] bg-white rounded-xl shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(0,0,0,0.2)]"
    >
      <div className="bg-[#F6F6F6] w-full flex items-center rounded-t-lg p-2 relative">
        <span className="absolute left-[50%] transform translate-x-[-50%] font-medium text-sm">
          {windowTitle} (Active)
        </span>

        <div className="flex items-center gap-2">
          <button className="w-5 h-5 flex items-center justify-center rounded-full bg-systemPink border border-black/10 group">
            <X
              onClick={(e) => e.stopPropagation()}
              size={12}
              className="opacity-25 group-hover:opacity-100 ease-in-out transition-all duration-500"
            />
          </button>
          <button className="w-5 h-5 flex items-center justify-center rounded-full bg-systemOrange border border-black/10 group">
            <Minus
              onClick={(e) => e.stopPropagation()}
              size={12}
              className="opacity-25 group-hover:opacity-100 ease-in-out transition-all duration-500"
            />
          </button>
          <button className="w-5 h-5 flex items-center justify-center rounded-full bg-systemGreen border border-black/10 group">
            <Maximize2
              onClick={(e) => e.stopPropagation()}
              size={12}
              className="opacity-25 group-hover:opacity-100 ease-in-out transition-all duration-500"
            />
          </button>
        </div>
      </div>
    </Rnd>
  );
};

export default AppWindow;
