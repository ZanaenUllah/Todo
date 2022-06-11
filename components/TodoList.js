import React from "react";
import { StyleSheet, Text, View } from "react-native";
import colors from "../Colors";

export default TodoList = ({ list }) => {
  const completedCount = list.todos.filter((todo) => todo.completed).length;
  const remaningCount = list.todos.length - completedCount;

  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.listTitle} numberOfLines={1}>
        {list.name}
      </Text>

      <View style={{ alignItems: "center" }}>
        <Text style={styles.count}>{completedCount}</Text>
        <Text style={styles.subtitle}>Completed</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <Text style={styles.count}>{remaningCount}</Text>
        <Text style={styles.subtitle}>Remaning</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginHorizontal: 12,
    alignItems: "center",
    width: 200,
  },
  listTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: colors.white,
    marginBottom: 14,
  },
  count: {
    fontSize: 48,
    fontWeight: "200",
    color: colors.white,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "700",
    color: colors.white,
  },
});