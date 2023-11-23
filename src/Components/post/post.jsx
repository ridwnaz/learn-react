import imageBlog from '../../img/pexels-christina-morillo-1181357.jpg'

const Post = (props) => {
        return(
            <div className="px-5">
                <div className="bg-white shadow-md p-6 w-6/12 rounded-md mb-3">
                    <div className=" flex inline">
                    <img src={imageBlog} className=" w-52 rounded"/>
                    <div className="flex flex-col pl-5">
                    <h1 className="text-xl font-mont font-semibold">{props.data.title}</h1>
                    <p className=" text-xs font-mont font-medium text-gray-500">{props.data.body}</p>    
                    </div>
                    </div>
                </div>
            </div>
        )
    }

export default Post;