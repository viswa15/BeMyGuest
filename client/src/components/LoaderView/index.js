import { GridLoader } from "react-spinners";

const LoaderView = () => {
  return (
    <div
      className="main-container not-found-container paddings innerWidth"
      style={{ height: "100%" }}
    >
      <GridLoader color="#fff" height="80" width="80" />
    </div>
  );
};

export default LoaderView;
