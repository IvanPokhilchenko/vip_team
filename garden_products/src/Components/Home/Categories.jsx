import { Link } from "react-router-dom";
import CategoriesList from "../CategoriesList/CategoriesList";
import "./Categories.css";

function Categories() {
  return (
    <div className="cont">
      <div className="container">
        <p className="categories-text">Categories</p>
        <div className="line"></div>
        <span className="all-text">All categories</span>
      </div>

      <span className="all-texts">
        <Link to="/categories">All categories </Link>
      </span>

      <div className="container">
        <CategoriesList limit={4} />
      </div>
    </div>
  );
}

export default Categories;
