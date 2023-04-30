import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {IFluctuationRes} from 'app/src/api/fluctuation';
import PressableGlobal from 'app/src/components/PressableGlobal';
import TextGlobal from 'app/src/components/TextGlobal';
import CONFIG from 'app/src/config';
import {RootStackParamList} from 'app/src/router/routerList';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

function FluctuationItem({item}: {item: IFluctuationRes}) {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleOpenDetail = (): void => {
    navigation.navigate('FluctuationDetailScreen', {id: item.id});
  };

  return (
    <PressableGlobal style={styles.root} onPress={handleOpenDetail}>
      <View style={styles.rightContent}>
        <IconAntDesign
          name={item.type === 1 ? 'caretup' : 'caretdown'}
          color={item.type === 1 ? CONFIG.color.up : CONFIG.color.down}
          size={20}
          style={styles.icon}
        />
        <View>
          <TextGlobal style={styles.title}>{item.categoryData.name}</TextGlobal>
          {item.content && item.content.length > 0 && (
            <TextGlobal style={styles.content}>{item.content}</TextGlobal>
          )}
        </View>
      </View>

      <TextGlobal
        style={{
          color: item.type === 1 ? CONFIG.color.up : CONFIG.color.down,
        }}>{`${item.type === 1 ? '+ ' : '- '}${item.amountMoney}`}</TextGlobal>
    </PressableGlobal>
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: CONFIG.color.secondaryMain,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  icon: {
    marginRight: 5,
  },
  content: {
    color: CONFIG.color.secondaryText,
  },
});

export default FluctuationItem;
