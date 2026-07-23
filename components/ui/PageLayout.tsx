interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({
  children,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 p-8">
      {children}
    </main>
  );
}