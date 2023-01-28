
export const SearchHistory = ({ categories }) => {

  const history = [...categories];
  // history.shift();
  // history.reverse();
  
  return (
    <>
      <div className="head-right">
        <h4>History Search</h4>

        <div className="history">
          {
            history.map( (category) => 
              <div className="history-item" key={category}>
                <span>{category}</span> <i>x</i>
              </div>
            )
          }
        </div>
        
      </div>

      
    </>
    
  )
}
