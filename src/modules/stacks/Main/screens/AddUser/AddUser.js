import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import {
  heightPercentage,
  widthPercentage,
} from '../../../../../constants/StyleVariables';
import styles from './styles';
import {useDispatch, useSelector} from 'react-redux';
import {updateMainCustomState} from '../../../+store/Main/Main.action';

const AddUser = props => {
  const [nameSurname, setNameSurname] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [about, setAbout] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.main.userInfo);
  const textRef1 = useRef();
  const textRef2 = useRef();
  const textRef3 = useRef();
  const textRef4 = useRef();

  useEffect(() => {
    if (focusedIndex === 0) {
      textRef1.current.focus();
    }
    if (focusedIndex === 1) {
      textRef2.current.focus();
    }
    if (focusedIndex === 2) {
      textRef3.current.focus();
    }
    if (focusedIndex === 3) {
      textRef4.current.focus();
    }
  }, [focusedIndex]);

  const renderInput = (placeholder, value, setValue, index, referance) => {
    return (
      <View style={{marginTop: widthPercentage(5)}}>
        <Text style={{marginLeft: widthPercentage(5)}}>{placeholder}</Text>
        <TextInput
          selectionColor={'black'}
          style={[
            styles.textInput,
            {
              borderColor:
                focusedIndex === index
                  ? 'rgb(46,134,222)'
                  : 'rgba(229, 229, 229, 0.9)',
            },
          ]}
          ref={referance}
          keyboardType="default"
          autoCapitalize="none"
          value={value}
          onChangeText={text => setValue(text)}
          onFocus={() => {
            setFocusedIndex(index);
          }}
          onSubmitEditing={() => {
            setFocusedIndex(index + 1);
          }}
        />
      </View>
    );
  };

  const handleAddUser = () => {
    if (nameSurname === '' || jobTitle === '' || about === '') {
      Alert.alert('Please fill all fields');
      return;
    }
    dispatch(
      updateMainCustomState('userInfo', {
        data: [
          {
            id: Math.random(),
            name: nameSurname,
            job: jobTitle,
            description: about,
            image: imageLink,
          },
          ...userInfo.data,
        ],
      }),
    );
    Alert.alert;
    alert('Successfully added');
    props.navigation.navigate('MainScreen');
  };

  return (
    <SafeAreaView style={{backgroundColor: 'rgba(242, 242, 242, 1)', flex: 1}}>
      {renderInput('Name Surname:', nameSurname, setNameSurname, 0, textRef1)}
      {renderInput('Job Title:', jobTitle, setJobTitle, 1, textRef2)}
      {renderInput('About Him/Her:', about, setAbout, 2, textRef3)}
      {renderInput('Image Link:', imageLink, setImageLink, 3, textRef4)}
      <TouchableOpacity
        style={styles.addCharButton}
        onPress={() => handleAddUser()}>
        <Text
          style={{
            fontSize: widthPercentage(4),
            color: 'white',
          }}>
          Add Character
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default AddUser;
