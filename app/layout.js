import "../app/globals.css";

export const metadata = {
  title: "Messaging App",
  description: "A messaging app built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
