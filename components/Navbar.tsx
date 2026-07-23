"use client";


import {

  Bell,

  UserCircle

} from "lucide-react";



export default function Navbar() {


  return (

    <header

      className="
        h-16
        bg-white
        shadow-sm
        flex
        items-center
        justify-between
        px-6
      "

    >



      <div>


        <h2

          className="
            text-lg
            font-semibold
            text-gray-800
          "

        >

          SOLV Medical Support Portal

        </h2>


      </div>





      <div

        className="
          flex
          items-center
          gap-5
        "

      >



        <button

          className="
            text-gray-600
            hover:text-blue-600
          "

        >

          <Bell size={22}/>

        </button>





        <div

          className="
            flex
            items-center
            gap-2
            text-gray-700
          "

        >

          <UserCircle size={28}/>


          <span

            className="
              hidden
              md:block
            "

          >

            Admin

          </span>


        </div>



      </div>



    </header>

  );

}