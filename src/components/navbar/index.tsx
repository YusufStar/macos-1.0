import AppleMiniLogo from "@/icons/apple-logo";
import {
  FullBateryIcon,
  MagnifyGlassIcon,
  SwitchIcon,
  WifiIcon,
} from "@/icons/icons";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeMenuPath, setActiveMenuPath] = useState<string[]>([]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (!target.className?.includes("menu")) {
        setOpen(false);
        setActiveMenuPath([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Animasyon ayarları
  const menuAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { type: "spring", stiffness: 250, damping: 20 },
  };

  const renderMenuItems = (items: any[], path: string[]) => {
    return items.map((item, index) => {
      const currentPath = [...path, item.title].join("/");
      const isLastItem = index === items.length - 1; // Son öğeyi kontrol et

      return (
        <div key={index}>
          <motion.div
            className={`w-full menu text-black ${
              isLastItem ? "border-b-0" : "border-b-2"
            } pb-2 text-[13px] border-[#3C3C43]/10`} // Son öğe için border-b-0 ekle
            onClick={(e) => {
              if (item.menu) {
                if (activeMenuPath.includes(currentPath)) {
                  setActiveMenuPath((prev) =>
                    prev.filter((path) => path !== currentPath)
                  );
                } else {
                  setActiveMenuPath((prev) => [...prev, currentPath]);
                }
              }
            }}
          >
            {item.title}
          </motion.div>

          <AnimatePresence key={item.title}>
            {item.menu && activeMenuPath.includes(currentPath) && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuAnimation}
                className="absolute menu max-w-56 ml-2 w-screen left-full top-0 bg-white/60 backdrop-blur-md border border-black/10 z-10 p-2.5 drop-shadow-sm flex flex-col gap-2.5 rounded-md"
              >
                {renderMenuItems(item.menu, [...path, item.title])}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
  };

  const menuItems: {
    title: string;
    menu: boolean | object[];
    appId?: number;
  }[] = [
    {
      title: "Finder",
      menu: false,
      appId: 1,
    },
    {
      title: "Edit",
      menu: false,
    },
    {
      title: "View",
      menu: false,
    },
    {
      title: "Go",
      menu: false,
    },
    {
      title: "Window",
      menu: [
        {
          title: "Edit 1",
          menu: false,
        },
        {
          title: "Edit 2",
          menu: false,
        },
        {
          title: "Edit 3",
          menu: [
            {
              title: "Edit 3.1",
              menu: false,
            },
            {
              title: "Edit 3.2",
              menu: false,
            },
          ],
        },
      ],
    },
    {
      title: "Help",
      menu: false,
    },
  ];

  const apps: number[] = [1];

  return (
    <div className="w-full shadow-sm py-1 shadow-[#8F8F8F]/10 flex items-center justify-between px-4 backdrop-blur-lg bg-white/20">
      <div className="flex items-center h-full">
        <div
          onClick={(e) => {
            setOpen(!open);
          }}
          className={`relative menu px-[12px] py-[2px] transition-all rounded duration-200 ease-in-out ${
            open ? "bg-white/20" : "bg-white/0 hover:bg-white/10"
          }`}
        >
          <AppleMiniLogo />

          <AnimatePresence>
            {open && (
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuAnimation}
                className="absolute menu max-w-56 mt-2 w-screen left-0 top-full bg-white/60 backdrop-blur-md border border-black/10 z-10 p-2.5 drop-shadow-sm flex flex-col gap-2.5 rounded-md"
              >
                <motion.div className="w-full border-b-2 pb-2 text-[13px] border-[#3C3C43]/10">
                  About This Mac
                </motion.div>

                <motion.div className="w-full flex flex-col gap-1 border-b-2 pb-2 text-[13px] border-[#3C3C43]/10">
                  <span>System Preferences...</span>
                  <span>App Store...</span>
                </motion.div>

                <motion.div className="w-full border-b-2 pb-2 text-[13px] border-[#3C3C43]/10">
                  Force Quit Finder
                </motion.div>

                <motion.div className="w-full flex flex-col gap-1 border-b-2 pb-2 text-[13px] border-[#3C3C43]/10">
                  <span>Sleep...</span>
                  <span>Restart...</span>
                  <span>Shut Down...</span>
                </motion.div>

                <motion.div className="w-full flex flex-col gap-1 pb-2 text-[13px]">
                  <span>Lock Screen...</span>
                  <span>Log Out Big Sur...</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {menuItems.map((menu, index) => {
          if (!menu?.menu)
            return (
              <span
                key={index}
                className={`${
                  menu.appId && apps.includes(menu?.appId)
                    ? "font-medium"
                    : "font-normal"
                } text-sm text-white cursor-pointer hover:bg-white/20 px-3 py-1 rounded-md`}
              >
                {menu.title}
              </span>
            );

          if (menu?.menu)
            return (
              <div key={index} className="relative text-sm text-white">
                <span
                  className="cursor-pointer menu hover:bg-white/20 px-3 py-1 rounded-md"
                  onClick={(e) => {
                    const currentPath = menu.title;
                    if (activeMenuPath.includes(currentPath)) {
                      setActiveMenuPath((prev) =>
                        prev.filter((path) => path !== currentPath)
                      );
                    } else {
                      setActiveMenuPath([currentPath]);
                    }
                  }}
                >
                  {menu.title}
                </span>

                <AnimatePresence>
                  {activeMenuPath.includes(menu.title) && (
                    <motion.div
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={menuAnimation}
                      className="absolute menu max-w-56 mt-2.5 w-screen left-0 top-full bg-white/60 backdrop-blur-md border border-black/10 z-10 p-2.5 drop-shadow-sm flex flex-col gap-2.5 rounded-md"
                    >
                      {renderMenuItems(menu.menu as object[], [menu.title])}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
        })}
      </div>

      <div className="flex items-center h-full gap-1">
        <FullBateryIcon />
        <SwitchIcon />
        <MagnifyGlassIcon />
        <WifiIcon />
        <span className="text-sm text-white mr-3">Mon Jun 22</span>
        <span className="text-sm text-white">9:41 AM</span>
      </div>
    </div>
  );
};

export default Navbar;
