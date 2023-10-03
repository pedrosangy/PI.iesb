import {
  View,
  Text,
  Platform,
  StatusBar,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Cadastro = () => {
  return (
    <ImageBackground
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
      source={require('../assets/telalogin.png')}>
      <View
        style={{
          flex: 1,
          marginTop: 30,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../assets/btnVoltar.png')}
            style={{ width: 20, height: 20, marginRight: 100, marginLeft: 40 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{ flex: 10, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'white',
            width: 270,
            height: 300,
            top: 20,
            padding: 12,
            borderRadius: 20,
          }}>
          <Text
            style={{
              padding: 10,
              borderRadius: 27,
              backgroundColor: '#D9D9D9',
              textAlign: 'center',
            }}>
            Cadastro
          </Text>
          <Text style={{ alignSelf: 'stretch' }}>Usuário</Text>
          <TextInput
            style={{ backgroundColor: '#D9D9D9', alignSelf: 'stretch' }}
          />
          <Text style={{ alignSelf: 'stretch' }}>E-mail</Text>
          <TextInput
            style={{ backgroundColor: '#D9D9D9', alignSelf: 'stretch' }}
          />
          <Text style={{ alignSelf: 'stretch' }}>Senha</Text>
          <TextInput
            style={{ backgroundColor: '#D9D9D9', alignSelf: 'stretch' }}
          />
          <Text style={{ alignSelf: 'stretch' }}>Digite a senha novamente</Text>
          <TextInput
            style={{ backgroundColor: '#D9D9D9', alignSelf: 'stretch' }}
          />
          <TouchableOpacity>
            <Text
              style={{
                marginTop: 10,
                backgroundColor: '#D9D9D9',
                textAlign: 'center',
                borderRadius: 20,
                padding: 5,
                paddingHorizontal: 30,
              }}>
              Concluir
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Cadastro;
