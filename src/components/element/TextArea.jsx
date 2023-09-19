function TextArea({ name, ...props }) {
  return <textarea rows="4" name={name} placeholder="Write your thoughts here..." className="px-3 py-2 rounded-lg w-full bg-[#1F1E1B] border border-[#A35709] focus:ring-[#FF8303] focus:ring-2 outline-none placeholder:text-[#F0E3CA]" />;
}

export default TextArea;
