import { parseISO, formatDistance, format } from "date-fns";

export default function Datetime(props) {
  const { dateToParse } = props;

  const formattedDate = () => {
    const inputDate = parseISO(dateToParse, "yyyy-mm-dd");
    const currentDate = new Date();
    // return formatDistance(currentDate, inputDate); (.. ago)
    return format(new Date(inputDate), "MMM dd, yy");
  };

  return <p className="text-xl font-bold pb-2">{formattedDate()}</p>;
}
