import React from 'react';
import { View, Text, Image } from 'react-native';

const DetailsPage: React.FC<{ route: any }> = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{data.title}</Text>
      <Image source={{ uri: data.image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
      <Text>{data.description}</Text>
    </View>
  );
};

export default DetailsPage;
