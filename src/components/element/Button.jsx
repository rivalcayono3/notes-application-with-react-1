function Button({ title, onClick, type = "submit", ...props }) {
  return (
    <button type={type} onClick={onClick} className={"border border-[#A35709] rounded-md py-1 px-2 font-semibold"}>
      {title}
    </button>
  );
}

export default Button;
