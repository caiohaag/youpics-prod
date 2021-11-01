export const Users = [
    {id: 1, username: 'frodo', password: '12345', city: 'Hobbiton/Shire', following: 200, followers: 150, greet: 'Olá, amigos!'},
    {id: 2, username: 'gimli', password: '12345', city: 'Great Hall/Moria', following: 70, followers: 250, greet: 'Ninguém confia em elfos!'},
    {id: 3, username: 'eowyn', password: '12345', city: 'Edoras/Rohan', following: 300, followers: 175, greet: 'Rohan responderá o chamado!'},
    {id: 4, username: 'legolas', password: '12345', city: 'Tree/Lothlorien', following: 10, followers: 1500, greet: 'Oi.'},
]

export const Posts = [
    {
        id: 1,
        userId: 1,
        likes: 5,
        picture: 'https://followthecolours.com.br/wp-content/uploads/2015/04/follow-the-colours-Hobbit-visite-cenario-filme-Nova-Zelandia-Hobbiton-Tours-01.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro earum saepe nesciunt id debitis sequi enim minus rerum adipisci aut velit minima expedita est ea, consequatur necessitatibus! Cum, esse.',
        comments: [{id: 1, userId: 2, comment: 'Bela foto!'},{id: 2, userId: 1, comment: 'Obrigado!'},{id: 3, userId: 3, comment: 'Curti, compartilhei'}],
        createdAt: '2021-10-30T00:00:00'
    },
    {
        id: 2,
        userId: 1,
        likes: 0,
        picture: 'https://images.squarespace-cdn.com/content/v1/5d3f5ab4e0b0f80001519db3/1626990457893-KDTMF2R30NHNAV672GYN/CFC24B4A-AB8B-49A6-A53A-EC69C297D9DE.jpeg?format=2500w',
        text: 'Teste post',
        comments: [{id: 7, userId: 4, comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro earum saepe nesciunt id debitis sequi enim minus rerum adipisci aut velit minima expedita est ea, consequatur necessitatibus! Cum, esse.'}],
        createdAt: '2021-11-01T13:00:00'
    },
    {
        id: 3,
        userId: 2,
        likes: 10,
        picture: 'https://alemdosoledalua.files.wordpress.com/2013/05/moria-1.jpg',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro earum saepe nesciunt id debitis sequi enim minus rerum adipisci aut velit minima expedita est ea, consequatur necessitatibus! Cum, esse.',
        createdAt: '2020-10-30T00:00:00'
    },
    {
        id: 4,
        userId: 3,
        likes: 2,
        picture: 'https://cdna.artstation.com/p/assets/images/images/001/608/278/large/onur-bakar-edoras.jpg?1449427228&dl=1',
        text: 'Texto do post',
        createdAt: '2021-10-30T00:00:00'
    },
    {
        id: 5,
        userId: 4,
        likes: 15,
        picture: 'https://cdna.artstation.com/p/assets/images/images/010/943/818/large/tim-catherall-lothlorien.jpg?1527064507',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla porro earum saepe nesciunt id debitis sequi enim minus rerum adipisci aut velit minima expedita est ea, consequatur necessitatibus! Cum, esse.',
        createdAt: '2021-09-30T00:00:00'
    },
   
]