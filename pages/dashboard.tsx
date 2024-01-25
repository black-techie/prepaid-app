import { Text } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";

type Data = {
    id: String;
    token: String;
};

type ProfileScreenProps = {
    navigation: NavigationProp<any>;
    route: RouteProp<{ params: { data: Data } }, "params">;
};

const Dashboard: React.FC<ProfileScreenProps> = ({ navigation, route }) => {
    return (
        <>
            <Text> Hello World {route.params.data.token} </Text>
        </>
    );
};

export default Dashboard;
