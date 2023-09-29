import {
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Perfil = () => {
  return (
    <View style={{ flex: 1, justifyContent: "flex-start", paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingTop: 20,
        }}
      >
        <TouchableOpacity>
          <Image
            source={require("../assets/btnVoltar.png")}
            style={{ width: 20, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require("../assets/people_icon.png")}
            style={{ width: 20, height: 20, marginRight: 40 }}
          />
        </TouchableOpacity>
      </View>

      {/* Informação do perfil*/}
      <View
        style={{
          flex: 4,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#7A7A7A",
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}
      >
        <Image source={require("../assets/foto_perfil.png")} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "bold", paddingLeft: 5 }}>
            Matheus
          </Text>
          <Text style={{ fontSize: 12, paddingLeft: 5 }}>
            Designer, 23 anos
          </Text>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                backgroundColor: "#3291EA",
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>+ ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#3291EA",
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>+ ADD</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menu e as fotos postadas */}
      <View style={{ flex: 30 }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/menu_icon.png")}
            style={{ alignSelf: "flex-end", margin: 20 }}
          />
        </TouchableOpacity>

        <ScrollView>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              padding: 10,
            }}
          >
            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem1.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem2.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem3.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem4.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View style={{ width: "50%", height: 200 }}>
              <Image
                source={require("../assets/imagem5.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>

            <View
              style={{ width: "50%", height: 200 }}
            >
              <Image
                source={require("../assets/imagem6.png")}
                resizeMode="cover"
                style={{ width: "100%", height: 200 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10
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

export default Perfil;
