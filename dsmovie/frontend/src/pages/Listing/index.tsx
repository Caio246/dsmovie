/* eslint-disable @typescript-eslint/no-unused-vars */
import Pagination from "components/Pagination";
import MovieCard from "components/MovieCard";


/* eslint-disable jsx-a11y/heading-has-content */
function Listin() {
  return (
    <>
      <Pagination></Pagination>

      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div> <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            <MovieCard></MovieCard>
          </div>
        </div>
      </div>
    </>
  )
}

export default Listin;