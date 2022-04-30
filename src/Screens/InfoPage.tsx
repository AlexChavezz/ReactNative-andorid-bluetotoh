import { Capa1, Capa2, Capa3, Capa4, Capa5, Capa6, Capa7 } from '../components/capas';
import React from 'react';
import { Header } from '../components/Header';
export const InfoPage = ({ route }) => {
    const { arg } = route.params;
    if (arg === 1) {
        return (
            <>
                <Header />
                <Capa1 />
            </>
        );

    } else if (arg === 2) {
        return (
            <>
                <Header />
                <Capa2 />
            </>
        );

    } else if (arg === 3) {
        return (
            <>
                <Header />
                <Capa3 />
            </>
        );

    } else if (arg === 4) {
        return (
            <>
                <Header />
                <Capa4 />
            </>

        );

    } else if (arg === 5) {
        return (
            <>
                <Header />
                <Capa5 />
            </>
        );

    } else if (arg === 6) {
        return (
            <>
                <Header />
                <Capa6 />
            </>
        );

    } else if (arg === 7) {
        return (
            <>
                <Header />
                <Capa7 />
            </>
        );

    }
}