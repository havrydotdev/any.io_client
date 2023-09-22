import { ReactElement } from "react";
import "./root.css";
import Header from "../components/header/header";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default RootLayout;
