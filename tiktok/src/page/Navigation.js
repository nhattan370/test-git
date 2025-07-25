import { Route, Routes, Link } from "react-router-dom"
import Home from "./Home"
import News from "./News"
import Contact from "./Contact"

function Navigation(){
    return (
    <div>
        <nav style={{display:'flex', gap:'5px'}}>
            <Link to ='/'>Home</Link>
            <Link to ='/news'>News</Link>
            <Link to ='/contact'>Contact</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/news" element={<News></News>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
    </div>
    )
}
export default Navigation