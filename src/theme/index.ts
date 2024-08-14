export const fontFamily = {
  primary: ["Raleway", "sans-serif"],
  body: ["Catamaran", "sans-serif"],
};

export const colors = {
  background: {
    DEFAULT: "hsl(var(--background), <alpha-value>)",
    50: "hsl(var(--background-variant-lighter), <alpha-value>)",
    100: "hsl(var(--background-variant-light), <alpha-value>)",
    200: "hsl(var(--background-variant-dark), <alpha-value>)",
  },

  foreground: {
    DEFAULT: "hsl(var(--foreground), <alpha-value>)",
    50: "hsl(var(--foreground-variant-lighter), <alpha-value>)",
    100: "hsl(var(--foreground-variant-light), <alpha-value>)",
    200: "hsl(var(--foreground-variant-dark), <alpha-value>)",
  },

  primary: {
    DEFAULT: "hsl(var(--primary), <alpha-value>)",
    100: "hsl(var(--primary-variant-light), <alpha-value>)",
    200: "hsl(var(--primary-variant-dark), <alpha-value>)",
  },

  secondary: {
    DEFAULT: "hsl(var(--secondary), <alpha-value>)",
    100: "hsl(var(--secondary-variant-light), <alpha-value>)",
    200: "hsl(var(--secondary-variant-dark), <alpha-value>)",
  },

  danger: {
    DEFAULT: "hsl(var(--destructive), <alpha-value>)",
  },

  muted: {
    DEFAULT: "hsl(var(--muted), <alpha-value>)",
    foreground: "hsl(var(--muted-foreground), <alpha-value>)",
  },

  popover: {
    DEFAULT: "hsl(var(--popover), <alpha-value>)",
  },

  info: "hsl(var(--info), <alpha-value>)",
  warning: "hsl(var(--warning), <alpha-value>)",
  success: "hsl(var(--success), <alpha-value>)",
  border: "hsl(var(--border), <alpha-value>)",
  input: "hsl(var(--input), <alpha-value>)",
  ring: "hsl(var(--ring), <alpha-value>)",
};

export const boxShadow = {
  cs: "20px 20px 60px , -20px -20px 60px",
};

export const animation = {
  ripple: "ripple-effect 0.6s linear",
  meteor: "meteor-effect 10s linear infinite",
  marquee:
    "marquee-effect 40s var(--_animation-direction, forwards) linear infinite",
};

export const keyframes = {
  "marquee-effect": {
    to: {
      transform: "translate(calc(-50% - 0.5rem))",
    },
  },
  "ripple-effect": {
    "0%": { transform: "scale(0)", opacity: "1" }, // Change opacity to string
    "90%": { transform: "scale(4)", opacity: "0" }, // Change opacity to string
    "100%": { transform: "scale(0)", opacity: "0" }, // Change opacity to string
  },
  "meteor-effect": {
    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" }, // Change opacity to string
    "70%": { opacity: "1" }, // Change opacity to string
    "100%": {
      transform: "rotate(215deg) translateX(-500px)",
      opacity: "0", // Change opacity to string
    },
  },
};
