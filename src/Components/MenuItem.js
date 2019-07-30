import React from 'react';

export const MenuItem = (props) => {

	return(
    <div className= {props.className}>
     <h1 className ='title'> {props.choice}</h1>
     <span className="subtitle" > SHOP NOW </span>
    </div>
		)
}
