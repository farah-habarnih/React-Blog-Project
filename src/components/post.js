import React from 'react';
import "./posts.css";
import { Link } from 'react-router-dom';



class Post extends React.Component{

    constructor(){
        super();
        this.state={
            allpost:[
                {
                  title:'Business Model',
                  text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel massa arcu. Ut tellus velit, condimentum vel lacus sed, mattis ultrices mauris. Curabitur facilisis justo sed massa lobortis, eget pulvinar arcu dictum. Aliquam porta mollis nisl, a commodo ante lobortis in. Nulla facilisi. Nulla eget nisi massa. Aliquam auctor blandit nibh id sagittis. Integer commodo molestie ante, ut tristique justo dignissim et. Nam id eros vitae leo ornare scelerisque at id purus',
                  img:'https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w',
              },
              {
                title:'Business Model',
                text:'Ut ac mauris vel magna elementum sodales. Vestibulum facilisis blandit libero, vel imperdiet sem venenatis nec. Fusce consectetur, sapien in aliquet mattis, metus lectus sodales tellus, in lacinia metus ipsum eget eros. Cras magna magna, eleifend ac tortor a, ultricies cursus augue. Phasellus sit amet elit vel ipsum tempor eleifend vitae non massa. Donec in turpis turpis. Aliquam bibendum sem id quam porta, nec condimentum dolor ultrices. Morbi lobortis, lacus a aliquam pretium, nisl urna porttitor nisl, ac ultricies dolor massa non felis.',
                img:'https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w',
            },
            {
                title:'Business Model',
                text:'Nam gravida libero ante, non placerat lectus ornare nec. Aenean vel convallis risus. Curabitur quis porttitor sem. Aliquam pulvinar ornare dignissim. Vivamus ac lorem et neque convallis aliquet. Fusce non felis quam. Fusce vehicula velit ultrices, hendrerit augue at, tempus justo. Praesent ultrices quis nisl in facilisis. Donec blandit vehicula porta.',
                img:'https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w',
            },
            {
                title:'Business Model',
                text:'Mauris vel diam quis tellus pharetra maximus sit amet at magna. Pellentesque rutrum rhoncus feugiat. Sed lectus magna, auctor ac purus id, vestibulum suscipit leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis gravida dui. Aliquam ultrices libero id ligula placerat consectetur. Proin nec ante eget dui iaculis suscipit. Vivamus feugiat mauris ipsum, sit amet porttitor arcu vestibulum quis. Ut venenatis nulla eget erat imperdiet, a porttitor arcu pretium. In fermentum, orci et pulvinar pellentesque, magna nulla mollis ipsum, vel feugiat enim ipsum a nisi. Nulla quis diam efficitur, facilisis velit sit amet, vestibulum ante. In hac habitasse platea dictumst. Donec sollicitudin rhoncus ultrices. Ut lobortis ligula a venenatis elementum.', 
                img:'https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w',
            },
            {
                title:'Business Model',
                text:'Maecenas bibendum ipsum eget lectus ultrices ultrices. Pellentesque ut facilisis tellus, quis viverra sem. Etiam augue nisi, sagittis euismod porta ac, dignissim non quam. Cras euismod lorem a quam dignissim ullamcorper. Ut laoreet nisl nec lorem venenatis dapibus. Sed pharetra tortor semper rhoncus suscipit. Etiam ornare at purus vitae ullamcorper. Phasellus fermentum enim nisl, ut malesuada elit viverra id. Praesent commodo lectus sed fermentum faucibus.',
                img:'https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w',
            }
            ],
            addpost:0,
            poster:0,
            newtitle:'',
            newurl:'',
        }
    }
  
    handleAdd =(e)=>{
        e.preventDefault();
        this.setState({addpost:1})
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        const newpost={
            title:e.target.title.value,
            text: e.target.text.value,
            img:e.target.url.value,
        }
        this.setState({
            allpost:[...this.state.allpost,newpost],
        })
        this.setState({poster:1,})
        this.setState({newtitle:e.target.title.value,})
        this.setState({newurl:e.target.url.value,})
        this.setState({addpost:0,})

    }


    render(){
    
    return(
        <div className="all-card">
        <div className="card">
        <img src={this.state.allpost[0].img}></img>
        <h2>{this.state.allpost[0].title}</h2>
        <button><Link to="/Single-post">Read More</Link></button>
        </div>
        <div className="card">
        <img src={this.state.allpost[1].img}></img>
        <h2>{this.state.allpost[1].title}</h2>
        <button>Read More</button>
        </div>
        <div className="card">
        <img src={this.state.allpost[2].img}></img>
        <h2>{this.state.allpost[2].title}</h2>
        <button>Read More</button>
        </div>
        <div className="card">
        <img src={this.state.allpost[3].img}></img>
        <h2>{this.state.allpost[3].title}</h2>
        <button>Read More</button>
        </div>
        <div className="card">
        <img src={this.state.allpost[4].img}></img>
        <h2>{this.state.allpost[4].title}</h2>
        <button>Read More</button>
        </div>
        {this.state.poster==1?<div className="card">
        <img src={this.state.newurl} alt=''></img>
        <h2>{this.state.newtitle}</h2>
        <button>Read More</button>
        </div>:""}
        <div className="card">
        <button onClick={this.handleAdd}>Add New Post</button>
        </div>
        {this.state.addpost==1?<form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder="Enter the title.." name="title"/>
        <label>Text </label>
        <input type="text" placeholder="Enter your text.." name="text"/>
        <label>URL </label>
        <input type="url" placeholder="Enter the image url.." name="url"/>
        <button type="submit">Add</button>
        </form>:''}
        </div>
    );
    }
}

export default Post;