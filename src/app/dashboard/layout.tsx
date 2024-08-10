export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>Dashboard layout</div>
        {children}
      </body>
    </html>
  );
}
