import AppFooter from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps>= ({children}) => {
    return(
        <>
            <NavBar />
                {children}
            <AppFooter />
        </>
    )
}
export default Layout;