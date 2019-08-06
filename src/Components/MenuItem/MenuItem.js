import React from 'react';

export const MenuItem = (props) => {
  const { choice } = props
	return (
    <div
      className= {props.className}

         style={{
           backgroundImage: `url(${choice.imageURL})`,
          }}
     >
       <h1 className ='title'> {choice.title}</h1>
       <h3 className="subtitle" > SHOP NOW </h3>
    </div>
		)
}
