import {Component} from 'react'
import Header from '../Header'
import Stories from '../Stories'
import UserPost from '../UserPost'
import './index.css'
import {HomeContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <Stories />
        <UserPost />
      </HomeContainer>
    )
  }
}

export default Home
