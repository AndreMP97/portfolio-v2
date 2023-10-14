// Resources
import { Analytics } from "@vercel/analytics/react";
// Styles
import "@styles/globals.scss";
// Fonts
import "@fontsource/great-vibes";
import "@fontsource/poppins";

export const metadata = {
  title: "André Pacheco",
  description:
    "I'm André Pacheco, a passionate front-end developer and dedicated to creating high-quality, dynamic, and interactive websites. Constantly learning new technologies to both improve my skills and stay current with the industry. Always looking for new challenges to grow as a developer.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="container mx-auto font-poppins bg-zinc-900 scroll-smooth scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-zinc-600 scrollbar-track-transparent overflow-x-hidden overflow-y-scroll">
        {children}
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
