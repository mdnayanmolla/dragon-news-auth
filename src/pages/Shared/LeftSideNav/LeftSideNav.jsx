import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories ,setCategories] = useState([]);
    useEffect(()=>{
        fetch('../../../../public/categories.json')
        .then(res=>res.json())
        .then(data=> setCategories(data))
    },[])
    return (
        <div>
            <h2 className="text-2xl bg-[#E7E7E7] p-2">All Categories: {categories.length}</h2>
            {
                categories.map(category => <Link className="block p-2" 
                    key={category.id}
                    to={`/category/${category.id}`}>
                    {category.name}</Link>)
            }
        </div>
    );
};

export default LeftSideNav;