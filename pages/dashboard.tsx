import { Text, TouchableOpacity } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useAuth } from '../components/AuthContext';


type ProfileScreenProps = {
    navigation: NavigationProp<any>;
};

const Dashboard: React.FC<ProfileScreenProps> = ({ navigation }) => {
    const { signOut } = useAuth()
    return (
        <>
            <Text> Hello World! </Text>
            <TouchableOpacity
                onPress={() => { signOut() }}
            >
                <Text> Log out </Text>
            </TouchableOpacity>
        </>
    );
};

export default Dashboard;
