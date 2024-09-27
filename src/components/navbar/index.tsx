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
  const menuRef = useRef<HTMLDivElement | null>(null);
  const appleLogoRef = useRef<HTMLDivElement | null>(null);

  // Menü dışında tıklamayı algılamak için useEffect kullanıyoruz
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        appleLogoRef.current &&
        !appleLogoRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    // Tıklama olaylarını dinle
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup: component unmount olduğunda event listener'ı kaldır
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Yeni animasyon ayarları
  const menuAnimation = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { type: "spring", stiffness: 250, damping: 20 },
  };

  return (
    <div className="w-full shadow-sm py-1 shadow-[#8F8F8F]/10 flex items-center justify-between px-4 backdrop-blur-lg bg-white/20">
      <div className="flex items-center h-full gap-4">
        <div
          ref={appleLogoRef}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className={`relative px-[12px] py-[2px] transition-all rounded duration-200 ease-in-out ${
            open ? "bg-white/20" : "bg-white/0 hover:bg-white/10"
          }`}
        >
          <AppleMiniLogo />

          <AnimatePresence>
            {open && (
              <motion.div
                ref={menuRef}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={menuAnimation}
                className="absolute max-w-56 mt-2 w-screen left-0 top-full bg-white/60 backdrop-blur-md border border-black/10 z-10 p-2.5 drop-shadow-sm flex flex-col gap-2.5 rounded-md"
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

        <span className="text-sm font-medium text-white ml-1">Finder</span>
        <span className="text-sm text-white">File</span>
        <span className="text-sm text-white">Edit</span>
        <span className="text-sm text-white">View</span>
        <span className="text-sm text-white">Go</span>
        <span className="text-sm text-white">Window</span>
        <span className="text-sm text-white">Help</span>
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
