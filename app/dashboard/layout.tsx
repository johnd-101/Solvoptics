import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/Sidebar";


export default async function DashboardLayout({
children
}:{
children:React.ReactNode
}){


const session = await auth();


if(!session){

redirect("/login");

}


return (

<div className="flex min-h-screen">


<Sidebar />


<div className="flex-1 p-6 bg-gray-100">

{children}

</div>


</div>

);


}