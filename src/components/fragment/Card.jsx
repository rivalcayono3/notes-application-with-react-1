import Button from "../element/Button";

function Card({ judul, time, content, onClick, children, ...props }) {
  return (
    <div className="flex flex-col justify-between p-3 overflow-hidden text-white border border-white rounded-lg">
      <div>
        <h2 className="text-xl font-semibold">{judul}</h2>
        <span className="text-sm text-gray-400">{time}</span>
        <p className="leading-5 tracking-tighter">{content}</p>
      </div>
      <div className="flex gap-3 mt-4">{children}</div>
    </div>
  );
}

export default Card;
