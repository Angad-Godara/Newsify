import React, { Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API_KEY;

  state = {
    progress: 0
  }

  setProgress = (prog) => {
    this.setState({ progress: prog })
  }

  render() {
    return (

      <BrowserRouter >
        <Navbar />
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.setProgress(0)}
        />
        <Routes>
          <Route path='/' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={9} country="in" category="general" />} />
          <Route path='/business' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={9} country="in" category="business" />} />
          <Route path='/entertainment' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={9} country="in" category="entertainment" />} />
          <Route path='/general' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={9} country="in" category="general" />} />
          <Route path='/health' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={9} country="in" category="health" />} />
          <Route path='/science' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={9} country="in" category="science" />} />
          <Route path='/sports' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={9} country="in" category="sports" />} />
          <Route path='/technology' element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={9} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter >
    )
  }
}