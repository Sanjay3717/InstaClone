import {Component} from 'react'
import Header from '../Header'
import Stories from '../Stories'
import './index.css'
import {HomeContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <Stories />
      </HomeContainer>
    )
  }
}

export default Home
