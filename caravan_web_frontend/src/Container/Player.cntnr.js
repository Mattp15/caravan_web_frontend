import React, { useState, useEffect } from 'react'

import PlayerHandState from '../Components/PlayField/Player/PlayerHandState.js'
import PlayerHandDisplay from '../Components/PlayField/Player/PlayerHandDisplay.js'

import PlayerDeckState from '../Components/PlayField/Player/PlayerDeckState.js'
import PlayerDeckDisplay from '../Components/PlayField/Player/PlayerDeckDisplay.js'

const PlayerContainer = (props) => {
  const [playerHand, setPlayerHand] = useState([])
  const [deck, setDeck] = useState([])

  useEffect(
    () => {
      //do the stuff
    },
    [playerHand] //only runs when playerHand changes in some way(player removes a card))
  )
  const [selectedCard, setSelectedCard] = useState(null)
  const handleClick = ({ target }) => {
    //setSelectedCard(highlights selected card)
    //clicks on caravan to place highlighted card(requires player hand card to be chosen)
  }

  return (
    <div>
      <h1>{props.test}</h1>
      <PlayerHandState playerHand={playerHand} />
      <PlayerHandDisplay playerHand={playerHand} />
      <PlayerDeckDisplay deck={deck} />
      <PlayerDeckState deck={deck} />
    </div>
  )
}

export default PlayerContainer
