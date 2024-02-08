import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goal, setGoal] = useState("");
  const [listGoal, setListGoal] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleAddGoal = () => {
    setListGoal((prev) => [...prev, { goal: goal, id: listGoal?.length + 1, completed: false }]);
    setGoal("");
    handleClose('')
  };

  const handleDeleteGoal = (id) => {
    setListGoal((prev) => prev.filter((currentGoal) => currentGoal.id !== id));
  };

  const handleComplete = (id) =>{
    const tempList = []
    for(const i of listGoal){
      if(i.id === id){
        i.completed = true
      }
      tempList.push(i)
    }
    setListGoal(tempList)
  }

  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
    <StatusBar backgroundColor="white" />
    <View style={styles.container}>
      <Button color={"#04ba47"} title="Add Goal" onPress={()=> setShowModal(true)} />
      <GoalInput
        visible={showModal}
        handleClose={handleClose}
        handleAddGoal={handleAddGoal}
        goal={goal}
        setGoal={setGoal}
      />
      <View style={styles.listContainer}>
        <FlatList
          data={listGoal}
          renderItem={(itemData) => {
            return (
              <GoalItem
                itemData={itemData}
                handleDeleteGoal={handleDeleteGoal}
                handleComplete={handleComplete}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
    marginTop: 12,
  },
  listHeading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
