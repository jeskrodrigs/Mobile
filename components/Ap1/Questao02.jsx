import React from "react";
import { View, Text, Button } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import styles from "./componentes/style";

const Questao02 = ({ navigation, route }) => {
  const { item, section } = route.params;

  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.icon}>
          <IconButton
            icon={item.icon}
            iconColor={MD3Colors.tertiary0}
            size={30}
            mode="contained"
            onPress={() => navigation.goBack()}
          />
        </View>

        <View style={styles.texto}>
          <Text style={styles.nomepreco}>{item.nome}</Text>
          <Text style={styles.nomepreco}>{item.preço}</Text>
        </View>
        
        <Text style={styles.datahora}>{section.title}</Text>
        <Text style={styles.datahora}>{item.hora}</Text>
        
        <Button
          title="Voltar"
          onPress={() => navigation.goBack()}
        />
      </View>
    </PaperProvider>
  );
};

export default Questao02;
