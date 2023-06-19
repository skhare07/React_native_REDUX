import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './Header';
import Product from './Product';

const ProductWrapper = ({navigation}) => {
  const products = [
    {
      name: 'Samsung Mobile',
      color: 'white',
      price: 30000,
      image:
        'https:www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Apple I Phone ',
      color: 'black',
      price: 130000,
      image:
        'https:www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
    {
      name: 'Nokia Mobile',
      color: 'green',
      price: 20000,
      image:
        'https:www.iconpacks.net/icons/2/free-mobile-phone-icon-2636-thumb.png',
    },
  ];

  return (
    <View style={styles.container}>
      <Button
        title="GO TO USER LIST"
        onPress={() => navigation.navigate('User')}
      />
      <Header />
      <ScrollView>
        {products.map(item => (
          <Product item={item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductWrapper;
