import { StyleSheet, Text, View} from 'react-native';

export const RenderItens = (props) => {
    return <View style={styles.item}>          
                <Text>{props.universidade}, {props.pais}</Text>
            </View>
}

const styles = StyleSheet.create({
    item:{
        flexDirection: "row", 
        alignItems: "center",
        flex: 1,
        borderRadius:15, 
        borderColor: "black",
        borderWidth: 3,
        color:"white", 
        margin: 10, 
        padding: 10, 
        backgroundColor: "yellow"
      }
})