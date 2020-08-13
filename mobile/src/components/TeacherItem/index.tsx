import { Image, View, Text } from "react-native";
import React from "react";

import styles from "./styles";

function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://github.com/gabrielpulga.png" }}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Fabrício Costa</Text>
          <Text style={styles.subject}>Eletromagnetismo</Text>
        </View>
      </View>
      <Text style={styles.bio}>.
      Fui assistente do próprio Sadiku durante vários anos.
      {'\n'}{'\n'}
      Se tirar menos que 100 na prova, devolvo seu dinheiro!     
      </Text>
    </View>
  );
}

export default TeacherItem;