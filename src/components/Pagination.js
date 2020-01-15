import React from 'react';
import '../sass/App.scss';
import '../sass/Pagination.scss';

function Pagination({cardsPerPage, totalCards, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <div>
        <ul className="pagination">
            {pageNumbers.map(number => (
                <li key={number}>
                    <a onClick={() => paginate(number)} href="#">
                        {number}
                    </a>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default Pagination;
