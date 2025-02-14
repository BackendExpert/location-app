import { Text, View, StyleSheet, ImageBackground } from "react-native";

export default function Index() {
    const bgImg = require("../assets/images/UOPWelcome.jpg");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ImageBackground source={bgImg} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>
          <View style={styles.headerWelcome}>
          <Text style={styles.headerText}>Welcome to</Text>
          </View>

        </View>

      </ImageBackground>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0, 
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  headerWelcome: {
    marginTop: 30
  },
  headerText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
})
