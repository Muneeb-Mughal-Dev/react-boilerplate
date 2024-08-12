interface MarqueeProps extends Children {
  diraction?: "left" | "right";
}

export const Marquee: React.FC<MarqueeProps> = ({
  children,
  diraction = "left",
}) => {
  return (
    <div className="marquee" data-direction={diraction}>
      <div className="marquee_inner">{children}</div>
    </div>
  );
};
