import * as React from 'react';
import ListItem from './ListItem';
import { App } from '../interfaces';

type Props = {
    items: App[];
};

const List = ({ items }: Props) => (
    <div>
        {items.map((item) => (
            <ListItem data={item} />
        ))}
    </div>
);

export default List;
