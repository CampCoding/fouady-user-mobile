import { FlatList, View } from 'react-native';
import styles from '../HomeScreen.styles';
import { colors } from '../../../theme';
import MainCard from '../../../components/mainCard';
import * as Animatable from 'react-native-animatable';
import { scale } from 'react-native-size-matters';
const List = ({ data }: { data: any[] }) => {
  return (
    <View style={styles.headerContainer}>
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: scale(10),
        }}
        renderItem={({ item , index}) => (
          <Animatable.View animation="fadeIn" duration={1000*index} style={{ flex: 1, marginHorizontal: 10 }}>
            <MainCard

              image={item.icon}
              text={item.title}
              backgroundColor={colors.darkGray2}
              color={colors.textSecondary}
              onPress={() => {
                
              }}
            />
          </Animatable.View>
        )}
      />
    </View>
  );
};

export default List;
