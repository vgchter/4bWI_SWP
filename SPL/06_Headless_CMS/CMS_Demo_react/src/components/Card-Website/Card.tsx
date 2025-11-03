type Props = { name: string; title: string; imageUri: string };

export default function Card({ name, title, imageUri }: Props) {
  return (
    <div
      className="bg-slate-100 rounded-lg shadow-md overflow-hidden h-full"
      style={{ fontFamily: "JetBrain Mono, monospace" }}
    >
      <img src={imageUri} alt={name} className="w-full object-cover" />
      <div className="p-3">
        <h2 className="font-bold text-sm mb-1">{name}</h2>
        <p className="text-xs text-gray-700 leading-tight">{title}</p>
      </div>
    </div>
  );
}
