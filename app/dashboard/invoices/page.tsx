import React from 'react';

interface IPage {
    dummyProp?: undefined;
}

const Page: React.FC<IPage> = ({ dummyProp }) => {

    return <p>Invoices  Page</p>;
};

export default Page;