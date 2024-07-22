import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './assets/components/GoalItem';
 import GoalInput from './assets/components/GoalInput';
 import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisable, setModalIsVisable] = useState(false);
   
function startAddGoalHandler(){
  setModalIsVisable(true);

}
function endAddGoalHandler(){
  setModalIsVisable(false);

}
  function addGoalHandler  (enteredGoalText) {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), text: enteredGoalText }
    ]);
    endAddGoalHandler(); 
  };

  function deleteGoalHandler(id) {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal)=> goal.id !==id);
});
  }
  return (
  <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title = "Add New Goal"
       color="purple"
       onPress={startAddGoalHandler}/>
      <GoalInput visible = {modalIsVisable}
       onAddGoal={addGoalHandler} 
       onCancel = {endAddGoalHandler}
       />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem 
            text= {itemData.item.text} 
            id={itemData.item.id}
            onDeleteItem={deleteGoalHandler}/>
          }}
          keyExtractor={(item,index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    padding: 50,
    flex: 1,
  },
  
  goalsContainer: {
    flex: 5,
  },  
});
