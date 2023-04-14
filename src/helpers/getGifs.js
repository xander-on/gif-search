export const getGifs = async( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=xyCIIKFbRy9m3Kb6NVrck1JIoKhHdMrK&q=${category}&limit=12`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  console.log(data);


  const gifs = data.map( img => ({
    //todo: validar title vacio
    id   : img.id,
    title: img.title,
    url  : img.images.downsized_medium.url
  }));


  return gifs;

}