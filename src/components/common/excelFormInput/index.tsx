import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';
import CustomInput from '../input';
import CustomButton from '../button';
import { ExcelInputFormProps } from './types';
import { FormInput } from '../../../styles/common/excelFormInput';
import { htmlContent } from '../../../utils/staticFile/htmlContent';

const ExcelInputForm: React.FC<ExcelInputFormProps> = ({
    initialFormula = '',
    labelFormula,
    webViewRef,
}) => {
    const [row, setRow] = useState<string>('1');
    const [column, setColumn] = useState<string>('A');
    const [value, setValue] = useState<string>('');
    const [formula, setFormula] = useState<string>(initialFormula);
    const [resultRow, setResultRow] = useState<string>('1');
    const [resultColumn, setResultColumn] = useState<string>('C');

    useEffect(() => {
        setFormula(initialFormula);
    }, [initialFormula]);

    const updateExcel = () => {
        const script = `
      var sheet = spread.getActiveSheet();
      sheet.setValue(${row} - 1, '${column}', parseFloat(${value}) || 0);
      sheet.setFormula(${resultRow} - 1, '${resultColumn}', ${JSON.stringify(formula)});
      sheet.recalcAll();
    `;
        webViewRef.current?.injectJavaScript(script);
    };

    return (
        <ScrollView contentContainerStyle={FormInput.container}>
            <View style={FormInput.inputContainer}>
                <CustomInput
                    label="Enter row number:"
                    value={row}
                    onChangeText={setRow}
                    keyboardType="numeric"
                />
            </View>
            <View style={FormInput.inputContainer}>
                <CustomInput
                    label="Enter column number:"
                    value={column}
                    onChangeText={setColumn}
                />
            </View>
            <View style={FormInput.inputContainer}>
                <CustomInput
                    label="Enter value:"
                    value={value}
                    onChangeText={setValue}
                    keyboardType="numeric"
                />
            </View>
            <View style={FormInput.inputContainer}>
                <Text>Formula ({labelFormula}):</Text>
                <CustomInput
                    value={formula}
                    onChangeText={setFormula}
                />
            </View>
            <View style={FormInput.inputContainer}>
                <CustomInput
                    label="Enter result row number:"
                    value={resultRow}
                    onChangeText={setResultRow}
                    keyboardType="numeric"
                />
            </View>
            <View style={FormInput.inputContainer}>
                <CustomInput
                    label="Enter result column number:"
                    value={resultColumn}
                    onChangeText={setResultColumn}
                />
            </View>
            <CustomButton
                title="Apply Formula"
                onPress={updateExcel}
                style={FormInput.importExportButton}
            />
            <WebView
                ref={webViewRef}
                source={{ html: htmlContent }}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                style={{ height: 400, marginTop: 20 }}
                onLoadEnd={() => webViewRef.current?.injectJavaScript(`
          var spread = new GC.Spread.Sheets.Workbook(document.getElementById("ss"));
          spread.suspendPaint();
          var sheet = spread.getActiveSheet();
          spread.resumePaint();
        `)}
            />
        </ScrollView>
    );
};

export default ExcelInputForm;
