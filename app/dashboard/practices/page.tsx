import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { Plus, Pencil } from "lucide-react";


export default async function PracticesPage(){


const practices = await prisma.practice.findMany({

orderBy:{
createdAt:"desc"
}

});


return (

<main className="space-y-6">


<div className="
rounded-2xl
bg-gradient-to-r
from-green-600
to-emerald-700
p-8
text-white
shadow-xl
flex
justify-between
items-center
">


<div>

<h1 className="text-4xl font-bold">
🏥 Practices
</h1>


<p className="mt-2 text-green-100">
Manage optometry practices
</p>

</div>



<Link

href="/dashboard/practices/new"

className="
flex
items-center
gap-2
rounded-xl
bg-white
px-5
py-3
font-semibold
text-green-700
"

>

<Plus size={20}/>

New Practice

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
Practice Name
</th>


<th className="p-4 text-left">
Contact
</th>


<th className="p-4 text-left">
Email
</th>


<th className="p-4 text-left">
Actions
</th>


</tr>

</thead>



<tbody>


{
practices.map((practice)=>(


<tr
key={practice.id}
className="border-t"
>

<td className="p-4">
{practice.practiceName}
</td>


<td className="p-4">
{practice.phone || "-"}
</td>


<td className="p-4">
{practice.email || "-"}
</td>


<td className="p-4">

<Link

href={`/dashboard/practices/${practice.id}`}

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

