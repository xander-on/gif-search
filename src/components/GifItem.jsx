
export const GifItem = ({url, title}) => {
  return (
    <div className="card">
      <figure>
        <img src={url} alt={title} />
      </figure>
      <div className="card-description">
        <p>{ title }</p>
      </div>
    </div>
  )
}
