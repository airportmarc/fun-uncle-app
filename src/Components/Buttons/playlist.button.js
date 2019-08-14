import React from 'react'


class CategoryButton extends React.Component {


  render() {
    const {handleClick, item: {name, icons: [icon], id} } = this.props
    return (
      <div className="flex flex-col mx-4 my-4 relative" onClick={() => handleClick(id)}>
        <img src={icon.url} width={icon.width || 275} height={icon.height || 275}/>
        <h3 className="absolute top-auto inset-x-0 text-center mt-5 text-white uppercase tracking-wide text-2xl"> {name}</h3>
      </div>)
  }


}


export default CategoryButton