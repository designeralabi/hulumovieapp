import Thumbnail from "../components/Thumbnail";
// import FlipMove from "react-flip-move";

const Results = ({ results }) => {
  return (
    <div  className=" px-5 my-18 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  );
};
export default Results;
