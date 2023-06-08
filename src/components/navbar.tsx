export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav
      aria-label="Tabs"
      className="flex border-b border-gray-100 text-sm font-medium"
    >
      {children}
    </nav>
  );
};
