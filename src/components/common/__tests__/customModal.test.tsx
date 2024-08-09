import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CommonModal from '../modal';

describe('CustomModal', () => {
  const onCloseMock = jest.fn();
  const onPrimaryActionMock = jest.fn();
  const onSecondaryActionMock = jest.fn();

  const props = {
    visible: true,
    title: 'Test Modal',
    onClose: onCloseMock,
    onPrimaryAction: onPrimaryActionMock,
    onSecondaryAction: onSecondaryActionMock,
    primaryActionTitle: 'Import File',
    secondaryActionTitle: 'Export File',
  };

  it('renders correctly', () => {
    const { getByText } = render(<CommonModal {...props} />);
    expect(getByText('Test Modal')).toBeTruthy();
    expect(getByText('Import File')).toBeTruthy();
    expect(getByText('Export File')).toBeTruthy();
  });


  it('calls onPrimaryAction when Import File button is pressed', () => {
    const { getByText } = render(<CommonModal {...props} />);
    const importButton = getByText('Import File');
    fireEvent.press(importButton);
    expect(onPrimaryActionMock).toHaveBeenCalled();
  });

  it('calls onSecondaryAction when Export File button is pressed', () => {
    const { getByText } = render(<CommonModal {...props} />);
    const exportButton = getByText('Export File');
    fireEvent.press(exportButton);
    expect(onSecondaryActionMock).toHaveBeenCalled();
  });
});
