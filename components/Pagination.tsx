"use client";


interface PaginationProps {

  currentPage: number;

  totalPages: number;

  onPageChange: (page: number) => void;

}



export default function Pagination({

  currentPage,

  totalPages,

  onPageChange,

}: PaginationProps) {


  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );


  return (

    <div
      className="
        flex
        items-center
        justify-center
        gap-2
        mt-6
      "
    >


      <button

        disabled={currentPage === 1}

        onClick={() =>
          onPageChange(currentPage - 1)
        }

        className="
          px-3
          py-2
          border
          rounded-md
          text-gray-700
          disabled:opacity-50
          hover:bg-gray-100
        "

      >

        Previous

      </button>




      {pages.map((page) => (

        <button

          key={page}

          onClick={() =>
            onPageChange(page)
          }

          className={`
            px-3
            py-2
            rounded-md
            border
            ${
              currentPage === page
                ? "bg-blue-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }
          `}

        >

          {page}

        </button>

      ))}





      <button

        disabled={currentPage === totalPages}

        onClick={() =>
          onPageChange(currentPage + 1)
        }

        className="
          px-3
          py-2
          border
          rounded-md
          text-gray-700
          disabled:opacity-50
          hover:bg-gray-100
        "

      >

        Next

      </button>



    </div>

  );
}