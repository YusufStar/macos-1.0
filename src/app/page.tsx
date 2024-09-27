"use client";

import AppWindow from "@/components/app/app-window";
import Navbar from "@/components/navbar";

const apps: number[] = [1];

const appsData = [
  {
    width: 600,
    height: 400,
    windowTitle: "Finder",
    appId: 1,
  },
];

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background/light_1.jpg')",
        backgroundSize: "cover",
      }}
      className="h-screen max-w-full w-full"
    >
      <Navbar />

      {/* Render All Apps */}
      {appsData
        .filter((app) => apps.includes(app.appId))
        .map((app) => (
          <AppWindow
            key={app.appId}
            appId={app.appId}
            height={app.height}
            isFinder={true}
            width={app.width}
            windowTitle={app.windowTitle}
          />
        ))}
    </div>
  );
}
