import Image from "next/image";

export default function Logo({
  className = "",
  size = "default",
}: {
  className?: string;
  size?: "default" | "small";
}) {
  const h = size === "small" ? 28 : 36;
  const w = Math.round(h * 5.2);

  return (
    <div className={className}>
      <Image
        src="/logo.png"
        alt="CodeNax"
        width={w}
        height={h}
        priority
        className="h-auto"
        style={{ width: "auto", height: h }}
      />
    </div>
  );
}
