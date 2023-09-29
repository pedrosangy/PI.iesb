import { View, Text, Image, TextInput } from "react-native";

const Pesquisa = () => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", marginTop: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Image
          source={require("../assets/btnVoltar.png")}
          style={{ width: 20, height: 20, marginLeft: 12 }}
        />
      </View>

      <View style={{ position: "absolute", top: 40, width: "100%" }}>
        <TextInput
          placeholder={"Pesquisar"}
          style={{
            backgroundColor: "#D9D9D9",
            marginHorizontal: 20,
            padding: 6,
            borderRadius: 20,
          }}
        />
        <Image
          source={require("../assets/search_outline.png")}
          style={{
            width: 20,
            height: 20,
            position: "absolute",
            right: 25,
            top: 10,
            alignSelf: "flex-end",
          }}
        />
      </View>

      <View
        style={{
          width: "100%",
          height: 45,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image source={require("../assets/search_outline.png")} />
        <Image source={require("../assets/plus_circle.png")} />
        <Image source={require("../assets/person.png")} />
      </View>
    </View>
  );
};

export default Pesquisa;
