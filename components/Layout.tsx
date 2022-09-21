import Footer from "./Footer";
import Nav from "./Nav";
// import Nav from "./Nav";


const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;