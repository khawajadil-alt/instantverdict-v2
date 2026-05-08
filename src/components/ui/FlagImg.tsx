interface FlagImgProps {
  code: string;
  size?: number;
  className?: string;
}

export default function FlagImg({ code, size = 24, className }: FlagImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      alt={code}
      width={size}
      height={size * 0.75}
      className={className}
      style={{ objectFit: "cover", borderRadius: 3, display: "inline-block", flexShrink: 0 }}
    />
  );
}
