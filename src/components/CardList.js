import React from 'react';
import Card from './Card';

const CardList = (props) => {
  return(
    <div className='grid'>
      {
        props.bots.map((robotObj) => {
          return <Card
            key = {robotObj.id}
            bot = {robotObj}
            />
        })
      }
    </div>

  )
}

export default CardList;
