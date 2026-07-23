"use client";


import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage(){


const router = useRouter();



const [email,setEmail] =
useState("");

const [password,setPassword] =
useState("");

const [error,setError] =
useState("");

const [loading,setLoading] =
useState(false);



async function login(
e:React.FormEvent
){

e.preventDefault();


setError("");

setLoading(true);



const result =
await signIn(
"credentials",
{

email,

password,

redirect:false

}

);



setLoading(false);



if(result?.error){


setError(
"Invalid email or password"
);


console.log(
result.error
);


return;


}



router.push(
"/dashboard"
);



}



return (


<div className="
min-h-screen
flex
items-center
justify-center
bg-gray-100
">


<form

onSubmit={login}

className="
bg-white
p-8
rounded-lg
shadow-md
w-96
space-y-5
"

>


<h1 className="
text-2xl
font-bold
text-center
">

Solv Support Login

</h1>



{
error &&

<div className="
bg-red-100
text-red-700
p-3
rounded
">

{error}

</div>

}




<input

type="email"

placeholder="Email"

value={email}

onChange={
e=>setEmail(e.target.value)
}

className="
w-full
border
rounded
p-3
"

/>




<input

type="password"

placeholder="Password"

value={password}

onChange={
e=>setPassword(e.target.value)
}

className="
w-full
border
rounded
p-3
"

/>



<button

disabled={loading}

className="
w-full
bg-blue-600
text-white
rounded
p-3
hover:bg-blue-700
"

>


{
loading
?
"Logging in..."
:
"Login"
}


</button>



</form>


</div>


);


}