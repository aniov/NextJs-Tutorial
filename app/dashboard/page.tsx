import React from 'react';

interface IPage {
    dummyProp?: undefined;
}

const Page: React.FC<IPage> = ({dummyProp}) => {

    return (
        <div>Dashboard Page</div>
    );
};

export default Page;
