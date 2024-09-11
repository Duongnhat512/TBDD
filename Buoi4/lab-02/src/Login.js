import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function Login() {

  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      style={styles.container}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          height: 100,
        }}
      >
        LOGIN
      </Text>
      <View
        style={styles.textInput}
      >
        <Image
          style={styles.image}
          source={require('../assets/avatar_user.png')}
        />
        <TextInput
          placeholder='Name'
          style={styles.input}
        />
      </View>
      <View
        style={styles.textInput}
      >
        <View style={{
          flex: 5,
          flexDirection: 'row',
        }}>
          <Image
            style={styles.image}
            source={require('../assets/lock.png')}
          />
          <TextInput
            placeholder='Password'
            style={styles.input}
          />
        </View>
        <TouchableOpacity>
          <Image
            source={require('../assets/eye.png')}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {

        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            height: 100,
            marginTop: 60,
          }}
        >
          Forgot your password?
        </Text>
      </TouchableOpacity>
    </LinearGradient >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    // background: LinearGradient(['#FBCB00', '#BF9A00']),
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 54,
    backgroundColor: '#C4C4C44D',
    padding: 10,
    borderWidth: 1,
    borderColor: '#F2F2F2',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
    height: 40,
    borderWidth: 0,

  },
  image: {
    marginRight: 10,
  },

  button: {
    width: '90%',
    height: 45,
    backgroundColor: '#060000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  buttonText: {
    color: '#F2F2F2',
    fontSize: 18,
  },
});

export default Login;
