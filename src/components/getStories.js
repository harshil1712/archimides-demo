import React, { Component } from 'react'
import axios from 'axios'
import { Container, Typography, Box } from '@material-ui/core'
import baseURL from '../baseURL'
import StoryCard from './storyCard'

class getStories extends Component {
    constructor(props){
        super(props);
        this.state ={
            stories: [
                // {
                //     "summary":"a",
                //     "description":"As an Admin, When clicked on a row on the user story list it should take to a screen showing the details of the record and with options to Approve or Reject the story. Admin can either approve or reject the user story. ",
                //     "status":"approved",
                //     "type":"enhancement",
                //     "cost":100,
                //     "estimatedHrs":1,
                //     "complexity": "high"
                // },
                // {
                //     "summary":"b",
                //     "description":"As an Admin, When clicked on a row on the user story list it should take to a screen showing the details of the record and with options to Approve or Reject the story. Admin can either approve or reject the user story. ",
                //     "status":"rejected",
                //     "type":"enhancement",
                //     "cost":100,
                //     "estimatedHrs":1,
                //     "complexity": "high"
                // }
            ],
            loading: true
        }
    }
    componentDidMount(){
        // let id = this.props.match.params.userId
        // axios.get(baseURL+'getStories')
        // .then(res=>this.setState({loading:false,stories:res.data}))
        // .catch(err=>console.log(err))
    }

    render(){
        // console.log(this.props)
        // const data  = this.state.stories.map((d,i)=>(
        //     <StoryCard data={d} key={i}/>
        // ))
        return (
            <Container align="center">
                <Box m={4}>
                    <Typography variant="h3" m={6}>Stories</Typography>
                </Box>
                <Box>
                Story
                </Box>
            </Container>
        )
    }
}
export default getStories