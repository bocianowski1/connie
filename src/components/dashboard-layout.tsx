export function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="h-full flex flex-col">{children}</div>;
}