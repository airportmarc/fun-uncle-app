import React from 'react';

// class CategoryButton extends React.Component {
//
//
//   render() {
//     const isPlaylist = !!this.props.item.external_urls
//     const {handleClick, item: {name, icons, id} } = this.props
//     const icon = isPlaylist ? this.props.item.images[0] : icons[0]
//     return (
//       <div className="flex flex-col mx-4 my-4 relative" onClick={() => handleClick(id)}>
//         <img src={icon.url} width={icon.width || 275} height={icon.height || 275}/>
//         <h3 className="absolute top-auto inset-x-0 text-center mt-5 text-white uppercase tracking-wide text-2xl"> {name}</h3>
//       </div>)
//   }
//
//
// }
//
//
// export default CategoryButton


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