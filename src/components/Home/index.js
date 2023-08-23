import {Component} from 'react'
import Header from '../Header'
import './index.css'
import {HomeContainer} from './styledComponents'

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <Header />
        <h1>Welcome</h1>
      </HomeContainer>
    )
  }
}

export default Home
