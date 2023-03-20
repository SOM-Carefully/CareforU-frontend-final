import "./pagination_box.scss";
import Pagination from "react-js-pagination";
import { useState, React } from "react";

function Pagination_box() {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5}
      totalItemsCount={100}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
}

export default Pagination_box;
