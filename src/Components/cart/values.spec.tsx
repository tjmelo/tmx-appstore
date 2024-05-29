import { subtotal, totalDiscount } from "./values"

const valueTest = {
    discount: 5,
    id: 3,
    total: 5
}

test('Should test values subtotal and total discount', () => {
    subtotal(valueTest, [])
    totalDiscount(valueTest, [])
})
