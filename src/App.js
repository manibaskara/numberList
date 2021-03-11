import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
export const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  let fontSize = 2;
  const [sum] = useState(numbers.reduce((a, b) => a + b, 0));

  const renderNumber = (number) => {
    fontSize = ++fontSize;
    return <Text style={{ fontSize: fontSize, marginTop: 8 }}>{number}</Text>;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={numbers}
        keyExtractor={(item) => "key" + item}
        renderItem={({ item }) => renderNumber(item)}
        ListFooterComponent={() => <Text style={styles.total}>{sum}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  total: {
    fontSize: 20,
    marginTop: 8
  }
});

export default App;
