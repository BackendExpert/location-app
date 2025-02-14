import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

export default function DashbaordScreen(){
    return (
        <View style={styles.container}>
            <View style={styles.searchbar}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})