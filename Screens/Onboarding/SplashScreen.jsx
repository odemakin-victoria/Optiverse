import React,{useState} from 'react';
import { View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';
import styles from "./SplashScreen.style";
import { MaterialIcons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import IconCard from "../../components/common/cards/iconCards/iconCard"
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Electricity  from '../../assets/images/Vector.svg'
import QRScan from "../../assets/images/gg_qr.svg"
import Bills from "../../assets/images/ion_receipt.svg"
import Link from "../../assets/images/mingcute_link-fill.svg"
import PTA  from "../../assets/images/gg_qr(1).svg"
import Loan  from "../../assets/images/ion_arrow-down.svg"
import Transaction  from "../../assets/images/mdi_payment-schedule.svg"
import Investment  from "../../assets/images/mdi_payment-schedule.svg"
import Remita  from "../../assets/images/Remita-Logo 1(1).svg"
import Visa  from "../../assets/images/teenyicons_stamp-solid.svg"
import Savester  from "../../assets/images/Union.svg"
import Analytics  from "../../assets/images/Vector(2).svg"
import LSG  from "../../assets/images/Money.svg"



export default function LinkedAccount() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <SafeAreaView style={styles.container}>
     <View style={styles.container}>
      <View style={styles.header}>
        <View>
        <MaterialIcons name="keyboard-arrow-left" size={24} color="#000A1F" />
        </View>
        <View>
        <Text style={styles.headerText}>More</Text>
        </View>

       
      </View>
      <View style={styles.searchContainer}>
          <Input
            placeholder="    Search"
            value={searchText}
            onChangeText={(text) => setSearchText(text)}
            inputStyle={{
              backgroundColor: 'white',
              borderRadius: 20,
              fontSize: 10, // Set the font size to 10px
              paddingLeft: 10, // Add padding for better alignment
              paddingRight: 10, // Add padding for better alignment
            }}
            inputContainerStyle={{
              borderBottomWidth: 0, // Remove the gray line under the search bar
              borderColor: 'red', // Set the outline color to red when focused
            }}
            leftIconContainerStyle={{
              marginRight: -15,
            }}
            // placeholderTextColor="transparent" 
           
            leftIcon={{
              type: 'font-awesome',
              name: 'search',
              color: 'gray',
              size: 10,
            }}
          />
        </View>
        <View style={styles.line}>
        <Text style={styles.subHeaderText}>Payments</Text>
      <View style={styles.iconCardContainer}>
      
          <IconCard svgImage={QRScan} text="Pay with" subText="QR"  />
          <IconCard svgImage={Bills} text="Pay Bills" subText="  " />
          <IconCard svgImage={Transaction} text="Scheduled
Transactions" style={{ marginTop: 90, marginRight:100 }} />
    <IconCard svgImage={Visa} text="Visa fee"  subText="  "/>
        </View>
        <View style={styles.iconCardContain}>
      
      <IconCard svgImage={PTA} text="PTA" subText="  "  />
      <IconCard svgImage={Electricity} text="Electricity" subText="Token" />
    
<IconCard svgImage={Remita} text="Remita"  subText="  "/>
    </View>
        </View>
        
<View style={styles.serviceLine}>
        <Text style={styles.subHeaderText}>Services</Text>
      <View style={styles.iconCardContainer}>
      
          <IconCard svgImage={Loan} text="Loan" subText="  "  />
          <IconCard svgImage={LSG} text="LASG Tax" subText="Collection" />
          <IconCard svgImage={Savester} text="Savester" subText="  "/>
    <IconCard svgImage={Investment} text="Investment"  subText="  "/>
        </View>
       
        </View>

        <View style={styles.divideLine}>
        <Text style={styles.subHeaderText}>Accounts</Text>
      <View style={styles.iconCardContainer}>
      
          <IconCard svgImage={Analytics} text="Analytics" subText="  "  />
          <IconCard svgImage={Link} text="Linked" subText="Accounts"   onPress={() => navigation.navigate('LinkedScreen')}
 />
     
        </View>
       
        </View>
     
    </View>
    </SafeAreaView>
  );
}

