import React from 'react';
import type { SectionProps } from '@react-email/components';
type TableProps<TDataType extends object> = SectionProps & {
    columns: {
        key: keyof TDataType;
        label: string;
        render: (value: TDataType[keyof TDataType], row) => React.ReactNode;
        containerComponent: 'th' | 'td';
    }[];
    data: TDataType[];
};

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

const td_th = {
    borderLeft: `1px solid #aaa`,
    borderRight: `1px solid #aaa`,
};

const Table = <TDataType extends object>({
    columns,
    data,
    style,
    ...rest
}: TableProps<TDataType>) => {
    return (
        <table
            style={{ ...table, ...style }}
            cellPadding={2}
            cellSpacing={2}
            {...rest}
        >
            <thead style={thead}>
                <tr style={tr}>
                    {columns.map((header) => (
                        <th key={header.key} style={td_th}>
                            {header.label}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={tr}>
                        {columns.map((column, colIndex) => {
                            const Container = column.containerComponent;
                            return (
                                <Container key={colIndex} style={td_th}>
                                    {column.render(row[column.key], row)}
                                </Container>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
