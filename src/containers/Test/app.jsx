import React from 'react'
import ReactDOM from 'react-dom'

import CardList from './cardList.jsx'

let cards = [
    {'name': 'Super card', 'id': 1},
    {'name': 'Other card', 'id': 2},
    {'name': 'Last card', 'id': 3}
];
class App extends React.Component {
constructor(props){
    super(props)
    this.state = props
}
render() {
    let elements = this.state.cards.map((element) => {
        return (<li key={element.id}>{element.name}</li>)
    })
    return <ul>{elements}</ul>
}
moveCard(from, to){
    cards = this.state.cards
    movedCard = cards.splice(from, 1)
    cards.splice(to, 0, movedCard)
    this.setState({
        cards: cards
    })
}


ReactDOM.render(<CardList cards={cards} />, document.getElementById("baseElement"))
export default (App);
