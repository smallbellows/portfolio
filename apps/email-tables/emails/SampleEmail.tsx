import {
    Body,
    Head,
    Heading,
    Html,
    Text,
    Link,
    Hr,
    CodeBlock,
    dracula,
} from '@react-email/components';
import * as React from 'react';
import Table from './_components/Table';

type MyEmailProps<DataType extends object = object> = {
    data: DataType[];
    columns: {
        key: keyof DataType;
        label: string;
        render: (value: unknown, row: unknown) => React.ReactNode;
        containerComponent: 'th' | 'td';
    }[];
};
const MyEmail = ({ data, columns }: MyEmailProps) => {
    return (
        <Html lang="en">
            <Head>
                <title>A sample email with a data table</title>
            </Head>
            <Body>
                <Heading as="h1">A sample email with a data table</Heading>
                <Text>
                    <Link href="https://react.email/">React.Email</Link> has
                    been designed to let developers write email templates using
                    familiar React components. As someone who always feels like
                    I'm time-travelling anytime I have to write HTML for emails,
                    it seemed like a great tool.
                </Text>
                <Text>
                    As I was experimenting with the library, I realized that
                    it's great for basic emails, and helps abstract away a lot
                    of the layout issues that come with writing HTML for emails.
                    But, as it turns out, it doesn't actually help with doing a
                    proper table in the email. Like when you want an actual
                    table, not just tables for helping with layout.
                </Text>
                <Text>
                    So below is my experiment with making a Table component that
                    plays nicely with React.Email and with emails in general
                </Text>
                <Hr />
                <Table<(typeof data)[number]> columns={columns} data={data} />

                <CodeBlock
                    language="typescript"
                    lineNumbers
                    theme={dracula}
                    code={sampleCode}
                />
            </Body>
        </Html>
    );
};

export default MyEmail;

MyEmail.PreviewProps = {
    columns: [
        {
            key: 'name',
            label: 'Name',
            containerComponent: 'th',
            render: (value) => (
                <Text style={{ fontWeight: 'bold' }}>{value}</Text>
            ),
        },
        {
            key: 'color',
            label: 'Color',
            containerComponent: 'td',
            render: (value) => <Text>{value}</Text>,
        },
        {
            key: 'count',
            label: 'Count',
            containerComponent: 'td',
            render: (value) => <Text>{value}</Text>,
        },
        {
            key: 'poisonous',
            label: 'Poisonous',
            containerComponent: 'td',
            render: (value) => <Text>{value === true ? 'Yes' : 'No'}</Text>,
        },
        {
            key: 'description',
            label: 'Description',
            containerComponent: 'td',
            render: (value) => <Text>{value}</Text>,
        },
    ],
    data: [
        {
            name: 'Tall Thistle',
            color: 'Red',
            count: 29,
            poisonous: false,
            description: 'nullam orci pede',
        },
        {
            name: "Ramensk's Sedge",
            color: 'Pink',
            count: 25,
            poisonous: false,
            description: 'a suscipit nulla elit ac',
        },
        {
            name: 'Lanai Colicwood',
            color: 'Aquamarine',
            count: 29,
            poisonous: true,
            description:
                'nulla sed accumsan felis ut at dolor quis odio consequat',
        },
        {
            name: 'Narrowleaf Firethorn',
            color: 'Puce',
            count: 17,
            poisonous: false,
            description:
                'in magna bibendum imperdiet nullam orci pede venenatis non sodales',
        },
        {
            name: 'West Indies Sandmat',
            color: 'Khaki',
            count: 30,
            poisonous: false,
            description:
                'dolor sit amet consectetuer adipiscing elit proin interdum mauris non',
        },
        {
            name: 'Broadleaf Lupine',
            color: 'Yellow',
            count: 32,
            poisonous: false,
            description: 'at velit eu',
        },
        {
            name: 'Everglades Key False Buttonweed',
            color: 'Mauv',
            count: 47,
            poisonous: true,
            description: 'nunc nisl duis bibendum felis sed interdum',
        },
        {
            name: 'Crevice Alumroot',
            color: 'Turquoise',
            count: 46,
            poisonous: false,
            description: 'laoreet ut rhoncus aliquet pulvinar',
        },
        {
            name: 'African Plume',
            color: 'Indigo',
            count: 23,
            poisonous: true,
            description: 'in purus eu magna vulputate luctus cum',
        },
        {
            name: 'Yellow Avens',
            color: 'Purple',
            count: 25,
            poisonous: true,
            description:
                'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla',
        },
    ],
} as MyEmailProps<{
    name: string;
    color: string;
    count: number;
    poisonous: boolean;
    description: string;
}>;

const sampleCode = `
import React from 'react';
import { Table } from './_components/Table';

const data = ${JSON.stringify(MyEmail.PreviewProps.data, null, 2)};
const columns = ${JSON.stringify(MyEmail.PreviewProps.columns, null, 2)};

const SampleTable = () => {
    return (
        <Table columns={columns} data={data} />
    );
}

export default SampleTable;
`;
