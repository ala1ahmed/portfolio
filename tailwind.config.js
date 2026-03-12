// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./app/**/*.{vue,js}",
    "./components/**/*.vue",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./composables/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      colors: {
        noir: {
          950: "#050505",
          900: "#0a0a0a",
          800: "#111111",
          700: "#1e1e1e",
          600: "#2a2a2a",
          500: "#3a3a3a",
        },
        light: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
        },
        terminal: {
          green: "#00ff88",
          cyan: "#00e5ff",
          amber: "#ffb300",
          red: "#ff4444",
          purple: "#b388ff",
          dim: "#555555",
        },
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 6px #00ff88" },
          "50%": { boxShadow: "0 0 14px #00ff88, 0 0 28px #00ff8840" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        fadeUp: "fadeUp 0.5s ease forwards",
        glowPulse: "glowPulse 2s ease-in-out infinite",
      },
      backgroundImage: {
        "grid-terminal":
          "linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px)",
        "grid-light":
          "linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      typography: (theme) => ({
        invert: {
          css: {
            "--tw-prose-body": theme("colors.terminal.dim"),
            "--tw-prose-headings": theme("colors.light[50]"),
            "--tw-prose-code": theme("colors.terminal.green"),
          },
        },
      }),
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
  ],
};
