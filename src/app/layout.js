import "./globals.css";
import "@fontsource/great-vibes";
import "@fontsource/poppins";

export const metadata = {
  title: "André Pacheco",
  description:
    "I'm André Pacheco, a passionate front-end developer and dedicated to creating high-quality, dynamic, and interactive websites. Constantly learning new technologies to both improve my skills and stay current with the industry. Always looking for new challenges to grow as a developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="font-poppins bg-zinc-900 scroll-smooth scrollbar-thin scrollbar-thumb-rounded-md scrollbar-thumb-zinc-600 scrollbar-track-transparent 2xl:container 2xl:mx-auto">
        {children}
      </body>
    </html>
  );
}
