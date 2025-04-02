import {
    Body,
    Head,
    Heading,
    Html,
    Text,
    Link,
    Hr,
} from '@react-email/components';
import * as React from 'react';
import { Table } from '../components/Table';

export const MyEmail = () => {
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
                <Table<{
                    name: string;
                    color: string;
                    count: number;
                    poisonous: boolean;
                    description: string;
                }>
                    columnHeaders={[
                        {
                            key: 'name',
                            label: 'Name',
                            isKeyRowHeader: true,
                        },
                        {
                            key: 'color',
                            label: 'Color',
                        },
                        {
                            key: 'count',
                            label: 'Count',
                        },
                        {
                            key: 'poisonous',
                            label: 'Poisonous',
                        },
                        {
                            key: 'description',
                            label: 'Description',
                        },
                    ]}
                    data={[
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
                            description:
                                'nunc nisl duis bibendum felis sed interdum',
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
                            description:
                                'in purus eu magna vulputate luctus cum',
                        },
                        {
                            name: 'Yellow Avens',
                            color: 'Purple',
                            count: 25,
                            poisonous: true,
                            description:
                                'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla',
                        },
                    ]}
                />
            </Body>
        </Html>
    );
};

export default MyEmail;
