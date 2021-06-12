import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import UserTable from "./Table/UserTable";

const Body = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <UserTable userData={data} />
      </div>
    );
  }
};

Body.propTypes = {
  userData: PropTypes.object,
};
export default Body;
