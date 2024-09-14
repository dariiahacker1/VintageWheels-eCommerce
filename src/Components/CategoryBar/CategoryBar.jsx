import React from "react";
import './CategoryBar.css'

const CategoryBar = ({ category, setCategory, makes, setMake, make }) => {

    return (
        <div className="categories">
            <h1>BROWSE CATEGORY</h1>
            <hr/>
            <ul>
                <li className={category === "antique" ? "active" : ""}
                    onClick={() => setCategory("antique")}>Antiques / Pre-War
                </li>
                <li className={category === "convertible" ? "active" : ""}
                    onClick={() => setCategory("convertible")}>Convertibles
                </li>
                <li className={category === "future-classic" ? "active" : ""}
                    onClick={() => setCategory("future-classic")}>Future Classics
                </li>
                <li className={category === "luxury" ? "active" : ""} onClick={() => setCategory("luxury")}>Luxury
                    Performance
                </li>
                <li className={category === "motorcycle" ? "active" : ""}
                    onClick={() => setCategory("motorcycle")}>Motorcycles
                </li>
                <li className={category === "muscle" ? "active" : ""} onClick={() => setCategory("muscle")}>Muscle
                    Cars
                </li>
                <li className={category === "truck" ? "active" : ""} onClick={() => setCategory("truck")}>Trucks
                </li>
                <li className={category === "all" ? "active" : ""} onClick={() => setCategory("all")}>All
                    categories
                </li>
            </ul>

            <br/>
            <h1>BROWSE BY MAKE</h1>
            <hr/>
            <ul>
                {[...makes].map((el, index) => (
                    <li className={make === el ? "active" : ""} key={index} onClick={() => setMake(el)}> {el}</li>
                ))}
                <li className={make === "all" ? "active" : ""} onClick={() => setMake("all")}>All makes</li>
            </ul>
        </div>
    )
}

export default CategoryBar;