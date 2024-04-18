import { useEffect, useState } from "react";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationCon = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
  setItems,
  items,
  firstPostIndex,
  lastPostIndex,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  const handleClick = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    const newItems = items?.slice(firstPostIndex, lastPostIndex);
    setItems(newItems);
  }, [currentPage]);

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => handleClick(page)}
            className={`${page == currentPage ? "active" : "!text-[#130D52]"} `}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationCon;
