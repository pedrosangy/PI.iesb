import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
} from "react-native";

const EsqueciASenha = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      source={require("../assets/telaBackground1.png")}
    >
      <Image
        style={{ position: "relative", top: -220, left: -135 }}
        source={require("../assets/btnVoltar.png")}
      />
      <View
        style={{
          alignItems: "center",
          backgroundColor: "white",
          width: 270,
          height: 270,
          padding: 12,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            padding: 10,
            borderRadius: 27,
            backgroundColor: "#D9D9D9",
            textAlign: "center",
          }}
        >
          Esqueci minha senha
        </Text>
        <Text style={{ alignSelf: "stretch", marginTop: 50 }}>E-mail</Text>
        <TextInput
          style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch" }}
        />

        <Text
          style={{
            backgroundColor: "#D9D9D9",
            marginTop: 70,
            borderRadius: 20,
            padding: 5,
            paddingHorizontal: 30,
          }}
        >
          Enviar
        </Text>
      </View>
    </ImageBackground>
  );
};

export default EsqueciASenha;
