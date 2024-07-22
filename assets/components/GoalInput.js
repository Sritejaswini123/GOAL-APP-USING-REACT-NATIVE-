import { StyleSheet, View, TextInput, Button,Modal ,} from "react-native";
import { useState } from "react";


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <View style= {styles.buttonContainer}>
        <View style = {styles.button}>
      <Button title="Add Goal" onPress={addGoalHandler}  color="green"/>
      </View>
      <View style = {styles.button}>
      <Button title="Cancel" onPress={props.onCancel} color= 'red'/>
      </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"lightblue",

  },
  textInput: {
    borderColor: 'black',
    backgroundColor :"#e4d0ff",
    borderWidth: 1,
    padding: 10,
    width: '70%',
    borderRadius:6,
    padding:16,

  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button:{
    width:100,
    marginHorizontal: 8,
  },

});
