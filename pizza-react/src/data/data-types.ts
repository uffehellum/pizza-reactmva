
export interface Conversation {
    who: string,
    text: string,
    time: Date,
}

export interface Pizza {
    toppings: string[],
    size: string,
}

export interface HumanOrder {
    time: Date,
    pizzas: Pizza[],
    price: number,
    address: string,
    status: string,
}

export interface Human {
    conversations: Conversation[],
    orders: HumanOrder[],
}

export interface Humans {
    [name:string]:Human,
}

export interface StoreOrder extends HumanOrder {
    human:  string,
}

export interface Store {
    orders: StoreOrder[],
}

export interface Stores {
    [name:string]:Store,
}

export interface SampleDataType {
    stores: any,
    humans: Humans,
}
