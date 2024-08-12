interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  loading?: "lazy" | "eager";
  width?: number;
  height?: number;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  loading = "lazy",
  width,
  height,
}) => {
  return (
    <img
      src={src}
      alt={alt || "Awal-solution-images"}
      width={width}
      height={height}
      className={className}
      loading={loading}
    />
  );
};
