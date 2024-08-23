export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/* Left */}
      <div className="w-[14%] bg-red-50">Left</div>
      {/* Right */}
      <div className="w-[86%] bg-blue-200">Right</div>
    </div>
  );
}
