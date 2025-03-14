import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

function Forms() {
    const [productName, setProductName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [increasePercentage, setIncreasePercentage] = useState('');

    const navigation = useNavigation();

    const calculatePrice = () => {
        if (!productName || !originalPrice || !increasePercentage) {
            alert("Preencha todos os campos!");
            return;
        }

        const price = parseFloat(originalPrice);
        const percentage = parseFloat(increasePercentage);
        const increasedValue = price * (percentage / 100);
        const finalPrice = price + increasedValue;

        navigation.navigate("Resultado", {
            productName,
            originalPrice,
            increasePercentage,
            increaseValue: increasedValue.toFixed(2),
            newPrice: finalPrice.toFixed(2),
        });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulário de Preço</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={productName}
                onChangeText={setProductName}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor original"
                keyboardType="numeric"
                value={originalPrice}
                onChangeText={setOriginalPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Porcentagem de Aumento"
                keyboardType="numeric"
                value={increasePercentage}
                onChangeText={setIncreasePercentage}
            />
            <Button title="Calcular" style={styles.btn} onPress={calculatePrice} />
        </View>
    );
}

export default Forms;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "purple"
    },
    input: {
        width: "100%",
        height: 40,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
        borderRadius: 10
    },

});
