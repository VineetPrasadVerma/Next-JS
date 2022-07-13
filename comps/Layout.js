import Footer from "./Footer";
import Navbar from "./Header";

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}
