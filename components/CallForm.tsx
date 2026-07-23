"use client";


import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Route } from "next";



interface Practice {

  id:number;

  practiceName:string;

}



interface User {

  id:number;

  firstName:string;

  lastName:string;

}





interface CallFormProps {


  practices: Practice[];


  users: User[];


}







export default function CallForm({

  practices,

  users

}: CallFormProps) {



  const router =
    useRouter();



  const [loading,setLoading] =
    useState(false);





  const [form,setForm] =
    useState({

      practiceId:"",

      userId:"",

      subject:"",

      description:"",

      priority:"Medium",

      status:"Open"

    });








  function updateField(

    e:React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >

  ){



    setForm({

      ...form,

      [e.target.name]:

        e.target.value

    });


  }







  async function submit(

    e:React.FormEvent

  ){


    e.preventDefault();


    setLoading(true);





    await fetch(

      "/api/calls",

      {

        method:"POST",


        headers:{

          "Content-Type":
            "application/json"

        },


        body:

          JSON.stringify(form)

      }

    );





router.push(
  "/dashboard/calls" as Route
);



    router.refresh();



  }









  return (


    <form

      onSubmit={submit}

      className="
        bg-white
        shadow
        rounded-lg
        p-6
        space-y-4
      "

    >






      <select

        name="practiceId"

        value={form.practiceId}

        onChange={updateField}

        required

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      >


        <option value="">

          Select Practice

        </option>



        {
          practices.map((practice)=>(


            <option

              key={practice.id}

              value={practice.id}

            >

              {practice.practiceName}

            </option>


          ))
        }



      </select>









      <select

        name="userId"

        value={form.userId}

        onChange={updateField}

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      >


        <option value="">

          Assign User

        </option>




        {
          users.map((user)=>(


            <option

              key={user.id}

              value={user.id}

            >

              {
                user.firstName
              }{" "}
              {
                user.lastName
              }

            </option>


          ))
        }



      </select>









      <input

        name="subject"

        placeholder="Subject"

        value={form.subject}

        onChange={updateField}

        required

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      />









      <textarea

        name="description"

        placeholder="Description"

        value={form.description}

        onChange={updateField}

        rows={5}

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      />








      <select

        name="priority"

        value={form.priority}

        onChange={updateField}

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      >


        <option value="Low">

          Low

        </option>



        <option value="Medium">

          Medium

        </option>



        <option value="High">

          High

        </option>



        <option value="Critical">

          Critical

        </option>



      </select>








      <select

        name="status"

        value={form.status}

        onChange={updateField}

        className="
          w-full
          border
          rounded
          px-3
          py-2
        "

      >


        <option value="Open">

          Open

        </option>



        <option value="In Progress">

          In Progress

        </option>



        <option value="Closed">

          Closed

        </option>



      </select>








      <button

        disabled={loading}

        className="
          bg-blue-600
          text-white
          px-5
          py-2
          rounded
          hover:bg-blue-700
        "

      >


        {
          loading
            ? "Saving..."
            : "Save Call"
        }


      </button>





    </form>


  );

}