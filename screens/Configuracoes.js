import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const Configuracoes = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 40,
      }}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../assets/btnVoltar.png')}
            style={{ width: 20, height: 20, marginRight: 90, marginLeft: 30 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={{ marginRight: 125, fontWeight: 'bold', fontSize: 15 }}>
          Configuracoes
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Conta Privada
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Editar senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Excluir conta
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: '#D9D9D9',
              padding: 10,
              marginHorizontal: 20,
              marginVertical: 5,
              fontWeight: 'bold',
            }}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: '100%',
          height: 45,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Image
            style={{ marginLeft: 10 }}
            source={require('../assets/search_outline.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image source={require('../assets/plus_circle.png')} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Image
            style={{ marginRight: 10 }}
            source={require('../assets/person.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 22,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Configuracoes;
