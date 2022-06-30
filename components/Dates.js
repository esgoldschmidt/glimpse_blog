import React from "react";

function Dates({filter, dates}) {
  return (
      <div className="m-4 flex flex-wrap justify-center">
        {
          dates.map((date, i) => {
            return <button
            className="btn btn-primary p-2 m-2 w-20 "
            onClick={()=> filter (date)} key={i}>{date}
            </button>
          })
        }
      </div>
  )
}

export default Dates;