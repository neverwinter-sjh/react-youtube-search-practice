import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBq8DirfvQ1ut_gMoa3Y_lVr-qdPj1JeNM';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null,
      term: ''
    };

    this.searchVideo(this.state.term);
  }

  searchVideo = term => {
    YTSearch({ key: API_KEY, term: term}, videos => {      
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    });
  };

  viewVideo = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
    return (
      <div className="wrapper">
        <SearchBar searchVideo={term => this.searchVideo(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={video => this.setState({ selectedVideo: video })} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#container'));