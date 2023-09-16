import { ReactElement } from "react";
import "./root.css";
import ProfileIcon from "../components/icons/profile";

const RootLayout = ({ children }: { children: ReactElement }) => {
    return (
        <main>
            <header className="root">
                <h1>
                    <span className="shop">shop</span>cart
                </h1>
                <div className="profile_block">
                    <ProfileIcon />
                    <h2>Sign In</h2>
                </div>
            </header>
            {children}
        </main>
    );
};

export default RootLayout;
