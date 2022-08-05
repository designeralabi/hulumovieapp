import { requestToBodyStream } from "next/dist/server/body-streams";
import Thumbnail from "../components/Thumbnail";
import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <FlipMove  className=" px-5 my-18 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
};
export default Results;
