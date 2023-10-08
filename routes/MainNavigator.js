import { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Perfil from "../screens/Perfil";
import EsqueciASenha from "../screens/EsqueciASenha";
import Cadastro from "../screens/Cadastro";
import Amigos from "../screens/Amigos";
import Arquivadas from "../screens/Arquivadas";
import Configuracoes from "../screens/Configuracoes";
import EditarPerfil from "../screens/EditarPerfil";
import EditarSenha from "../screens/EditarSenha";
import Galeria from "../screens/Galeria";
import GetStarted from "../screens/GetStarted";
import Mensagem from "../screens/Mensagem";
import Pesquisa from "../screens/Pesquisa";
import TelaAmigo from "../screens/TelaAmigo";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [logado, setLogado] = useState(true);
  return (
    <Stack.Navigator>
      {!logado ? (
        <>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="EsqueciASenha" component={EsqueciASenha} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="Amigos" component={Amigos} />
          <Stack.Screen name="TelaAmigo" component={TelaAmigo} />
          <Stack.Screen name="Mensagem" component={Mensagem} />
          <Stack.Screen name="Pesquisa" component={Pesquisa} />
          <Stack.Screen name="Galeria" component={Galeria} />
          <Stack.Screen name="Arquivadas" component={Arquivadas} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} />
          <Stack.Screen name="EditarPerfil" component={EditarPerfil} />
          <Stack.Screen name="EditarSenha" component={EditarSenha} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default MainNavigator;
