import { View, StyleSheet, Text, Image } from "react-native";

const Configuracoes = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.header}>
        <Image
          source={require("../assets/btnVoltar.png")}
          style={{ width: 30, height: 30, marginRight: 70 }}
          resizeMode="contain"
        />
        <Text style={{ marginRight: 85, fontWeight: "bold", fontSize: 15 }}>
          Configuracoes
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            backgroundColor: "#D9D9D9",
            padding: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: "bold",
          }}
        >
          Conta Privada
        </Text>
        <Text
          style={{
            backgroundColor: "#D9D9D9",
            padding: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: "bold",
          }}
        >
          Editar senha
        </Text>
        <Text
          style={{
            backgroundColor: "#D9D9D9",
            padding: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: "bold",
          }}
        >
          Excluir conta
        </Text>
        <Text
          style={{
            backgroundColor: "#D9D9D9",
            padding: 5,
            marginHorizontal: 20,
            marginVertical: 5,
            fontWeight: "bold",
          }}
        >
          Sair
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          height: 45,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ marginLeft: 10 }}
          source={require("../assets/search_outline.png")}
        />
        <Image source={require("../assets/plus_circle.png")} />
        <Image source={require("../assets/person.png")} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 22,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Configuracoes;
