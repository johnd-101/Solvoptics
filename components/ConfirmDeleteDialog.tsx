"use client";

import { X } from "lucide-react";


interface ConfirmDeleteDialogProps {

  open: boolean;

  title?: string;

  message?: string;

  onConfirm: () => void;

  onCancel: () => void;

}



export default function ConfirmDeleteDialog({

  open,

  title = "Delete Record",

  message = "Are you sure you want to delete this record?",

  onConfirm,

  onCancel,

}: ConfirmDeleteDialogProps) {


  if (!open) {
    return null;
  }


  return (

    <div
      className="
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
      "
    >


      <div
        className="
          bg-white
          rounded-lg
          shadow-lg
          w-full
          max-w-md
          p-6
        "
      >


        <div
          className="
            flex
            items-center
            justify-between
            mb-4
          "
        >

          <h2
            className="
              text-lg
              font-semibold
              text-gray-800
            "
          >
            {title}
          </h2>


          <button
            onClick={onCancel}
            className="
              text-gray-500
              hover:text-gray-800
            "
          >

            <X size={20}/>

          </button>


        </div>



        <p
          className="
            text-gray-600
            mb-6
          "
        >
          {message}
        </p>




        <div
          className="
            flex
            justify-end
            gap-3
          "
        >

          <button

            onClick={onCancel}

            className="
              px-4
              py-2
              rounded-md
              border
              text-gray-700
              hover:bg-gray-100
            "

          >

            Cancel

          </button>



          <button

            onClick={onConfirm}

            className="
              px-4
              py-2
              rounded-md
              bg-red-600
              text-white
              hover:bg-red-700
            "

          >

            Delete

          </button>


        </div>


      </div>


    </div>

  );
}