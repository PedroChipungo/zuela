import React, { useState, useEffect, createContext, useContext } from 'react';

const GlobalData = createContext();
export const useGlobalData = () => useContext(GlobalData);

async function getDatas() {
    try {
        const response = await fetch('http://localhost:5173/api/someStories/someStories.json');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return { stories: [] };  // Retorna um objeto vazio caso haja um erro
    }
}

const GeneralDataProvider = ({ children }) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        getDatas().then((data) => {
            setDatas(data.stories);
        });
    }, []);

    return (
        <GlobalData.Provider value={{ datas }}>
            {children}
        </GlobalData.Provider>
    );
};

export default GeneralDataProvider;
