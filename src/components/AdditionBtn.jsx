const AdditionBtn = () => {
  return (
    <div className="flex flex-col space-y-4 mt-8 sm:flex-row sm:space-y-0 sm:space-x-4">
      <button className="bg-slate-100 text-slate-500 rounded-md w-36 h-10 hover:bg-slate-200 duration-300">
        Google Search
      </button>
      <button className="bg-slate-100 text-slate-500 rounded-md w-36 h-10 hover:bg-slate-200 duration-300">
        I,m feeling lucky
      </button>
    </div>
  );
};

export default AdditionBtn;
