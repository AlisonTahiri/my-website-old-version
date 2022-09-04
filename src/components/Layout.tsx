import { ReactNode } from "react";
import Nav from "./Nav";

type IProps = {
  children: ReactNode;
};

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="overflow-hidden">
      <Nav />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default Layout;
