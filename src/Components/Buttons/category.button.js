import React from 'react';

export function CategoryButton(props) {
  const { item: {name, icons, id}, onClick } = props
  const icon = icons[0]

  return  (
    <div>
      <div
        onClick={() => onClick(id)}
        className="flex flex-col mx-4 my-4 relative">
        <img src={icon.url} width={icon.width || 275} height={icon.height || 275}/>
        <h3 className="absolute top-auto inset-x-0 text-center mt-5 text-white uppercase tracking-wide text-2xl"> {name}</h3>
      </div>
    </div>
  )
}