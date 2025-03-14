import { Button, Text, View } from "react-native";

function Forms() {

    const [productName, setProductName] = useState('');
    const [originalPrice, setOriginalPrice] = useState('');
    const [increasePercentage, setIncreasePercentage] = useState('');
    const [newPrice, setNewPrice] = useState(null);

    const calculatePrice = () => {
        if (!productName || !originalPrice || !increasePercentage) {
            alert('Preencha todos os campos!');
            return;
        }

        const price = parseFloat(originalPrice);
        const percentage = parseFloat(increasePercentage);
        const increasedValue = price * (percentage / 100);
        setNewPrice(price + increasedValue);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Formulario de Preço</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Produto"
                value={productName}
                required
                onChangeText={setProductName}
            />
            <TextInput
                style={styles.input}
                placeholder="Valor Original"
                keyboardType="numeric"
                required
                value={originalPrice}
                onChangeText={setOriginalPrice}
            />
            <TextInput
                style={styles.input}
                placeholder="Porcentagem de Aumento"
                keyboardType="numeric"
                required
                value={increasePercentage}
                onChangeText={setIncreasePercentage}
            />
            <Button title="Calcular" onPress={calculatePrice} />
            {newPrice !== null && (
                <Text style={styles.result}>Novo Valor: R$ {newPrice.toFixed(2)}</Text>
            )}
        </View>
    );

}
export default Forms



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    result: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
    },
});
