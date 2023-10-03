import {
  View,
  Text,
  TextInput,
  Image,
  ImageBackground,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const EditarPerfil = () => {
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
      <TouchableOpacity>
        <Image
          style={{ position: "relative", top: -220, left: -135 }}
          source={require("../assets/btnVoltar.png")}
        />
      </TouchableOpacity>
      <View
        style={{
          justifyContent: "space-around",
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
          Editar Perfil
        </Text>
        <Text style={{ alignSelf: "stretch",  }}>Usuário</Text>
        <TextInput
          style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch",padding: 5  }}
        />
        <Text style={{ alignSelf: "stretch" }}>Descrição</Text>
        <TextInput
          style={{ backgroundColor: "#D9D9D9", alignSelf: "stretch", padding: 5  }}
        />

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: "#D9D9D9",
              marginTop: 10,
              borderRadius: 20,
              padding: 5,
              paddingHorizontal: 30,
            }}
          >
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default EditarPerfil;
