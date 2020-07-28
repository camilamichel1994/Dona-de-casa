import React from 'react';
import ButtonNew from '../components/ButtonNew'

export default {
  title: 'Button',
  component: ButtonNew,
};

export const Default = () => <ButtonNew title="Camila" />
export const Outlined = () => <ButtonNew title="Camila" outlined />
export const Disabled = () => <ButtonNew title="Camila" disabled />