import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "./../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "./../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [handleTermSubmit, results, errorMessage] = useResults();

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={handleTermChange}
        onTermSubmit={() => handleTermSubmit(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
      <ResultsList
        results={filterResultsByPrice("$$$")}
        title="Cost Effective"
      />
      {/* <Text>We have found {results.length} results</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
