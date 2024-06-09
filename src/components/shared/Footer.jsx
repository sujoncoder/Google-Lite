import CountryLookUp from "./CountryLookUp";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-slate-50 p-4 w-full">
      <CountryLookUp />

      <div className="flex items-center justify-between pt-4">
        <ul className="flex space-x-4 items-center">
          <li className="text-slate-500">About</li>
          <li className="text-slate-500">Advertising</li>
          <li className="text-slate-500">Business</li>
        </ul>

        <ul>
          <li className="text-slate-500">How Search works</li>
        </ul>

        <ul className="flex space-x-4 items-center">
          <li className="text-slate-500">Privacy</li>
          <li className="text-slate-500">Term</li>
          <li className="text-slate-500">Setting</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
