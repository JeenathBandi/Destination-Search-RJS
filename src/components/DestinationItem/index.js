// Write your code here
import './index.css'
import {Component} from 'react'

class DestinationItem extends Component {
  render() {
    const {item, key} = this.props
    const {name, imgUrl} = item
    return (
      <div>
        <li className="destination-item-container">
          <img src={imgUrl} alt={name} className="img" />
          <p className="destination-item-name">{name}</p>
        </li>
      </div>
    )
  }
}

export default DestinationItem
