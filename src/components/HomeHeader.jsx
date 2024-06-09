import Link from "next/link";
import { CgMenuGridR } from "react-icons/cg";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-4">
      <div className="flex space-x-4 items-center">
        <Link
          className="tex-md text-slate-500 hover:underline duration-300"
          href="https://mail.google.com/mail/u/0/"
        >
          Gmail
        </Link>
        <Link
          className="tex-md text-slate-500"
          href="https://images.google.com/"
        >
          Images
        </Link>
        <CgMenuGridR className="w-10 h-10 bg-transparent text-slate-500 hover:bg-slate-200 rounded-full p-2 duration-300" />
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md hover:brightness-110 hover:shadow active:bg-blue-600 duration-300">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
