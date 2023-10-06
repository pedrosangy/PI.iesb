import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";

const Pesquisa = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "space-between", marginTop: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require("../assets/btnVoltar.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 36 }}
          />
        </TouchableOpacity>
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
            top: 5,
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
        <TouchableOpacity onPress={()=>{navigation.navigate('Pesquisa')}}>
          <Image style={{ marginLeft: 10 }} source={require("../assets/search_outline.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Galeria')}}>
          <Image source={require("../assets/plus_circle.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate('Perfil')}}>
          <Image style={{ marginRight: 10 }} source={require("../assets/person.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Pesquisa;
