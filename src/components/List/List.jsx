import React from 'react'
import "./List.scss"

const List = ({items}) => {
  return (
    <div className='site-list-container'>
        <ul>
            {items.map((item, idx) => {
                return <li key={idx}>{item}</li>
            })}
        </ul>
    </div>
  )
}

export default List
