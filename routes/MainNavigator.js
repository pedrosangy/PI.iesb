import React from "react";
import { NavigationContainer } from "@react-navigation/native";
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
import Menu from "../screens/Menu";

export const AuthContext = React.createContext();

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE_TOKEN":
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case "SIGN_IN":
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case "SIGN_OUT":
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync("userToken");
      } catch (e) {
        //
      }
      dispatch({ type: "RESTORE_TOKEN", token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
      signOut: () => dispatch({ type: "SIGN_OUT" }),
      signUp: async (data) => {
        dispatch({ type: "SIGN_IN", token: "dummy-auth-token" });
      },
    }),
    []
  );
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <>
              <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{
                  headerShown: false,
                  animationTypeForReplace: state.isSignout ? "pop" : "push",
                }}
              />
              <Stack.Screen
                name="EsqueciASenha"
                component={EsqueciASenha}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Perfil"
                component={Perfil}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Amigos"
                component={Amigos}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TelaAmigo"
                component={TelaAmigo}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Mensagem"
                component={Mensagem}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Pesquisa"
                component={Pesquisa}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Galeria"
                component={Galeria}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Arquivadas"
                component={Arquivadas}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Configuracoes"
                component={Configuracoes}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditarPerfil"
                component={EditarPerfil}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="EditarSenha"
                component={EditarSenha}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default MainNavigator;
