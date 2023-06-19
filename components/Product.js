import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from './redux/action';
import {reducer} from './redux/reducer';

const Product = props => {
  const item = props.item;
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducer);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = item => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = item => {
    dispatch(removeFromCart(item.name));
  };

  useEffect(() => {
    let result = cartItems.filter(element => {
      return element.name === item.name;
    });
    if (result.length) {
      setIsAdded(true);
    } else {
      setIsAdded(false);
    }
  }, [cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
        margin: 30,
      }}>
      <Text style={{fontSize: 20}}>{item.name}</Text>
      <Text style={{fontSize: 20}}>{item.price}</Text>
      <Text style={{fontSize: 20}}>{item.color}</Text>
      <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
      {/* <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      <Button
        title="Remove to Cart"
        onPress={() => handleRemoveFromCart(item)}
      /> */}

      {isAdded ? (
        <Button
          title="Remove to Cart"
          onPress={() => handleRemoveFromCart(item)}
        />
      ) : (
        <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
