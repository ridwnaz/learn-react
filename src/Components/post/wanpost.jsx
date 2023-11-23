const WanPost = (props) => {
    return(
        <>
        <div className="px-5 flex justify-center items-center">
            <div className=" bg-white shadow-lg p-2 w-5/6 rounded mb-3 sm:">
                <div className=" flex inline">
                <img 
                src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="photodummy"
                className="w-60 h-32 rounded " />
                <div className="flex flex-col pl-10">
                <h1 className="font-mont font-semibold">{props.data.title}</h1>
                <p className="text-xs font-mont text-gray-400">{props.data.body}</p>
                <button 
                className='bg-red-700 p-2 text-center rounded text-xs font-mont text-white font-semibold hover:bg-red-500'
                onClick={()=> props.remove(props.data.id)}>Remove</button>
                </div>
                </div>
            </div>
        </div>
        </>
        
    )
}

export default WanPost;