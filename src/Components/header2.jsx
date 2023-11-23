import { useNavigate } from "react-router-dom";

const Header2 = () => {
    const Navigate = useNavigate ()
    return (
        <div className="py-60">
            <h1 className="text-2xl font-mont font-semibold pl-96">Page NotFound Bro !!!</h1>
            <a className= "text-xs font-mont font-medium pl-96 cursor-pointer text-gray-500"onClick={() => Navigate ('/home')}>Return to SafePage</a>
        </div>
    )
}

export default Header2;
