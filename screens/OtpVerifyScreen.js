import React, {useState, useRef} from 'react';
import {Text, TextInput, View} from 'react-native';
import FormButton from '../components/FormButton';
import {UserContext} from '../Context/UserContext';
import {useContext} from 'react';

const OtpLoginVerifyScreen = props => {
  function focusHandler1() {
    textInput1.current.focus();
  }
  function focusHandler2() {
    textInput2.current.focus();
  }
  function focusHandler3() {
    textInput3.current.focus();
  }
  function focusHandler4() {
    textInput4.current.focus();
  }
  function focusHandler5() {
    textInput5.current.focus();
  }
  function focusHandler6() {
    textInput6.current.focus();
  }

  const textInput1 = useRef('');
  const textInput2 = useRef('');
  const textInput3 = useRef('');
  const textInput4 = useRef('');
  const textInput5 = useRef('');
  const textInput6 = useRef('');

  const [user, setUser] = useContext(UserContext);
  const [pin, setPin] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });
  function statehandler(text) {
    setUser({...user, header: text});
  }
  confirmCode = () => {
    console.log('OTP:', pin);
    const otp =
      '' + pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;
    //OtpVerification API Starts
    fetch(
      'https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/verify',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: user.number,
          otp: otp,
        }),
      },
    ).then(data => {
      console.log('success');
      data
        .json()
        .then(res => {
          console.log(res);
          if (res.message === 'Verification successfull') {
            fetch(
              'https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/login',
              {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  phone: '9005901803',
                }),
              },
            )
              .then(data => {
                console.log(
                  'auth-header present:',
                  data.headers.get('auth-user'),
                );
                // console.log("old state:", user)
                header = data.headers.get('auth-user');
                if (header) {
                  console.log('navigating to home Screen header present');
                  statehandler(header);
                  props.navigation.navigate('HomeScreen');
                } else {
                  console.log('Auth header not present', user);
                  props.navigation.navigate('ProfileDetailsScreen');
                }
              })
              .catch(err => {
                console.log('Auth header not present', user);
                props.navigation.navigate('ProfileDetailsScreen');
              });
          } else {
            // otp not verified
          }
        })
        .catch(err => {
          console.log('error occured:', err);
        });
    });
  };

  confirmCodeTest = () => {
    const otp =
      '' + pin.pin1 + pin.pin2 + pin.pin3 + pin.pin4 + pin.pin5 + pin.pin6;

    if (otp === '123456') {
      fetch(
        'https://us-central1-kibi-sports-backend.cloudfunctions.net/app/user/login',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            phone: '8171154464',
          }),
        },
      ).then(data => {
        console.log(data.headers.get('auth-user'));
        // console.log("old state:", user)
        header = data.headers.get('auth-user');
        if (header) {
          statehandler(header);
          console.log('navigationg to home Screen');
          props.navigation.navigate('HomeScreen');
        } else {
          console.log('Auth header not present', user);
          props.navigation.navigate('ProfileDetailsScreen');
        }
      });
    } else {
      // otp not verified
    }
  };

  return (
    <>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 80}}>
        <Text
          style={{
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'center',
            color: '#432344',
          }}>
          Verify OTP
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginTop: 50,
        }}>
        <TextInput
          ref={textInput1}
          onChangeText={pin1 => {
            // console.log("pin1:", pin1)
            setPin({...pin, pin1: pin1});
            if (pin1 != '') {
              // refs.pin2ref.focus()
              // textInput.pin2ref.focus();
              focusHandler2();
            } else {
              // textInput.pin1ref.focus();
              focusHandler1();
            }
          }}
          value={pin.pin1}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />

        <TextInput
          ref={textInput2}
          onChangeText={pin2 => {
            setPin({...pin, pin2: pin2});
            if (pin2 != '') {
              focusHandler3();
            }
          }}
          value={pin.pin2}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />

        <TextInput
          ref={textInput3}
          onChangeText={pin3 => {
            setPin({...pin, pin3: pin3});
            if (pin3 != '') {
              focusHandler4();
            }
          }}
          value={pin.pin3}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />

        <TextInput
          ref={textInput4}
          onChangeText={pin4 => {
            setPin({...pin, pin4: pin4});
            if (pin4 != '') {
              focusHandler5();
            }
          }}
          value={pin.pin4}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />

        <TextInput
          ref={textInput5}
          onChangeText={pin5 => {
            setPin({...pin, pin5: pin5});
            if (pin5 != '') {
              focusHandler6();
            }
          }}
          value={pin.pin5}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />

        <TextInput
          ref={textInput6}
          onChangeText={pin6 => setPin({...pin, pin6: pin6})}
          value={pin.pin6}
          maxLength={1}
          style={{
            backgroundColor: '#f5f41',
            fontWeight: '600',
            alignSelf: 'center',
            height: 55,
            width: '10%',
            borderBottomEndRadius: 10,
            borderBottomWidth: 1,
            borderColor: 'grey',
          }}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <FormButton buttonTitle={'Verify'} onPress={() => confirmCode()} />
      </View>
    </>
  );
};
export default OtpLoginVerifyScreen;
