import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Galeria = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', paddingTop: 36 }}>
      {/* Header */}
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image
            source={require('../assets/btnVoltar.png')}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 36 }}
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 80 }}>
          Nova Postagem
        </Text>
      </View>
      {/* Imagem principal */}
      <View style={{ flex: 5, alignItems: 'center' }}>
        <Image
          source={require('../assets/imagem_principal_galeria.png')}
          resizeMode="contain"
        />
      </View>

      {/* Filtro */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderBottomWidth: 1,
        }}>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Imagens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold' }}>Videos</Text>
        </TouchableOpacity>
      </View>

      {/* Galeria de fotos */}
      <View style={{ flex: 5, paddingHorizontal: 20 }}>
        <ScrollView>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
            <Image
              source={require('../assets/imagem_galeria.png')}
              resizeMode="contain"
              style={{ margin: 5 }}
            />
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
          paddingVertical: 5,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate('Pesquisa')}>
          <Image
            source={require('../assets/search_outline.png')}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Galeria')}>
          <Image source={require('../assets/plus_circle.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('Perfil')}>
          <Image
            source={require('../assets/person.png')}
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Galeria;
