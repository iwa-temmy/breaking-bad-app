import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

const CharacterGrid = ({isLoading, chars}) => {
    return isLoading ? <Spinner/> : <section className="cards">
        {chars.map(char => (
            <CharacterItem key={char.char_id} char={char} />
        ))}
    </section>
}

export default CharacterGrid
