import { Artist, Track } from "@spotify-dash/types";
import { ChartItem } from "./ChartItem/ChartItem";
import { OptionSetter } from "./OptionSetter/OptionSetter";
import { useTopChart } from "../../../hooks";
import { ChartTypes } from "../../../types";

interface TopChartProps {
  type: ChartTypes;
}

export const TopChart: React.FC<TopChartProps> = ({ type }) => {
  const { items, loading, error, options, setOptions } = useTopChart(type);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!items) return <div>No {type}</div>;

  return (
    <>
      <OptionSetter options={options} setOptions={setOptions} />
      <ol>
        {items.length > 0 &&
          items.map((item: Track | Artist) => (
            <ChartItem key={item.id} item={item} />
          ))}
      </ol>
    </>
  );
};
