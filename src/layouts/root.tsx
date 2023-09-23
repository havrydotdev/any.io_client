import { ReactElement } from "react";
import "./root.css";
import Header from "../components/header";

const RootLayout = ({ children }: { children: ReactElement }) => {
  return (
    <main>
      <Header />
      <hr />
      {children}
    </main>
  );
};

export default RootLayout;
