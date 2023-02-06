let productos = [
    { id: '1', name: 'prueba 1', description: 'descripcion 1', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_994609-MLA47871010530_102021-O.webp', },
    { id: '2', name: 'prueba 2', description: 'descripcion 2', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_706588-MLA32660232312_102019-O.webp', },
    { id: '3', name: 'prueba 3', description: 'descripcion 3', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_947382-MLA32649809938_102019-O.webp', },
    { id: '4', name: 'prueba 4', description: 'descripcion 4', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_806308-MLA52221851834_102022-O.webp', },
    { id: '5', name: 'prueba 5', description: 'descripcion 5', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_994609-MLA47871010530_102021-O.webp', },
    { id: '6', name: 'prueba 6', description: 'descripcion 6', category: 'ipad', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_844286-MLA46975298762_082021-O.webp', },
    { id: '7', name: 'prueba 7', description: 'descripcion 7', category: 'iphone', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_651710-MLM51559386433_092022-O.webp' },
    { id: '8', name: 'prueba 8', description: 'descripcion 8', category: 'iphone', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_887477-MLA43978261567_112020-O.webp' },
    { id: '9', name: 'prueba 9', description: 'descripcion 9', category: 'iphone', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_851545-MLA47777198395_102021-O.webp' },
    { id: '10', name: 'prueba 10', description: 'descripcion 10', category: 'iphone', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_858254-MLA53530982682_012023-O.webp' },
    { id: '11', name: 'prueba 11', description: 'descripcion 11', category: 'iphone', stock: '5', price: 100, image: 'https://http2.mlstatic.com/D_NQ_NP_990308-MLA52140925580_102022-O.webp' },

]

export const gFetch = () => {
    return new Promise((res, rej) => {
        //acciones q la entrega va a ser asincronica
        setTimeout(() => {
            res(productos)
        }, 1000)
    })
}

export default gFetch;
