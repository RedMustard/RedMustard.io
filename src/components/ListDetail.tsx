import * as React from 'react';

import { App } from '../interfaces';

type ListDetailProps = {
    item: App;
};

const ListDetail = ({ item: user }: ListDetailProps) => (
    <div>
        <h1>{user.title}</h1>
        {/* <p>ID: {user.id}</p> */}
    </div>
);

export default ListDetail;
