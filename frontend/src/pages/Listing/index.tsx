import MovieCard from "components/MovieCard";
//import MovieStars from "components/MovieStars";
//import MovieScore from "components/MovieScore";
import Pagination from "components/Pagination";

function Listing() {
    return (
        <>
            <Pagination></Pagination>
            <div className="row">
                        
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>
                <div className="col-sm-6 col-lg-4 col-xl-3 mb-4"><MovieCard></MovieCard></div>

             
            </div>



        </>
    );
}

export default Listing;