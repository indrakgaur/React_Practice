import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>OOPS! Page Not Found</h1>
      <h2>Error code : {err.status}</h2>
    </div>
  );
};

export default Error;
