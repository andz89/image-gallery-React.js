const Input = ({ onSubmit, initValue, onChange }) => {
  return (
    <form onSubmit={onSubmit} className="">
      <input
        type="text"
        className=" text-gray-500 rounded px-3 py-1 bg-gray-900 w-[50px]  text-center focus:outline-none  focus:border-1  focus:border-slate-700"
        value={initValue}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
};

export default Input;
