import { auth } from "@/auth";
import {redirect} from "next/navigation";
import {isAdmin} from "@/lib/permissions";


export default async function UsersLayout({

children

}:{
children:React.ReactNode
}){


const session =
await auth();



if(
!session ||
!isAdmin(
session.user.role
)
){

redirect("/dashboard");

}



return children;


}
