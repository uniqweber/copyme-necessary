/* ------------------------------ installation ------------------------------ */
export const installTailwind = `npm install tailwindcss @tailwindcss/vite`;
export const configVite = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(),tailwindcss()],
})
`;
export const importCss = `@import "tailwindcss"`;
export const testCss = `<h1 className="text-3xl text-red-600 h-screen flex items-center justify-center"> Hello world!</h1>
`;

/* ---------------------------------- fonts --------------------------------- */
export const roboto = `@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
--font-roboto: "Roboto", "sans-serif";
`;

export const poppins = `@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
--font-poppins: "Poppins", "serif";
`;
export const lato = `@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
--font-lato: "Lato", "serif";
`;
export const Montserrat = `@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
--font-montserrat: "Montserrat", "serif";
`;

export const josefinSans = `@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');
--font-josefin: "Josefin Sans", "serif";
`;
export const inter = `@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
--font-inter: "Inter", "serif";
`;

export const spaceGrotesk = `@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
--font-grotesk: "Space Grotesk", "serif";
`;
export const workSans = `@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
--font-work: "Work Sans", "serif";
`;
export const dmSans = `@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
--font-dm: "DM Sans", "serif";
`;
export const outfit = `@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
--font-outfit: "Outfit", "serif";
`;

/* ---------------------------- css boiler palate --------------------------- */
export const palette1 = [
  { name: "dark", value: "#1E293B" },
  { name: "color-2", value: "#64748B" },
  { name: "color-3", value: "#F8FAFC" },
  { name: "color-4", value: "#E2E8F0" },
  { name: "color-5", value: "#FFFFFF" },
  { name: "color-6", value: "#3B82F6" },
  { name: "color-7", value: "#10B981" },
  { name: "color-8", value: "#FF6363" },
  { name: "color-9", value: "#F59E0B" },
  { name: "color-10", value: "#111827" },
];
export const palette2 = [
  { name: "color-1", value: "#2563EB" },
  { name: "color-2", value: "#4ADE80" },
  { name: "color-3", value: "#E5E7EB" },
  { name: "color-4", value: "#F9FAFB" },
  { name: "color-5", value: "#FF6347" },
  { name: "color-6", value: "#FBBF24" },
  { name: "color-7", value: "#34D399" },
  { name: "color-8", value: "#64748B" },
  { name: "color-9", value: "#6EE7B7" },
  { name: "color-10", value: "#111827" },
];
export const palette3 = [
  { name: "color-1", value: "#4F46E5" },
  { name: "color-2", value: "#F472B6" },
  { name: "color-3", value: "#D1D5DB" },
  { name: "color-4", value: "#F4F4F5" },
  { name: "color-5", value: "#0F172A" },
  { name: "color-6", value: "#8B5CF6" },
  { name: "color-7", value: "#9333EA" },
  { name: "color-8", value: "#34D399" },
  { name: "color-9", value: "#EC4899" },
  { name: "color-10", value: "#D97706" },
];
export const mostUsedColors = [
  { name: "primary", value: "#2563EB" }, // Blue
  { name: "secondary", value: "#34D399" }, // Green
  { name: "accent", value: "#F59E0B" }, // Yellow
  { name: "danger", value: "#EF4444" }, // Red
  { name: "success", value: "#10B981" }, // Green
  { name: "background", value: "#F9FAFB" }, // Light Background
  { name: "text", value: "#1E293B" }, // Dark Text
];
