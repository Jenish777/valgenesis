import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomButton from '../button';
import { Text } from 'react-native';
import CustomRadioButton from '../button/radioButton';

describe('CustomButton', () => {
  test('renders the button with the correct title', () => {
    const { getByText } = render(<CustomButton title="Press Me" onPress={() => { }} />);
    expect(getByText('Press Me')).toBeTruthy();
  });

  test('calls the onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomButton title="Press Me" onPress={onPressMock} />);
    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('disables the button when disabled is true', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <CustomButton title="Press Me" onPress={onPressMock} disabled={true} />
    );

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  test('renders the icon when provided', () => {
    const TestIcon = <Text testID="TestIcon">Icon</Text>;
    const { getByTestId } = render(
      <CustomButton title="Press Me" onPress={() => { }} icon={TestIcon} />
    );

    expect(getByTestId('TestIcon')).toBeTruthy();
  });
});

describe('CustomRadioButton', () => {
  test('renders the radio button with the correct label', () => {
    const { getByText } = render(<CustomRadioButton selected={false} onPress={() => { }} label="Option 1" />);
    expect(getByText('Option 1')).toBeTruthy();
  });

  test('calls the onPress handler when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(<CustomRadioButton selected={false} onPress={onPressMock} label="Option 1" />);
    fireEvent.press(getByText('Option 1'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  test('displays the selected state correctly', () => {
    const { getByTestId } = render(<CustomRadioButton selected={true} onPress={() => { }} label="Option 1" />);
    expect(getByTestId('selected-radio')).toBeTruthy();
  });
});