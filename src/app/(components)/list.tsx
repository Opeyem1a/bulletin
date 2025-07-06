import { CSSProperties, ReactNode } from 'react';
import { NonEmptyArray } from '@/utils/types';

interface ListProps {
    ordered: boolean;
    items: NonEmptyArray<ReactNode>;
}

const List = ({ ordered, items: _items }: ListProps) => {
    const listStyle: CSSProperties = {
        fontSize: '16px',
        lineHeight: 1.65,
    };
    const [firstItem, ...items] = _items;
    const itemsMarkup = (
        <>
            <ListItem isFirst={true}>{firstItem}</ListItem>
            {items.map((item, index) => (
                // key doesn't matter as emails are not reactive webapps
                <ListItem key={index} isFirst={false}>
                    {item}
                </ListItem>
            ))}
        </>
    );

    if (ordered) {
        return <ol style={listStyle}>{itemsMarkup}</ol>;
    }
    return <ul style={listStyle}>{itemsMarkup}</ul>;
};

interface ListItemProps {
    children: ReactNode;
    isFirst: boolean;
}

const ListItem = ({ children, isFirst }: ListItemProps) => {
    return <li style={isFirst ? { marginTop: '8px' } : {}}>{children}</li>;
};

export { List, ListItem };
