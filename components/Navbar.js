import Link from "next/link"

export default function NavBar() {
    return (
        <nav>
            <Link className="tag_a" href='/' >
                Home
            </Link>
            <Link className="tag_a" href='/about' >
                about
            </Link>
            <Link className="tag_a" href='/contact' >
                contact
            </Link>
            <style jsx>{`
                nav {
                    display: flex;
                    gap: 10px;
                }
            `}</style>
        </nav>
    )
}