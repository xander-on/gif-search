import { useState } from "react";
import { GifGrid, HeadSearch } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategory] = useState([]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes(newCategory) ) {
      const catFilter = categories.filter( (category) => category != newCategory )
      setCategory([...catFilter,newCategory]);
    }else{
      setCategory([ ...categories,newCategory]);
    }
  }

  const lastCategory = categories.length -1;

  return (
    <>
      <HeadSearch onAddCategory={onAddCategory} categories={categories}/>
      <GifGrid key={categories[lastCategory]} category={categories[lastCategory]}/>
    </>
  )
}
