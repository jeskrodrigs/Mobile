import React from 'react';
import { View, Text, Modal } from 'react-native';

const Questao02 = ({ isVisible, closeModal, transaction }) => {
  return (
    <Modal visible={isVisible} onRequestClose={closeModal}>
      <View>
        <Text>{transaction.date}</Text>
        <Text>{transaction.name}</Text>
        <Text>{`R$ ${transaction.value.toFixed(2)}`}</Text>
        <Text>{transaction.time}</Text>
      </View>
    </Modal>
  );
};

export default Questao02;