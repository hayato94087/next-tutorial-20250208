import "@/styles/globals.css";
type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Sample",
  description: "Generated by create next app",
};

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="ja">
      <body className="">{props.children}</body>
    </html>
  );
};