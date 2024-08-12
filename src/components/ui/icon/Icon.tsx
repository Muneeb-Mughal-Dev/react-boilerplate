import { Image } from "@src/components/ui";
import { lazy, Suspense } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import loading from "@src/assets/icons/spinning-circles.svg";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense
      fallback={
        <div
          style={{
            width: props.size ?? 24,
            height: props.size ?? 24,
          }}
        >
          <Image
            width={18}
            height={18}
            alt="loader"
            src={loading}
            className="w-full"
          />
        </div>
      }
    >
      <LucideIcon {...props} />
    </Suspense>
  );
};
