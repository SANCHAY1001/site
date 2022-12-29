import bcrypt from 'bcryptjs'
const data  =  {
    users: [

        {
            name: 'Saksham',
            email: 'guptasakshamop@gmail.com',
            password: bcrypt.hashSync('123455'),
            isAdmin: false,
        }

    ],
        products : [
            {
                name: "Spice new    ",
                slug: "spice-new",
                category: "Spice",
                image: '/../public/images/pepper.png',
                price: 70 , 
                brand: 'MDH',
                rating: 4.5,
                numReviews: 8,
                countInStock: 20,
                description: 'A popular product',
            },
        ]
}


export default data;