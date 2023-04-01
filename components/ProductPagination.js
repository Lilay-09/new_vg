import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { data } from "../utils/data";

const renderData = (datafetch) => {
  return (
    <div className="product_details">
      {datafetch.map((item, index) => {
        return (
          <Image
            src={`/${item.url}`}
            width={4000}
            height={4000}
            key={index}
            priority
            alt={item.url}
          />
        );
      })}
    </div>
  );
};
const ProductPagination = () => {
  const [data_item, setData] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPgae, setItemPerPgae] = useState(1);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };
  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const pages = [];
  for (let i = 1; i <= Math.ceil(data_item.length / itemsPerPgae); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPgae;
  const indexOfFirstItem = indexOfLastItem - itemsPerPgae;
  const currentItems = data_item.slice(indexOfFirstItem, indexOfLastItem);

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };
  const rederPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={`current_num ${currentPage === number && "active"}`}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  return (
    <div className="d-flex flex-column gap-3">
      <div>{renderData(currentItems)}</div>
      <div className="pagination_key">
        {currentPage !== 1 && (
          <FontAwesomeIcon
            icon={faLessThan}
            width={15}
            onClick={handlePrevbtn}
            className="back_btn"
          />
        )}

        <div className={`pagination_number ${currentPage && "active"}`}>
          {rederPageNumbers}
        </div>

        {currentPage !== pages.length && (
          <FontAwesomeIcon
            icon={faGreaterThan}
            width={15}
            onClick={handleNextbtn}
            className="next_btn"
          />
        )}
      </div>
    </div>
  );
};

export default ProductPagination;
