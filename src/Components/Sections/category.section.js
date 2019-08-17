import React  from 'react'
import { CategoryButton } from "../Buttons/category.button";
import {useSpotify} from "../../hooks";
import {BaseClass} from "./base.section";


export function CategorySection(props) {
  const {data, loading} = useSpotify('getCategoryList')
  const { items } = data ? data.categories : {}

  const handleClick = (catId) => {
    props.history.push(`/playlists/${catId}`)
  }
  return (
    <BaseClass items={items} component={CategoryButton} onClick={handleClick} />

  )
}