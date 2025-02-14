import { Link } from "expo-router";
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity } from "react-native";

export default function Index() {
    const bgImg = require("../assets/images/UOPWelcome.jpg");
    const imgLogo = require("../assets/images/LogoUOP.png");
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

          <View style={styles.bodyWelcome}> 
            <Image source={imgLogo} style={styles.logoStyle}/>
            <Text style={styles.bodyText}>University of Peradeniya</Text>

            <Link href={'/dashbaord'} style={styles.welcomeBtn}>
                <Text style={styles.welcomeBtnText}>Get Started</Text>
            </Link>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Currently v1.0.0</Text>
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
  },
  bodyWelcome: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  bodyText: {
    color: 'white',
    marginTop: 40,
    fontSize: 30
  },
  welcomeBtn: {
    backgroundColor: '#560606',
    padding: 20,
    borderRadius: 100,
    marginBottom: 12,
    marginTop: 20,
    width: '80%',
  },
  welcomeBtnText: {
    color: '#e8b910',
    textAlign: 'center',
    fontSize: 20
  },
  logoStyle: {
    width: '100%',
    height: '55%',
    marginHorizontal: 20
  },
  footer: {
    marginTop: 40,
  },
  footerText: {
    color: "rgba(255, 255, 255, 0.6)",
    textAlign: 'center'   
  }
})
