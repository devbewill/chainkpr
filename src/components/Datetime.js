import { useState } from "react";
import { parse, formatDistance } from "date-fns";

export default function Datetime() {
  const [date, setDate] = useState("2023-10-09");

  const formattedDate = () => {
    const inputDate = parse(date, "yyyy-mm-dd");
    const currentDate = new Date();
    const differenceInMillis = currentDate.getTime() - inputDate.getTime();
    return formatDistance(differenceInMillis, { addSuffix: true });
  };

  return (
    <div>
      <p>Formatted date: {formattedDate()}</p>
    </div>
  );
}
