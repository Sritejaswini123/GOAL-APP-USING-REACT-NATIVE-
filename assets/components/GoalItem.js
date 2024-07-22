
import { StyleSheet ,View,Text, Pressable } from "react-native";
function GoalItem(props) {

 return(
<View style={styles.goalItem}>
<Pressable
android_ripple={{color:'#dddddd'}}
 onPress={props.onDeleteItem.bind(this,props.id)}>
<Text style={styles.goalText}>{props.text}</Text>
</Pressable>
</View>

)
}
export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 10,
        backgroundColor: 'lightblue',
        borderColor: 'black',
        borderWidth: 1,
      },
      goalText: {
        color: 'black',
        padding: 8 ,
      },
})
