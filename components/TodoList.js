import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import colors from "../Colors";
import TodoModal from "./TodoModal";

export default class TodoList extends Component {
  state = {
    showListVisible: false,
  };

  toogleListModal() {
    this.setState({ showListVisible: !this.state.showListVisible });
  }

  render() {
    const list = this.props.list;

    const completedCount = list.todos.filter((todo) => todo.completed).length;
    const remaningCount = list.todos.length - completedCount;

    return (
      <View>
        <Modal
          animationType="slide"
          visible={this.state.showListVisible}
          onRequestClose={() => this.toogleListModal()}
        >
          <TodoModal
            list={list}
            closeModal={() => this.toogleListModal()}
            updateList={this.props.updateList}
          />
        </Modal>
        <TouchableOpacity
          style={[styles.listContainer, { backgroundColor: list.color }]}
          onPress={() => this.toogleListModal()}
        >
          <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
          </Text>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{remaningCount}</Text>
            <Text style={styles.subtitle}>Remaning</Text>
          </View>

          <View style={{ alignItems: "center" }}>
            <Text style={styles.count}>{completedCount}</Text>
            <Text style={styles.subtitle}>Completed</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

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
