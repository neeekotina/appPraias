import React from 'react';
import {
StyleSheet,
View,
Text,
Image,
ScrollView, // Usando ScrollView para a lista
TouchableOpacity
} from 'react-native';
import { useRouter } from 'expo-router';
// --- Dados das Praias ---
// É uma boa prática separar os dados da sua UI
const praiasData = [
{
id: 1,
nome: 'Bertioga',
local: 'São Paulo',
// Caminho relativo da pasta app/(tabs)/ para assets/images/
imagem: require('../../assets/images/bertioga.jpeg'),
link: '/bertioga', // Para usar na navegação depois
},
{
id: 2,
nome: 'Maragogi',
local: 'Nordeste',
imagem: require('../../assets/images/maragogi.jpg'),
link: '/maragogi',
},
{
id: 3,
nome: 'Arraial do Cabo',
local: 'Rio de Janeiro',
imagem: require('../../assets/images/arraial do cabo.jpg'),
link: '/arraial',
},
{
id: 4,
nome: 'San Blas',
local: 'Internacional',
imagem: require('../../assets/images/san blas.jpg'),
link: '/sanblas',
},
];
// --- O Componente da Tela ---
export default function ExploreScreen() {
    const router = useRouter();
// Função (ainda vazia) que usaremos para navegar

const handleNavigation = (link: string) => {
router.push(link);
// Aqui usaremos o hook `useRouter` do Expo Router quando formos linkar
};
return (
<ScrollView style={styles.container}>
{/* Mapeamos (loop) sobre os dados das praias
e criamos um item de lista para cada um
*/}
{praiasData.map((praia) => (
<TouchableOpacity
key={praia.id}
style={styles.itemContainer}
onPress={() => handleNavigation(praia.link)}
>
{/* Imagem Circular */}
<Image source={praia.imagem} style={styles.itemImage} />
{/* Textos (Título e Subtítulo) */}
<View style={styles.itemTextContainer}>
<Text style={styles.itemTitle}>{praia.nome}</Text>
<Text style={styles.itemSubtitle}>{praia.local}</Text>
</View>
</TouchableOpacity>
))}
</ScrollView>
);
}
// --- Estilos ---
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#FFFFFF', // Fundo branco
},
itemContainer: {
flexDirection: 'row', // Imagem ao lado do texto
alignItems: 'center', // Alinha verticalmente
paddingVertical: 15,
paddingHorizontal: 20,
// Linha separadora sutil, como no design
borderBottomWidth: 1,
borderBottomColor: '#F0F0F0', // Cor bem clara
},
itemImage: {
width: 65,
height: 65,

borderRadius: 32.5, // Metade da largura/altura para ser um círculo
marginRight: 15, // Espaço entre a imagem e o texto
},
itemTextContainer: {
flex: 1, // Ocupa o espaço restante
},
itemTitle: {
fontSize: 18,
fontWeight: 'bold',
color: '#004AAD', // Azul escuro do título
},
itemSubtitle: {
fontSize: 14,
color: '#20C0C0', // Ciano/Verde-água do subtítulo
marginTop: 2,
},
});