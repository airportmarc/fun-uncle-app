import React from 'react'


export function PlaylistButton(props){
  const {handleClick, item: {name, images: [image], id, external_urls} } = props
    return (
      <div className="flex flex-col mx-4 my-4 relative" >
        <img src={image.url} width={image.width || 275} height={image.height || 275}/>
        <div className="opacity-0 hover:bg-gray-700 hover:opacity-75 absolute bottom-0 flex text-white justify-between items-center w-full text-center h-full">
            <div className="w-1/2 border-r-2 cursor-pointer" onClick={() => handleClick(id)}>
            Tracks
          </div>
          <div className="w-1/2">
            <a href={external_urls['spotify']}>Open</a>
          </div>
        </div>
      </div>)


}


