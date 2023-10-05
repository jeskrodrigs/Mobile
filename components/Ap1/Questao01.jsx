
import React from 'react';
import { View, Text, SectionList } from 'react-native';
import { List, IconButton } from 'react-native-paper'; 

import transactionData from './transactionData'; 

const Questao01 = () => {
  return (
    <View>
      <SectionList
        sections={transactionData} 
        keyExtractor={(item, index) => item + index} 
        renderItem={({ item }) => (
          <List.Item
            title={item.name}
            description={`R$ ${item.value.toFixed(2)}`} 
            left={(props) => <List.Icon {...props} icon={item.icon} />} 
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text>{title}</Text>
        )}
      />
    </View>
  );
};

export default Questao01;
