import { GifItem } from "../components";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  if( category == undefined ) return;

  return (
    <>
      { isLoading ? (<h2>Cargarndo...</h2>) : (<h4>{category}</h4>)}

      <div className="card-grid">
        { 
          images.map( (image) => <GifItem key={image.id} {...image}/> )
        }
      </div>
      
    </>
  )
}
