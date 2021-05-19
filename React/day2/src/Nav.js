
function Nav(){
    return(
        <nav>
            <h3>Logo</h3>
        <ul className='nav-links'>
            <Link to ='/about'>
            <li>About Me</li>
            </Link>
            <Link to ='/Contact'>
            <li>Contact Us</li>
            </Link>
            <Link to ='/Home'>
            <li>Home</li>
            </Link>
        </ul>
        </nav>

    )
}
export default Nav