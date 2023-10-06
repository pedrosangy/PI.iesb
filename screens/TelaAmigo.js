import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';

import PopupMenu from '../components/PopupMenu';

const TelaAmigo = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', paddingTop: 20 }}>
      {/* Header */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingTop: 30,
        }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image
            source={require('../assets/btnVoltar.png')}
            style={{ width: 15, height: 20, marginLeft: 40 }}
          />
        </TouchableOpacity>
        <PopupMenu />
      </View>

      {/* Informação do perfil*/}
      <View
        style={{
          flex: 4,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomColor: '#7A7A7A',
          borderBottomWidth: 1,
          paddingBottom: 10,
        }}>
        <Image source={require('../assets/natalia.png')} />
        <View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', paddingLeft: 5 }}>
            Natália
          </Text>
          <Text style={{ fontSize: 12, paddingLeft: 5 }}>Artista, 22 anos</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#3291EA',
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <Text style={{ fontWeight: 'bold', color: 'white' }}>+ ADD</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Mensagem')}
              style={{
                padding: 5,
                marginHorizontal: 5,
                borderRadius: 5,
                borderColor: 'black',
                borderWidth: 1,
              }}>
              <Text>Mensagem</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Menu e as fotos postadas */}
      <View style={{ flex: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ margin: 20, marginLeft: 175, fontWeight: 'bold' }}>
            FEED
          </Text>
          <TouchableOpacity>
            <Image
              source={require('../assets/menu_icon.png')}
              style={{ margin: 20 }}
            />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              padding: 10,
            }}>
            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>

            <View style={{ width: '50%', height: 200 }}>
              <Image
                source={require('../assets/imagem_galeria.png')}
                resizeMode="cover"
                style={{ width: '100%', height: 200 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 10,
          paddingBottom:20,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa')}>
          <Image
            source={require('../assets/search_outline.png')}
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Galeria')}>
          <Image source={require('../assets/plus_circle.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
          <Image
            source={require('../assets/person.png')}
            style={{ marginRight: 15 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TelaAmigo;
