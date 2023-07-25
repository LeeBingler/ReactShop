import React, { useEffect, useState } from 'react';
import LoadingScreen from '../../../Pages/LoadingScreen';
import { PropTypes } from 'prop-types';


export const ItemsContext = React.createContext();
export const GetItemByIdContext = React.createContext();

function ItemsProvider({ children }) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    function getItemById(id) {
        const Items = items;
        if (typeof id != 'number') {
            console.error('id is not a number');
            return [];
        }

        return Items.filter((item) => {
            return item.id === id;
        })
    }

    useEffect(() => {
        const fetchAllItems = async () => {
            await fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((data) => {
                    data.forEach((item) => {
                        item.number = 0;
                        return item;
                    })
                    setItems(data);
                    setLoading(prev => !prev);
                })
                .catch((error) => console.log(error));
        };
        fetchAllItems();
        return () => {
            setItems([]);
            setLoading(prev => !prev);
        }
    }, []);

    return (
        <ItemsContext.Provider value={items}>
            <GetItemByIdContext.Provider value={getItemById}>
                {loading ? <LoadingScreen /> : children}
            </GetItemByIdContext.Provider>
        </ItemsContext.Provider>
    )
}

ItemsProvider.propTypes = {
    children: PropTypes.element
}

export default ItemsProvider;