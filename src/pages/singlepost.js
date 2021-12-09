import Navbar from '../components/Navbar';
import React from 'react';
import "./singlepost.css";

class Singlepost extends React.Component{
  constructor(props){
      super(props);
      this.state={
      Like:0,
      comment:'',
      name:'',
      }
  }
  handleSubmit =(e)=>{
    e.preventDefault();

this.setState({
  comment:e.target.text.value,
})
this.setState({
  name:e.target.name.value,
})

e.target.reset();

  }
  handleClick =()=>{
    this.setState({Like:this.state.Like+1,})

  }


render(){
  return (
      <div>
      <Navbar/>
      <div className="card">
        <h2>Business Model</h2>
        <img src='https://images.squarespace-cdn.com/content/v1/57ff482fd2b857f1d9b06442/1555576467680-9CRVYODL45HSJSATHBH6/Business+Model+Testing+Cycle.png?format=1000w'></img>
       <h3>{this.state.Like} Likes </h3><button onClick={this.handleClick}><i class="fa fa-thumbs-up" aria-hidden="true"></i></button>
       <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel massa arcu. Ut tellus velit, condimentum vel lacus sed, mattis ultrices mauris. Curabitur facilisis justo sed massa lobortis, eget pulvinar arcu dictum. Aliquam porta mollis nisl, a commodo ante lobortis in. Nulla facilisi. Nulla eget nisi massa. Aliquam auctor blandit nibh id sagittis. Integer commodo molestie ante, ut tristique justo dignissim et. Nam id eros vitae leo ornare scelerisque at id purus</p>
       <h2> Comments</h2>
       {this.state.name?<span>{this.state.name}</span>:''}{this.state.comment?<span>{this.state.comment}</span>:''}
       <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" placeholder="Enter your Name.." name="name"/>
        <label>Text </label>
        <input type="text" placeholder="Enter your comment.." name="text"/>
        <button type="submit">Add comment</button>
        </form>
    
    </div>
    </div>
  );
  }
}
export default Singlepost;

