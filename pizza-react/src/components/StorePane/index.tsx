import React from 'react'
import { Stores, Store, StoreOrder } from '../../data'

interface StorePaneProps {
    stores: Stores,
}

interface StoreComponentProps {
    key: string,
    index: string,
    details: Store,
}

function StoreComponent(props: StoreComponentProps) {
    const getCount = (status: string) =>
        props.details.orders
            .filter(function (n) { return n.status === status })
            .length

    return (
        <li>
            <p>{props.index}</p>
            <p>Orders Confirmed: {getCount("Confirmed")}</p>
            <p>Orders In The Oven: {getCount("In The Oven")}</p>
            <p>Orders Delivered: {getCount("Delivered")}</p>
        </li>
    )
}

export default function StorePane(props: StorePaneProps) {
    return <div id="stores-pane">
        <h1>Stores & Ovens</h1>
        <ul>
            {Object.keys(props.stores).map((store) =>
                <StoreComponent
                    key={store}
                    index={store}
                    details={props.stores[store]}
                />)}
        </ul>
    </div>
}
