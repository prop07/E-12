import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const NavButton: React.FC<Props> = ({ children }) => {
  const className = "px-2 py-1";

  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default NavButton;
