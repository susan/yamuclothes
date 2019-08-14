import React from 'react';
import { withRouter } from 'react-router';


const MenuItem = (props) => {
  const { choice } = props
  return (
    <div
      className= {props.className}

         style={{
           backgroundImage: `url(${choice.imageURL})`,
          }}
          onClick = { () => props.history.push(`/${choice.title.toLowerCase()}`) }
     >
       <h1 className ='title'> {choice.title}</h1>
       <h3 className="subtitle" > SHOP NOW </h3>
    </div>
    )
}

export default withRouter(MenuItem);
