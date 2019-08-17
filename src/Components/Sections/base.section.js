import React, {Component} from 'react';
import {CategoryButton} from "../Buttons/category.button";


export function BaseClass(props) {
  const {items, component: RenderComponent, className} = props

  return (
    <div className={`flex flex-1 flex-wrap w-full justify-around content-center h-screen -mt-24 ${className}`}>
      {items && items.sort(() => .5 - Math.random()).slice(0, 5).map(item => {
        return (
          <RenderComponent
            key={item.id}
            item={item}
            {...props}
          />
        )
      })}
    </div>
  )
}