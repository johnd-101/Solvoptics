interface DashboardCardProps {
  title: string;
  value: string | number;
  description: string;
}


export default function DashboardCard({
  title,
  value,
  description,
}: DashboardCardProps) {

  return (

    <div
      className="
        bg-white
        rounded-lg
        shadow-sm
        border
        p-5
        hover:shadow-md
        transition
      "
    >

      <h3
        className="
          text-sm
          font-medium
          text-gray-500
          mb-2
        "
      >
        {title}
      </h3>


      <div
        className="
          text-3xl
          font-bold
          text-gray-800
          mb-2
        "
      >
        {value}
      </div>


      <p
        className="
          text-sm
          text-gray-500
        "
      >
        {description}
      </p>


    </div>

  );
}