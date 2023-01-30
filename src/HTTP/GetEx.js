//import { LineAxisOutlined } from '@mui/icons-material'
import axios from 'axios'
import React, { Component } from 'react'

export default class GetEx extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts:[]
      }
    }
    handler(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            
            this.setState({post:response.data})
        })
        
    }
  render() {
    const {posts}=this.state
    return (
      <div>GetEx
      <table>
  <tr>
    <th style={{paddingRight:30}}>UserId</th>
    <th style={{paddingRight:70}}>Title</th>
    <th style={{paddingRight:90}}
    
    
    
    
    
    
    
    +66
QA'-;0  </tr>,OL
</table>
      {posts.map((post)=>{
  return(
  <tr>
    <td>{post.UserId}</td>
    <td>{post.Title}</td>
    <td>{post.body}</td>
  </tr>)

      })
    }
        </div>
    )
  }
}
8