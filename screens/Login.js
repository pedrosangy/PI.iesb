import { View, Text, TextInput, Image, ImageBackground, Platform, StatusBar } from "react-native";


const Login = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      source={require("../assets/telalogin.png")}
    >
        <Image
                style={{ position: 'relative', top: -220, left: -135  }}
                source={require('../assets/btnVoltar.png')} 
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
            Login
            </Text>
            <Text style={{ alignSelf: "stretch" }}>Usuário</Text>
            <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch" }}
            />
            <Text style={{ alignSelf: "stretch" }}>Senha</Text>
            <TextInput
            style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch" }}
            />
            <Text
            style={{
                alignSelf: "flex-start",
                backgroundColor: "#D9D9D9",
                marginTop: 10,
                borderRadius: 27,
                padding: 5,
                paddingHorizontal: 30,
                
            }}
            >
            Esqueceu a senha?
            </Text>
            <Text
            style={{
                alignSelf: "flex-start",
                backgroundColor: "#D9D9D9",
                marginTop: 10,
                borderRadius: 27,
                padding: 5,
                paddingHorizontal: 53,
            }}
            >
            Cadastre-se
            </Text>

            <Text
            style={{
                backgroundColor: "#D9D9D9",
                marginTop: 10,
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
            }}
            >
            Entrar
            </Text>
        </View>
    </ImageBackground>
  );
};

export default Login;
