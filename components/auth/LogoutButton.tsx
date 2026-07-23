"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";


export default function LogoutButton(){


return (

<button

onClick={() =>
signOut({
callbackUrl:"/login"
})
}

className="
flex
w-full
items-center
gap-3
rounded-lg
bg-red-600
px-4
py-3
text-white
hover:bg-red-700
"

>

<LogOut size={20}/>

Logout

</button>

);

}