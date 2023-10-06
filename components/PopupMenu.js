import React, { useState } from "react";
import { TouchableOpacity, View, Image, Modal, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const PopupMenu = ({ navigation }) => {
  const [visible, setVisible] = useState(false);
  const options = [
    {
      title: "Configurações",
      action: () => navigation.navigate("Configuracoes"),
    },
    {
      title: "Arquivadas",
      action: () => navigation.navigate("Arquivadas"),
    },
    {
      title: "Editar Perfil",
      action: () => navigation.navigate('EditarPerfil'),
    },
  ];
  return (
    <>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <Image
          source={require("../assets/menu_icon.png")}
          style={{ margin: 20 }}
        />
      </TouchableOpacity>
      <Modal transparent visible={visible}>
        <View style={{ flex: 1 }} onTouchStart={() => setVisible(false)}>
          <View
            style={{
              borderRadius: 22,
              borderColor: "#333",
              borderWidth: 1,
              backgroundColor: "#D9D9D9",
              paddingHorizontal: 20,
              paddingVertical: 30,
              position: "absolute",
              top: 56,
              right: 10,
            }}
          >
            {options.map((op, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => op.action()}
                style={{
                  backgroundColor: "#fff",
                  borderColor: "#000",
                  borderWidth: 1,
                  marginVertical: 5,
                  padding: 5,
                }}
              >
                <Text>{op.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PopupMenu;
