import React from "react";
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native";

const GoalInput = (props) => {
  const { goal, handleAddGoal, setGoal, visible, handleClose } = props;
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.textInputContainer}>
        <Image style={styles.imgStyle} source={require('../assets/images/goal.png')} />
        <TextInput
          value={goal}
          style={styles.textInput}
          placeholder="Enter your goal here!"
          onChangeText={(text) => setGoal(text)}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonStyle}>
            <Button color={"#cc0066"} title="Cancel" onPress={handleClose} />
          </View>
          <View style={styles.buttonStyle}>
            <Button title="Add Goal" onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    backgroundColor: "#025dad",
  },
  textInput: {
    borderColor: "white",
    borderWidth: 2,
    padding: 10,
    width: "90%",
    marginRight: 8,
    borderRadius: 10,
    backgroundColor: "#cce6ff",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  buttonStyle:{
    width: '42%',
    marginHorizontal: 10,
  },
  imgStyle:{
    height: 150,
    width: 150,
    marginBottom: 20
  }
});

export default GoalInput;
