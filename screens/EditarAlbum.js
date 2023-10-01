import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const EditarAlbum = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingTop: 36 }}>
      {/* Header */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/btnVoltar.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>Editor</Text>
        <TouchableOpacity>
          <Image
            source={require("../assets/upload_icon.png")}
            resizemode="contain"
            style={{ width: 20, height: 20, marginLeft: 36 }}
          />
        </TouchableOpacity>
      </View>
      {/* Imagem principal */}
      <View style={{ flex: 8, alignItems: "center" }}>
        <Image
          source={require("../assets/imagem_principal_galeria.png")}
          style={{ flex: 1 }}
        />
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/search_outline.png")}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            source={require("../assets/person.png")}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EditarAlbum;
