import { v4 as uuidv4 } from 'uuid'
class Item {
    id: string
    name: string
    price: number
    quantity: number
    description: string


    constructor(name: string, price: number, quantity: number, description: string) {
        //assign the properties
        this.id = uuidv4()
        this.name = name
        this.price = price
        this.quantity = quantity
        this.description = description

    }
}

export { Item}