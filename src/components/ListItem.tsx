import React from 'react';
import Link from 'next/link';

import { App } from '../interfaces';

type Props = {
    data: App;
};

const ListItem = ({ data }: Props) => (
    <Link href="/apps/[route]" as={`/apps/${data.route}`}>
        <div>
            {data.title}
        </div>
    </Link>
);

export default ListItem;
