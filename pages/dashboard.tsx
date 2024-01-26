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
            <View style={styles.container}>
                <View style={styles.appbar}>
                    <View style={styles.profileView}>
                        <View style={styles.nameView}>
                            <Text style={{ color: "#3C4048" }}>Welcome</Text>
                            <Text style={styles.name}>Wilbroad E Nyirenda</Text>
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
                            <TouchableOpacity style={styles.columns}>
                                <Text>A</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.columns}>
                                <Text>B</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.rows}>
                            <TouchableOpacity style={styles.columns}>
                                <Text>C</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.columns}>
                                <Text>D</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.shortcutView}>
                        <TouchableOpacity style={styles.shortcutItems}>
                            <View style={styles.shortcutIcon}>
                                <Icon
                                    name="users"
                                    size={34}
                                    color="black"
                                />
                            </View>
                            <Text style={styles.shortcutLabel}>CREATE</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shortcutItems}>
                            <View style={styles.shortcutIcon}>
                                <Icon
                                    name="money"
                                    size={34}
                                    color="black"
                                />
                            </View>
                            <Text style={styles.shortcutLabel}>TOP UP</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shortcutItems}>
                            <View style={styles.shortcutIcon}>
                                <Icon
                                    name="cogs"
                                    size={34}
                                    color="black"
                                />
                            </View>
                            <Text style={styles.shortcutLabel}>CONFIG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shortcutItems}>
                            <View style={styles.shortcutIcon}>
                                <Icon
                                    name="barcode"
                                    size={34}
                                    color="black"
                                />
                            </View>
                            <Text style={styles.shortcutLabel}>METER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.historyView}>
                    <View style={styles.historyViewRowA}>
                        <Text style={styles.historyViewRowATitle}>Recent Activities</Text>
                        <TouchableOpacity>
                            <Icon
                                name="long-arrow-right"
                                size={34}
                                color="grey"
                                style={styles.historyViewRowAIcon}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.underline}>

                    </View>
                    <View style={styles.historyViewRowB}>
                        <TouchableOpacity style={styles.historyRows}>
                            <View style={styles.historyLogo}>
                                <View style={styles.historyLogoIcon}>
                                    <Icon name="cc-visa" size={30} color="black" />
                                </View>
                            </View>
                            <View style={styles.historyTitle}>
                                <Text style={styles.titleText}>Juma sent cash</Text>
                                <Text style={styles.titleDate}> 26.01.2024</Text>
                            </View>
                            <View style={styles.historyValue}>
                                <Text style={styles.historyValueText}> +$7,000.00 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.historyRows}>
                            <View style={styles.historyLogo}>
                                <View style={styles.historyLogoIcon}>
                                    <Icon name="cc-visa" size={30} color="black" />
                                </View>
                            </View>
                            <View style={styles.historyTitle}>
                                <Text style={styles.titleText}>Juma sent cash</Text>
                                <Text style={styles.titleDate}> 26.01.2024</Text>
                            </View>
                            <View style={styles.historyValue}>
                                <Text style={styles.historyValueText}> +$7,000.00 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.historyRows}>
                            <View style={styles.historyLogo}>
                                <View style={styles.historyLogoIcon}>
                                    <Icon name="cc-visa" size={30} color="black" />
                                </View>
                            </View>
                            <View style={styles.historyTitle}>
                                <Text style={styles.titleText}>Juma sent cash</Text>
                                <Text style={styles.titleDate}> 26.01.2024</Text>
                            </View>
                            <View style={styles.historyValue}>
                                <Text style={styles.historyValueText}> +$7,000.00 </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.navigationView}>
                    <TouchableOpacity style={styles.navigationViewColumns}>
                        <Icon name="th-large" size={27} color="grey" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationViewColumns}>
                        <Icon name="cog" size={30} color="grey" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationViewColumns}>
                        <Icon name="home" size={38} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationViewColumns}>
                        <Icon name="bar-chart" size={27} color="grey" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navigationViewColumns}>
                        <Icon name="user" size={27} color="grey" />
                    </TouchableOpacity>
                </View>
            </View>
        </Fragment>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
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
        color: "grey",
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
        alignItems: "center",
    },
    shortcutItems: {
        height: "80%",
        width: "20%",
        borderColor: "silver",
        // borderWidth: 1,
        margin: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#EEEDEB"
    },
    shortcutIcon: {
        borderRadius: 8,
        width: "70%",
        height: "60%",
        alignItems: "center",
        justifyContent: 'center'
    },
    shortcutLabel: {
        height: "25%",
        width: "100%",
        textAlign: "center",
        fontSize: 11,
        fontWeight: '800',
        color: "grey"
    },
    historyView: {
        height: "34%",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "white",
    },
    underline: {
        width: "94%",
        borderColor: "silver",
        borderTopWidth: 0.2,
        alignSelf: "center",
    },
    historyViewRowA: {
        height: "20%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    historyViewRowATitle: {
        marginLeft: "4%",
        fontWeight: "500",
        fontSize: 20,
        color: "grey",
    },
    historyViewRowAIcon: {
        marginRight: "8%",
    },
    historyViewRowB: {
        height: "80%",
        width: "100%",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white",
    },
    historyRows: {
        height: "30%",
        width: "98%",
        borderColor: "#F2F2F2",
        // borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "white",
        flexDirection: "row",
    },
    historyLogo: {
        height: "100%",
        width: "20%",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "black"
    },
    historyLogoIcon: {
        height: "100%",
        width: "80%",
        borderWidth: 1,
        borderColor: "#F2F2F2",
        borderRadius: 50,
        backgroundColor: "#EEEDEB",
        alignItems: "center",
        justifyContent: "center",
    },
    historyTitle: {
        height: "100%",
        width: "48%",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        paddingLeft: "3%"
        // backgroundColor: "brown",
    },
    titleText: {
        // marginTop: "3%",
        color: "grey",
        fontWeight: "500",
        fontSize: 16
    },
    titleDate: {
        color: "silver",
        marginBottom: "3%"
    },
    historyValue: {
        height: "100%",
        width: "30%",
        // backgroundColor: "silver",
        justifyContent: "center",
        // alignItems: "flex-start",
        marginTop: "5%"
    },
    historyValueText: {
        color: "green",
        fontWeight: "500",
        fontSize: 18,
        height: "100%"

    },
    navigationView: {
        backgroundColor: "white",
        height: "10%",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "flex-end",
        // paddingTop: 20,
    },
    navigationViewColumns: {
        height: "80%",
        width: "18%",
        borderColor: "silver",
        // borderWidth: 1,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "flex-end",

    },
});
export default Dashboard;
