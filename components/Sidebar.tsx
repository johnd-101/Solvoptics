import Link from "next/link";
import LogoutButton from "@/components/auth/LogoutButton";


export default function Sidebar() {


return (

<div className="flex h-screen w-64 flex-col bg-white p-5 shadow-lg">


<h1 className="mb-8 text-2xl font-bold text-blue-600">
SOLV Support
</h1>



<nav className="space-y-3">


<Link
href="/dashboard"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Dashboard
</Link>



<Link
href="/dashboard/practices"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Practices
</Link>



<Link
href="/dashboard/support-calls"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Support Calls
</Link>



<Link
href="/dashboard/tasks"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Tasks
</Link>



<Link
href="/dashboard/appointments"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Appointments
</Link>



<Link
href="/dashboard/users"
className="block rounded-lg p-3 hover:bg-blue-100"
>
Users
</Link>



</nav>



<div className="mt-auto pt-6">


<LogoutButton />


</div>


</div>

);

}