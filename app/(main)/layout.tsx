import ScrollToTop from "@/components/etc/ScrollToTop";
import Navbar from "@/components/navigation/Navbar";

// Main HTML
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
    </>
  );
}
