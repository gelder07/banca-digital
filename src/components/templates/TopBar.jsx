import { useAppSelector } from "@/store/hooks";
import GoogleIcon from "../atoms/icons/GoogleIcon";
import ImageCustomize from "../atoms/img/ImageCustomize";
import { selectUser } from "@/app/auth/store/userSlice";

export default function TopBar({ toggleMenu }) {
  const user = useAppSelector(selectUser);

  return (
    <header className="bg-white h-16 flex items-center justify-between px-4 shadow">
      {/* Botón Hamburguesa */}
      <button onClick={toggleMenu} className="p-2 hover:bg-gray-100 rounded-lg">
        <GoogleIcon icon="menu" size={24} />
      </button>

      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg relative">
          <GoogleIcon icon="notifications" size={24} />
          <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full px-1">
            3
          </span>
        </button>

        <input
          type="text"
          placeholder="Buscar..."
          className="border rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <ImageCustomize
          src={user.data.profile_photo || ""}
          alt="Perfil"
          width={40}
          height={40}
          className="rounded-lg  object-cover"
        />
      </div>
    </header>
  );
}
