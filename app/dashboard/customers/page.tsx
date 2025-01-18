import React from 'react';

interface IPage {
    dummyProp?: undefined;
}

const Page: React.FC<IPage> = ({ dummyProp }) => {

    return <p>Customers Page</p>;
};

export default Page;
