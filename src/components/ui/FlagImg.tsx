interface FlagImgProps {
  code: string;
  size?: number;
  className?: string;
  country?: string;
}

export default function FlagImg({ code, size = 24, className, country }: FlagImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://flagcdn.com/w40/${code.toLowerCase()}.png`}
      alt={country ? `${country} flag` : `${code} flag`}
      width={size}
      height={Math.round(size * 0.75)}
      className={className}
      style={{ objectFit: "cover", borderRadius: 3, display: "inline-block", flexShrink: 0 }}
      loading="lazy"
      decoding="async"
    />
  );
}
