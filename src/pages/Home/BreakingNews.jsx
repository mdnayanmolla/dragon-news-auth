import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-2">
            <button className="btn btn-secondary">Breaking news</button>
            <Marquee>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;