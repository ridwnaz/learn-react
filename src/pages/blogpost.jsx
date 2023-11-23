import { Component } from "react";
import Post from "../Components/post/post";

class Blogpost extends Component {
    state = {
        post:[] 
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.setState({
            post:json
        })
      })
    }
    render () {
        return(
            <div>
                <h1 className="text-center font-semibold font-mont text-2xl pt-1">Blog Post</h1>
                <hr />
                <h1 className="text-xl font-mont text-xl px-1 py-5 px-5">Blog Post</h1>
                {
                    this.state.post.map(post => {
                        return<Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </div>
        )
    }
}

export default Blogpost ;