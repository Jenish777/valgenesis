import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomCard from '../card';

describe('CustomCard', () => {
  test('renders the card with the correct title', () => {
    const { getByText } = render(
      <CustomCard title="Sample Title" iconName="clipboard" onPress={() => { }} />
    );
    expect(getByText('Sample Title')).toBeTruthy();
  });

  test('calls the onPress handler when the card is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <CustomCard title="Sample Title" iconName="clipboard" onPress={onPressMock} />
    );
    fireEvent.press(getByTestId('card-container'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
