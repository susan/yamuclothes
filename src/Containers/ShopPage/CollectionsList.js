import React from 'react'
import Collection from './Collection'

const Sections = ( props ) => {

	const items = props.section.items.map( item => {
	  return <Collection key={item.id} item= {item} />
	 })

	return(
		<>
    <h1> {props.section.title} </h1>
    {items}
    </>
		)
}

export default Sections
