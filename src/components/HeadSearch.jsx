import { AddCategory, SearchHistory } from "../components";

export const HeadSearch = ({ onAddCategory, categories}) => {
  return (
    <div className="head">
      <div className="head-left">
        <h1>Buscar Gif 🔎</h1>
        <AddCategory onNewCategory = { onAddCategory } />
      </div>
      
      <SearchHistory categories={categories}/>
    </div>
  )
}
