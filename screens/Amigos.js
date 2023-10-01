import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const Amigos = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", paddingTop: 36 }}>
      {/* Header */}
      <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableOpacity>
          <Image
            source={require("../assets/btnVoltar.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 36 }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: "bold", fontSize: 16, marginLeft: 110 }}>
          Amigos
        </Text>
      </View>
      {/* Barra de pesquisa */}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 12,
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="pesquisa"
          style={{
            backgroundColor: "#D9D9D9",
            width: "90%",
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderRadius: 10,
          }}
        />
        <TouchableOpacity>
          <Image
            source={require("../assets/search_outline.png")}
            resizeMode="contain"
            style={{ marginRight: 4 }}
          />
        </TouchableOpacity>
      </View>
      {/* parte que lista os amigos */}
      <View style={{ flex: 12, marginHorizontal: 12 }}>
        <ScrollView>
          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flex: 1, flexDirection: "row", padding: 12, justifyContent: 'space-between' }}>
            <TouchableOpacity style={{flex: 1, flexDirection: "row" }}>
              <Image source={require("../assets/amigo_icon.png")} />
              <Text style={{ fontWeight: "bold", marginLeft: 12 }}>Natália</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{ fontWeight: "bold" }}>Mensagem</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      {/* Footer */}
      <View
        style={{
          flex: 1,
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ marginLeft: 10 }}
            source={require("../assets/search_outline.png")}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{ marginRight: 10 }}
            source={require("../assets/person.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Amigos;
