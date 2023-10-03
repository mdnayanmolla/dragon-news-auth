import { Link } from "react-router-dom";

const Newscard = ({ aNews }) => {
    const {_id, title,thumbnail_url,details ,image_url} = aNews
    return (
        <div>
            <div className="card bg-base-100 shadow-xl mb-4">
                <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                       {
                        details.length>200
                        ?<p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold ">Read More...</Link></p>
                        :<p>{details}</p>
                       }   <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newscard;