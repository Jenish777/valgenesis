import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CustomInput from '../input';

describe('CustomInput', () => {
    test('renders the input with the correct label', () => {
        const { getByText } = render(
            <CustomInput
                label="Test Label"
                value="Test Value"
                onChangeText={() => { }}
            />
        );
        expect(getByText('Test Label')).toBeTruthy();
    });

    test('renders the input without label when label is not provided', () => {
        const { queryByText } = render(
            <CustomInput
                value="Test Value"
                onChangeText={() => { }}
            />
        );
        expect(queryByText('Test Label')).toBeNull();
    });

    test('displays an error message when provided', () => {
        const { getByText } = render(
            <CustomInput
                label="Test Label"
                errorMessage="Error occurred"
                value="Test Value"
                onChangeText={() => { }}
            />
        );
        expect(getByText('Error occurred')).toBeTruthy();
    });

    test('updates value on change', () => {
        const onChangeTextMock = jest.fn();
        const { getByDisplayValue } = render(
            <CustomInput
                label="Test Label"
                value="Initial Value"
                onChangeText={onChangeTextMock}
            />
        );

        fireEvent.changeText(getByDisplayValue('Initial Value'), 'New Value');
        expect(onChangeTextMock).toHaveBeenCalledWith('New Value');
    });

});
