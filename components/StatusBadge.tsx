interface StatusBadgeProps {
  status: string;
}


export default function StatusBadge({
  status,
}: StatusBadgeProps) {


  const getStatusStyle = () => {

    switch (status.toLowerCase()) {

      case "open":
      case "pending":
      case "scheduled":
        return "bg-yellow-100 text-yellow-700";


      case "in progress":
        return "bg-blue-100 text-blue-700";


      case "completed":
      case "closed":
        return "bg-green-100 text-green-700";


      case "cancelled":
        return "bg-red-100 text-red-700";


      default:
        return "bg-gray-100 text-gray-700";

    }

  };


  return (

    <span
      className={`
        px-3
        py-1
        rounded-full
        text-xs
        font-medium
        ${getStatusStyle()}
      `}
    >
      {status}
    </span>

  );
}