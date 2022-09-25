import Footer from "./Footer";
import Nav from "./Nav";

const Layout = ({ children }) => {
    return (
        <div className="bg-primary">
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;