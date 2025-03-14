import { StyleSheet, Text, View } from "react-native";

export default function TelaResultado({ route }) {
    const { productName, originalPrice, increasePercentage, increaseValue, newPrice } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resultado</Text>
            <Text style={styles.result}>Produto: {productName}</Text>
            <Text style={styles.result}>Valor Original: R$ {originalPrice}</Text>
            <Text style={styles.result}>Aumento: {increasePercentage}%</Text>
            <Text style={styles.result}>Valor do Aumento: R$ {increaseValue}</Text>
            <Text style={styles.result}>Novo Valor Produto: R$ {newPrice}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        backgroundColor: "#f4f4f4",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "purple"
    },
    result: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 5,
    },

});
