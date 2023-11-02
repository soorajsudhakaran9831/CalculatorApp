import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';

const MainPage = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState(null);
  const [firstValue, setFirstValue] = useState('');
  const [secondValue,setSecondValue]=useState('');

  // Function to handle number inputs
  const handleNumberInput = num => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };
  const [isModalVisible, setModalVisible] = useState(false);
  // Function to handle operator inputs
  const handleOperatorInput = operator => {
    setOperator(operator);
    setFirstValue(displayValue);
    setSecondValue(firstValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(secondValue);
    const num2 = parseFloat(firstValue);
    const num3 = parseFloat(displayValue);
    

    console.log('num1:', num1);
    console.log('num2:', num2);
    console.log('num3:', num3);

  if (operator === '+') {
    setDisplayValue((num1 + num2 + num3).toString());
    if (num1 === 1 && num2 === 3 && num3 === 9) {
      // alert("Hello World");
      setModalVisible(true);
    }else{
      setDisplayValue((num1 + num2 + num3).toString());
    }
  } else if (operator === '-') {
    setDisplayValue((num1 - num2).toString());
  } else if (operator === '*') {
    setDisplayValue((num1 * num2).toString());
  } else if (operator === '/') {
    setDisplayValue((num1 / num2).toString());
  }

  setOperator(null);
  setFirstValue('');
};


  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>

      <View style={styles.row}>
      <TouchableOpacity style={styles.button} onPress={handleClear}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>+/-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('/')}>
            <Text style={styles.buttonText}>
              /
            </Text>
          </TouchableOpacity>
          
        </View>


        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(7)}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(8)}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(9)}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('*')}>
            <Text style={styles.buttonText}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(4)}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(5)}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(6)}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('-')}>
            <Text style={styles.buttonText}>
              −
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(1)}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(2)}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberInput(3)}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
         
          <TouchableOpacity
            style={[styles.button, styles.operatorButton]}
            onPress={() => handleOperatorInput('+')}>
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleNumberInput(0)}>
            <Text style={[styles.buttonText, styles.zeroButtonText]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.zeroButton]}
            onPress={() => handleNumberInput(0)}>
            <Text style={[styles.buttonText, styles.zeroButtonText]}>00</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.equalButton} onPress={handleEqual}>
            <Text style={styles.equalButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal isVisible={isModalVisible} coverScreen={false} style={{
                                backgroundColor:'#9c9e9d',
                                alignItems:'center',
                                width:250,
                                maxHeight:250,
                                borderRadius:50,
                                marginLeft:90,
                                borderWidth:1}}>
      <View>
        <Text style={{fontSize:25,color:'white'}}>Hello World</Text>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text style={styles.modalCloseButton}>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
    </View>
  );
};
export default MainPage;



// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, FlatList,TextInput} from 'react-native';
// import { Table, Row} from 'react-native-table-component';

// const MainPage = () => {
//   const [data, setData] = useState([]);
//   const [directorName, setDirectorName] = useState('');
//   const [movieName, setMovieName] = useState('');

//   const handleAdd = () => {
//     if (directorName && movieName) {
//       setData([...data, { director: directorName, movie: movieName }]);
//       setDirectorName('');
//       setMovieName('');
//     }
//   };

//   const handleRemove = (index) => {
//     const newData = [...data];
//     newData.splice(index, 1);
//     setData(newData);
//   };
//   const rows=
//   ['directorName','movieName',]

//   return (

//     // <View>
//     //   <Table borderStyle={{borderWidth:1}}>
//     //    <Row data={rows}></Row>
//     //    </Table>
//     // </View>
    
//     <View>
//        <View style={{flexDirection:'row',alignContent:'space-between',borderWidth:1}}>
//        <View>
//        <Text>Director Name:</Text>
//        <TextInput
//          value={directorName}
//          onChangeText={(text) => setDirectorName(text)}
//        /> 
//       </View> 
//        <View>
//        <Text>Movie Name:</Text>
//        <TextInput
//          value={movieName}
//          onChangeText={(text) => setMovieName(text)}
//        />
//        </View>
//        <View>
//        <TouchableOpacity onPress={handleAdd}>
//          <Text>Add</Text>
//        </TouchableOpacity>
//        </View>
//        </View>
//        <FlatList
//          data={data}
//          keyExtractor={(item, index) => index.toString()}
//          renderItem={({ item, index }) => (
//            <View style={{flexDirection:'row'}}>
//              <Text>Director Name: {item.director}</Text>
//              <Text>Movie Name: {item.movie}</Text>
//              <TouchableOpacity onPress={() => handleRemove(index)}>
//                <Text>Remove</Text>
//              </TouchableOpacity>
//            </View>
//          )}
//        />
//      </View>
//   );
// };

// export default MainPage;