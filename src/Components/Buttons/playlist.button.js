import React from 'react'


export function PlaylistButton(props){
  const {handleClick, item: {name, images: [image], id} } = props
    return (
      <div className="flex flex-col mx-4 my-4 relative" onClick={() => handleClick(id)}>
        <img src={image.url} width={image.width || 275} height={image.height || 275}/>
      </div>)


}


