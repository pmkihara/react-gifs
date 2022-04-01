// React imports
import React, { Component } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import giphyKey from '../../giphy';
import regeneratorRuntime from "regenerator-runtime";

// Components imports
import Gif from './gif';
import GifList from './gif_list';
import SearchBar from './search_bar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGifId: 'gz5BQtG0Pa4TJivgpm',
      foundGifIds: [],
      formFocus: false
    };
    this.search('dog');
  }

  search = async (query) => {
    const gf = new GiphyFetch(giphyKey);
    try {
      const result = await gf.search(query, { limit: 10 });
      this.setState({
        foundGifIds: result.data
      });
    } catch (error) {
      console.error(`search`, error);
    }
  };

  selectGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  handleFocus = (event) => {
    this.setState({
      formFocus: event === 'focus'
    });
  }

  render() {
    return (
      <div>
        <div className={`left-scene ${this.state.formFocus ? 'active' : ''}`}>
          {<SearchBar searchFunction={this.search} focusFunction={this.handleFocus} />}
          <div className="selected-gif">
            {<Gif id={this.state.selectedGifId} selectFunction={this.selectGif} />}
          </div>
        </div>
        <div className="right-scene">
          {<GifList ids={this.state.foundGifIds} selectFunction={this.selectGif} />}
        </div>
      </div>
    );
  }
}

export default App;
