import { useState, useEffect } from "react";
import Navbar from "@/components/templates/Navbar";
import TopBar from "@/components/templates/TopBar";
import FullScreenLoader from "@/components/organisms/FullScreenLoader";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { getUser, selectUser } from "./auth/store/userSlice";

export default function App({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  useEffect(() => {
    dispatch(getUser(12));
  }, []);

  const closeMenu = () => setIsOpen(false);

  if (user.loading !== "loaded") return <FullScreenLoader />;

  return (
    <div className="flex min-h-screen relative overflow-x-hidden">
      {isOpen && (
        <div
          className=" fixed md:static inset-0 bg-gray-100 opacity-50 md:bg-none md:opacity-0 z-40"
          onClick={closeMenu}
        />
      )}

      <Navbar isOpen={isOpen} />
      <div className="flex-1 flex flex-col transition-all duration-300 ">
        <TopBar toggleMenu={() => setIsOpen(!isOpen)} />
        <main className="p-4 flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
