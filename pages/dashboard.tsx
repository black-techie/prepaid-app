import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useAuth } from "../components/AuthContext";
import { Fragment } from "react";
import Icon from "react-native-vector-icons/FontAwesome";

type ProfileScreenProps = {
    navigation: NavigationProp<any>;
};

const Dashboard: React.FC<ProfileScreenProps> = ({ navigation }) => {
    const { signOut } = useAuth();
    return (
        <Fragment>
            <View style={styles.container}></View>
            <View style={styles.appbar}>
                <View style={styles.profileView}>
                    <View style={styles.nameView}>
                        <Text style={{ color: "#3C4048" }}>
                            Welcome <Icon name="user" size={16} color="silver" />
                        </Text>
                        <Text style={styles.name}>Wilbroad Nyirenda</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.logout}
                    onPress={() => {
                        signOut();
                    }}
                >
                    <Icon name="sign-out" size={32} color="grey" />
                </TouchableOpacity>
            </View>
            <View style={styles.mainView}>
                <View style={styles.gridView}>
                    <View style={styles.rows}>
                        <TouchableOpacity style={styles.columns}><Text>A</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.columns}><Text>B</Text></TouchableOpacity>
                    </View>
                    <View style={styles.rows}>
                        <TouchableOpacity style={styles.columns}><Text>C</Text></TouchableOpacity>
                        <TouchableOpacity style={styles.columns}><Text>D</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={styles.shortcutView}>
                    <TouchableOpacity style={styles.shortcutItems}><Text>E</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.shortcutItems}><Text>F</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.shortcutItems}><Text>G</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.shortcutItems}><Text>H</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.historyView}>
                <View style={styles.historyViewRowA}>
                    <Text style={styles.historyViewRowATitle}>Recent Transactions</Text>
                    <TouchableOpacity><Icon name="long-arrow-right" size={34} color="grey" style={styles.historyViewRowAIcon} /></TouchableOpacity>
                </View>
                <View style={styles.historyViewRowB}>
                    <TouchableOpacity style={styles.historyRows}><Text>I</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.historyRows}><Text>J</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.historyRows}><Text>K</Text></TouchableOpacity>
                </View>
            </View>
            <View style={styles.navigationView}>
                <TouchableOpacity style={styles.navigationViewColumns}><Text>L</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navigationViewColumns}><Text>M</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navigationViewColumnsN}><Text>N</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navigationViewColumns}><Text>O</Text></TouchableOpacity>
                <TouchableOpacity style={styles.navigationViewColumns}><Text>P</Text></TouchableOpacity>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    appbar: {
        height: "10%",
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
    },
    profileView: {
        height: "100%",
        width: "88%",
        flexDirection: "row",
        alignItems: "center",
    },
    nameView: {
        height: "100%",
        width: "100%",
        justifyContent: "center",
        paddingLeft: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: "700",
        color: "grey"
    },
    logout: {
        height: "100%",
        width: "12%",
        justifyContent: "center",
    },
    mainView: {
        backgroundColor: "white",
        height: "45%",
    },
    gridView: {
        height: "70%",
        width: "100%",
    },
    rows: {
        height: "50%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    columns: {
        height: "94%",
        width: "48%",
        alignItems: "center",
        justifyContent: "center",
        borderColor: "silver",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: "center",
    },
    shortcutView: {
        height: "30%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    shortcutItems: {
        height: "80%",
        width: "20%",
        borderColor: "silver",
        borderWidth: 1,
        margin: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    historyView: {
        height: "34%",
        flexDirection: "column",
        backgroundColor: "white",
    },
    historyViewRowA: {
        height: "20%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    historyViewRowATitle: {
        marginLeft: "4%",
        fontWeight: "600",
        fontSize: 20,
        color: "grey"
    },
    historyViewRowAIcon: {
        marginRight: "8%"
    },
    historyViewRowB: {
        height: "80%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center"
    },
    historyRows: {
        height: "30%",
        width: "98%",
        borderColor: "silver",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    navigationView: {
        backgroundColor: "white",
        height: "11%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        paddingTop: 10
    },
    navigationViewColumns: {
        height: "80%",
        width: "18%",
        borderColor: "silver",
        borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    navigationViewColumnsN: {
        height: "80%",
        width: "18%",
        borderColor: "silver",
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center"
    }
});
export default Dashboard;
