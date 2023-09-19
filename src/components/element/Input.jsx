function Input({ placeholder, value, name, type, onChange, maxLength, ...props }) {
  return (
    <input
      type={type}
      name={name}
      id="search"
      placeholder={placeholder}
      onChange={onChange}
      maxLength={maxLength}
      className="px-3 py-2 rounded-lg min-w-[400px] bg-[#1F1E1B] border border-[#A35709] focus:ring-[#FF8303] text-white focus:ring-2 outline-none placeholder:text-[#F0E3CA]"
    />
  );
}

export default Input;
