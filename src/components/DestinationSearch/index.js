// Write your code here
import './index.css'
import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeInput = event => this.setState({searchInput: event.target.value})

  render() {
    const {searchInput} = this.state
    console.log(searchInput)
    const {destinationsList} = this.props
    const searchResults = destinationsList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="destination-search-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-element-container">
          <input
            className="input-bar"
            type="search"
            placeholder="Search"
            onChange={this.onChangeInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
            className="search-img"
          />
        </div>
        <ul className="items-container">
          {searchResults.map(eachItem => (
            <DestinationItem item={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
