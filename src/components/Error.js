// Used for handling the error we can get the status and other functionaties with this
import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Oops!! </h1>
      <h2> Something went wrong </h2>
      <h3>{err.status + " Error : " + err.statusText}</h3>
    </>
  );
};

export default Error;
