import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { Tabs } from 'expo-router';
export default function TabLayout() {
// A cor azul do seu design
const headerBlue = '#005FFF';
return (
<Tabs
screenOptions={{
// --- ESTILOS DA BARRA DE ABAS (INFERIOR) ---
tabBarActiveTintColor: '#FFFFFF', // Ícone ativo (selecionado) fica branco
tabBarInactiveTintColor: '#A8CFFF', // Ícone inativo fica um branco-azulado
tabBarLabelStyle: { display: 'none' }, // Esconde o texto (Início, Praias, etc.)
tabBarStyle: {
backgroundColor: headerBlue, // Fundo da barra de abas fica azul
borderTopWidth: 0, // Remove a linha de borda superior
},
// --- ESTILOS DO HEADER (SUPERIOR) ---
headerStyle: {
backgroundColor: headerBlue, // Cor de fundo do header
},
headerTintColor: '#FFFFFF', // Cor do texto do título (branco)
headerTitleStyle: {
fontWeight: 'bold', // Título em negrito
},
}}
>
{/* --- ABA 1: Início --- */}
<Tabs.Screen
name="index" // app/(tabs)/index.tsx
options={{
title: 'Início',
tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="home" color={color}
/>,
}}
/>
{/* --- ABA 2: Praias --- */}
<Tabs.Screen
name="explore" // app/(tabs)/explore.tsx
options={{
title: 'Praias',
// MUDAMOS O ÍCONE para o guarda-sol de praia

tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="umbrella-beach"
color={color} />,
}}
/>
{/* --- ABA 3: Configurações --- */}
<Tabs.Screen
name="config" // app/(tabs)/config.tsx
options={{
title: 'Configurações',
tabBarIcon: ({ color }) => <FontAwesome5 size={28} name="cog" color={color}
/>,
}}
/>
</Tabs>
);
}