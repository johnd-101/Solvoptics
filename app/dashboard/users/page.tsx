import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, Pencil } from "lucide-react";


export default async function UsersPage(){


const users = await prisma.user.findMany({

orderBy:{
createdAt:"desc"
}

});


return (

<main className="space-y-6">


<div className="
rounded-2xl
bg-gradient-to-r
from-blue-600
via-indigo-600
to-purple-700
p-8
text-white
shadow-xl
flex
justify-between
items-center
">


<div>

<h1 className="text-4xl font-bold">
👥 Users
</h1>

<p className="mt-2 text-blue-100">
Manage system users
</p>

</div>


<Link

href="/dashboard/users/create"

className="
flex
items-center
gap-2
rounded-xl
bg-white
px-5
py-3
font-semibold
text-indigo-700
"

>

<Plus size={20}/>

New User

</Link>


</div>




<div className="
rounded-2xl
bg-white
shadow-xl
overflow-hidden
">


<table className="w-full">


<thead className="bg-gray-100">

<tr>

<th className="p-4 text-left">
Name
</th>

<th className="p-4 text-left">
Email
</th>

<th className="p-4 text-left">
Role
</th>

<th className="p-4 text-left">
Actions
</th>

</tr>

</thead>


<tbody>

{
users.map((user)=>(

<tr
key={user.id}
className="border-t"
>


<td className="p-4">

{user.firstName} {user.lastName}

</td>


<td className="p-4">

{user.email}

</td>


<td className="p-4">

<span className="
rounded-full
bg-blue-100
px-3
py-1
text-sm
text-blue-700
">

{user.role}

</span>

</td>


<td className="p-4">

<Link
href={`/dashboard/users/${user.id}`}
className="text-blue-600"
>

<Pencil size={18}/>

</Link>

</td>


</tr>

))

}


</tbody>


</table>


</div>


</main>

);

}