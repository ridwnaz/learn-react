import { useNavigate } from "react-router-dom";

const Header1 = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <h1 className="font-mont text-2xl text-birulight font-semibold ml-96 py-14">About Me !</h1>
            <p className=' relative ml-96 w-96 break-normal'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas eveniet rerum magnam possimus, vel doloremque minus eos! Beatae temporibus nesciunt quis? Doloremque ipsam voluptatem eius eum fuga assumenda neque atque!</p>
            <button className="font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight relative left-96 top-5" onClick={() => Navigate('/home')}>Back</button>
        </div>
    )
}

export default Header1;