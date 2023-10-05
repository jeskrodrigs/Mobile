
import React from "react";
import { View, Text, SectionList } from "react-native";
import { PaperProvider, IconButton, MD3Colors } from "react-native-paper";
import meusDados from "./componentes/Dados";
import styles from "./componentes/style";

const Questao01 = ({ navigation }) => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <SectionList
          sections={meusDados}
          keyExtractor={(item) => item.nome}
          renderItem={({ item, section }) => (
            <View style={styles.bloco}>
              <IconButton
                icon={item.icon}
                iconColor={MD3Colors.tertiary0}
                size={30}
                onPress={() => {
                  navigation.navigate("modalNubank", { item: item, section: section });
                }}
                mode="contained"
              />
              <View>
                <Text style={styles.texto}>{item.nome}</Text>
                <Text style={styles.texto}>{item.hora}</Text>
              </View>
              <View>
                <Text style={styles.texto}>{item.preço}</Text>
              </View>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </View>
    </PaperProvider>
  );
};

export default Questao01;
