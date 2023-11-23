import img from '../img/smile-png-photo-19-removebg-preview.png'
import { useNavigate } from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate()
    return(
        <div>
            <h1 className='text-xl text-center font-mont font-semibold py-16'>
                Hello User! Welcome to My Learn React Route-dom
            </h1>
            <div className="px-96 mx-32">
            <div className="bg-gray-50 shadow-md  h-52 w-52 rounded">
                <img src={img} className='w-20 relative left-16 top-5'/>
                <p className="font-mont text-center font-semibold relative top-8">Click Button Here :</p>
                <div className="relative top-12 left-16">
                  <button 
                  className="font-mont text-white text-xs font-semibold bg-biru rounded p-2 hover:bg-birulight" onClick={() => navigate('/about')}>Click Here!</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Header;
