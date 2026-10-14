type InputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};
export default function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
