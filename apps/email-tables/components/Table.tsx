import React from 'react';

interface TableProps<TDataType extends object> {
    columnHeaders: {
        key: keyof TDataType;
        label: string;
        isKeyRowHeader?: boolean;
    }[];
    data: TDataType[];
}

// styles
const table = {
    border: `1px solid #000`,
    textAlign: `left`,
    lineHeight: 1.25,
    borderCollapse: `collapse`,
};

const thead = {
    backgroundColor: `#f2f2f2`,
    borderBottom: `1px solid #000`,
};

const tr = {
    borderBottom: `1px solid #aaa`,
};

export const Table = <TDataType extends object>({
    columnHeaders,
    data,
}: TableProps<TDataType>) => {
    return (
        <table style={table} cellPadding={2} cellSpacing={2}>
            <thead style={thead}>
                <tr style={tr}>
                    {columnHeaders.map((header) => (
                        <th key={header.key}>{header.label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={tr}>
                        {columnHeaders.map((column, colIndex) => {
                            if (column.isKeyRowHeader) {
                                return (
                                    <th key={colIndex}>{row[column.key]}</th>
                                );
                            }
                            return <td key={colIndex}>{row[column.key]}</td>;
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
