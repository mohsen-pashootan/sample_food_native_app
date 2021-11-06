import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleTermSubmit = async (searchTerm) => {
    let response;
    try {
      response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResult(response.data.businesses);
      // console.log("# response", response);
    } catch (error) {
      setErrorMessage("SomeThing went wrong");
    }
  };

  useEffect(() => {
    handleTermSubmit("pasta");
  }, []);
  return [handleTermSubmit, results, errorMessage];
};
