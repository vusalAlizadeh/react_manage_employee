import { useEffect, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";
const Pagination = ({ pages, setCurrentPage, employees, currentEmployee }) => {
  const { currentButton, setCurrentButton } = useContext(EmployeeContext);

  const pageNumber = [];

  for (let index = 1; index <= pages; index++) {
    pageNumber.push(index);
  }

  useEffect(() => {
    setCurrentPage(currentButton);
  }, [currentButton, setCurrentPage]);

  return (
    <div className="clearfix">
      <div className="hint-text">
        Showing <b>{currentEmployee.length}</b> out of <b>{employees.length}</b>{" "}
        entries
      </div>

      <ul className="pagination">
        <li
          className={`${
            currentButton === 1 ? "page-item disabled" : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) => (prev === 1 ? prev : prev - 1))
            }
          >
            Previous
          </a>
        </li>

        {pageNumber.map((page, index) => {
          return (
            <li
              key={index}
              className={`${
                currentButton === page ? "page-item active" : "page-item"
              }`}
            >
              <a
                href="#!"
                className="page-link"
                onClick={() => setCurrentButton(page)}
              >
                {page}
              </a>
            </li>
          );
        })}

        <li
          className={`${
            currentButton === pageNumber.length
              ? "page-item disabled"
              : "page-item"
          }`}
        >
          <a
            href="#!"
            className="page-link"
            onClick={() =>
              setCurrentButton((prev) =>
                prev === pageNumber.length ? prev : prev + 1
              )
            }
          >
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
