// SearchBar.js
import React from "react";
import {
  StyleSheet,
  TextInput,
  TextInputSubmitEditingEventData,
  View,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

interface SearchBarProps {
  readonly clicked: boolean;
  readonly searchPhrase: string;
  setSearchPhrase: (s: string) => void;
  setClicked: (b: boolean) => void;
  onSubmit: (data: TextInputSubmitEditingEventData) => void;
}

const SearchBar = (props: SearchBarProps) => {
  const { clicked, searchPhrase, setSearchPhrase, setClicked, onSubmit } =
    props;
  return (
    <View style={styles.container}>
      <View
        style={
          clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
        }
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="white"
          style={{ marginLeft: 1 }}
          onPress={() => {
            onSubmit({ text: searchPhrase });
            setSearchPhrase("");
          }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={"#ffffff70"}
          textAlign="right"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
          onSubmitEditing={(e) => {
            onSubmit(e.nativeEvent);
            setSearchPhrase("");
          }}
        />
      </View>
      {/* cross Icon, depending on whether the search bar is clicked or not */}
      {clicked && (
        <Entypo
          name="cross"
          size={20}
          color="black"
          style={{ padding: 1, marginRight: 10 }}
          onPress={() => {
            setSearchPhrase("");
            setClicked(false);
          }}
        />
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row-reverse",
    backgroundColor: "#d9dbda00",
    width: "95%",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row-reverse",
    width: "80%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginRight: 10,
    width: "90%",
    color: "#fff",
  },
  button: {
    color: "#fff",
  },
});
