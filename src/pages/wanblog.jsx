import { Component } from "react";
import WanPost from "../Components/post/wanpost";
import axios from "axios";

class WanBlog extends Component {
    state = {
        post: [],
        formBlogPost: {
            id:1,
            title:'',
            body: '',
            userId:1,
        }
    }

    getPostAPI = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((review)=> {
            this.setState({
                post:review.data
            })
        })        
    }

    handleRemove = (data) => { 
        axios.delete('https://jsonplaceholder.typicode.com/posts/${data}')
        .then((rev) => {
            this.getPostAPI()
        }) 
    }

    postDataToAPI = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts',this.state.formBlogPost)
        .then((res) => {
            console.log(res);
        }, (err) => {
            console.log('error: ',err);
        })

    }

    handleFormChange = (event) => {
        // console.log("form Change", event.target)
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        formBlogPostNew["id"] = timestamp;
        formBlogPostNew[event.target.name] = event.target.value;  
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }

    handleSubmit = () => {
        this.postDataToAPI();
    }

    componentDidMount(){

        // USE AXIOS
        this.getPostAPI();
    }
    render() {
        return(
            <>
            <div className="py-5">
                <h1 className="text-center text-2xl font-mont text-birudark font-bold hover:text-birulight cursor-pointer">Wan's Blog</h1>
                <br/>
                <div className="flex flex-col pl-5"></div>
                <hr className="bg-birudark h-1"/>
            </div>
            <div className="flex justify-center items-center" >
                <div className="bg-white shadow-md rounded p-6">
                    <div>
                        <label 
                        className="font-mont font-semibold text-birudark" 
                        htmlFor="title">Title :</label>
                        <br/>
                        <input 
                        name="title" 
                        id="" 
                        className="text-xs p-2 w-96 bg-gray-100 font-mont rounded" 
                        placeholder="Add Title... " onChange={this.handleFormChange}/>
                    </div>
                    <br/>
                    <div>
                        <label className="font-mont font-semibold  text-birudark " 
                        htmlFor="body">Blog Content :</label>
                        <br/>
                        <textarea 
                        name="body " 
                        id="body" 
                        cols="53" 
                        rows="10" 
                        className="text-xs bg-gray-100 rounded p-2 font-mont" 
                        placeholder="Add Blog Content...
                        " onChange={this.handleFormChange}></textarea>
                    </div>
                    <br/>
                    <button 
                    className="bg-biru p-2 w-32 text-center rounded text-xs font-mont text-white font-semibold hover:bg-birudark"
                    onClick={this.handleSubmit}>Simpan </button>
                </div>
            </div>
            <br/>
            <h2 className="text-lg text-biru font-semibold font-mont pt-10 px-32 pb-2">Blog Terkini</h2>
            {
                this.state.post.map(post => {
                    return <WanPost key={post.id} data={post} remove={this.handleRemove}/>
                })
            }
            </>
        )
    }
}

export default WanBlog;