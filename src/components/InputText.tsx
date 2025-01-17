export default function InputText({
  placeholder,
  onChange,
  value,
  focus,
}: {
  placeholder: string;
  onChange: any;
  value?: string;
  focus?: boolean;
}) {
  return (
    <input
      type="text"
      className="w-full h-8 px-3 py-1 text-sm border rounded-md shadow-sm  bg-zinc-950 border-zinc-800"
      value={value}
      placeholder={placeholder}
      autoFocus={focus}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
