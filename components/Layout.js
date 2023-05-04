import NavBar from "./Navbar";
import Seo from "./Seo";

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    )
}