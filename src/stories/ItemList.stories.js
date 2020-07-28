import React from 'react';
import ItemList from '../components/ItemList/ItemList'

export default {
  title: 'ItemList',
  component: ItemList,
};

const list = [
  {
    product: 'Leite', 
    amount: 10,
    category: 'Alimento',
  },
  {
    product: 'Sabonete', 
    amount: 12,
    category: 'Limpeza',
  },
]

export const Default = () => <ItemList items={list}/>
