export const Tab = ({
  children,
  selected,
  href,
}: {
  children: React.ReactNode;
  selected: boolean;
  href?: string;
}) => {
  if (selected) return <Selected>{children}</Selected>;

  return (
    <a
      href={href}
      className="-mb-px border-b border-transparent p-4 hover:text-cyan-500"
    >
      {children}
    </a>
  );
};

const Selected = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href?: string;
}) => {
  return (
    <a href={href} className="-mb-px border-b border-current p-4 text-cyan-500">
      {children}
    </a>
  );
};
