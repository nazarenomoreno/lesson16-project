
import {  createContext, type ReactElement, useState, useEffect} from "react"

export type Productype = {
    sku: string,
    name: string,
    price: number
}


const initState: Productype[] = []

/*
const initState: Productype[] = [
    
        {
            "sku": "item0001",
            "name": "Widget",
            "price": 9.99
        },
        {
            "sku": "item0002",
            "name": "Premium Widget",
            "price": 19.99
        },
        {
            "sku": "item0003",
            "name": "Deluxe Widget",
            "price": 29.99
        }
    

]
*/


export type UseProductsContextType = {
    products: Productype[]
}

const initContextState: UseProductsContextType = {
    products: []
}

const productsContext = createContext<UseProductsContextType>(initContextState)

type ChildrenType = {children?: ReactElement | ReactElement[]}



export const ProductsProvider = ({children}: ChildrenType): ReactElement => {
    const [products, setProducts] = useState<Productype[]>(initState)


    useEffect(()=>{
        const fetchProductos = async():Promise<Productype[]> =>{
            const data = await fetch("http://localhost:3500/products")
            .then(res =>{
                return res.json()
            }).catch(err =>{
                if (err instanceof Error) console.log(err.message)
            })
            return data
        }
        
        fetchProductos().then(products => setProducts(products))

    }, [])

    return (
        <productsContext.Provider value={{ products }}>
            {children}
        </productsContext.Provider>
    )
} 

export default productsContext