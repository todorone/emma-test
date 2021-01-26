// === APPLICATION STATE ===
class Store {
  // Fetched from https://uifaces.co/
  contacts: Contact[] = [
    {
      name: 'Jason Ehle',
      email: 'jason.ehle@gmail.com',
      position: 'Manager',
      photo:
        'https://uifaces.co/our-content/donated/d5f5cc2a8835d69d6dde70875a793ce6.jpeg',
      bio,
    },
    {
      name: 'Yifei Liu',
      email: 'yifei.liu@gmail.com',
      position: 'Director',
      photo:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMTYyOTQ2NjkyMl5BMl5BanBnXkFtZTcwODk5NjQzOA@@._V1_UY256_CR5,0,172,256_AL_.jpg',
      bio,
    },
    {
      name: 'Nia Matos',
      email: 'nia.matos@gmail.com',
      position: 'Delivery Driver',
      photo:
        'https://images.pexels.com/photos/449734/pexels-photo-449734.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb',
      bio,
    },
    {
      name: 'Pranav Creativ3',
      email: 'pranav.creativ3@gmail.com',
      position: 'Attorney',
      photo: 'https://uifaces.co/our-content/donated/xsRnZdHu.jpg',
      bio,
    },
    {
      name: 'Manuel Osorio(MKD)',
      email: 'manuel.osorio(mkd)@gmail.com',
      position: 'Executive Assistant',
      photo: 'https://uifaces.co/our-content/donated/XPz-t8Wr.jpg',
      bio,
    },
    {
      name: 'Emeline Duarte',
      email: 'emeline.duarte@gmail.com',
      position: 'Marketing',
      photo: 'https://randomuser.me/api/portraits/women/15.jpg',
      bio,
    },
    {
      name: 'Sebastian Stan',
      email: 'sebastian.stan@gmail.com',
      position: 'Data Entry',
      photo:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BNTk2OGU4NzktODhhOC00Nzc2LWIyNzYtOWViMjljZGFiNTMxXkEyXkFqcGdeQXVyMTE1NTQwOTk@._V1_UY256_CR12,0,172,256_AL_.jpg',
      bio,
    },
    {
      name: 'Natali Craig',
      email: 'natali.craig@gmail.com',
      position: 'Administrative Assistant',
      photo:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
      bio,
    },
    {
      name: 'Ryan Coogler',
      email: 'ryan.coogler@gmail.com',
      position: 'Marketing',
      photo:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjI2MTYyNzU1MV5BMl5BanBnXkFtZTgwNTE4NzI5NzE@._V1_UX172_CR0,0,172,256_AL_.jpg',
      bio,
    },
    {
      name: 'Howard Lee',
      email: 'howard.lee@gmail.com',
      position: 'Delivery Driver',
      photo: 'https://randomuser.me/api/portraits/women/6.jpg',
      bio,
    },
    {
      name: 'Kari Rasmussen',
      email: 'kari.rasmussen@gmail.com',
      position: 'Attorney',
      photo: 'https://i.imgur.com/oC8EjRE.jpg',
      bio,
    },
    {
      name: 'Emmalee Mclain',
      email: 'emmalee.mclain@gmail.com',
      position: 'Customer Service Representative',
      photo:
        'https://images.generated.photos/KGaIMPSY1rkFG2lUKcFjHkWajb0PBPqW1nizbjOOxvo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAyNjAzOTEuanBn.jpg',
      bio,
    },
    {
      name: 'Pierre Hackett',
      email: 'pierre.hackett@gmail.com',
      position: 'Part Time',
      photo:
        'https://images.generated.photos/8aT4WFrZGNATmlJ_BNyyfn8iC6ZjQwy4hFDB9qmg7yo/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTgxNTkuanBn.jpg',
      bio,
    },
    {
      name: 'Molly Ringwald',
      email: 'molly.ringwald@gmail.com',
      position: 'Software Engineer',
      photo:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BMjM4MzM1NTkxNF5BMl5BanBnXkFtZTgwMzA4NTk3MjE@._V1_UY256_CR14,0,172,256_AL_.jpg',
      bio,
    },
    {
      name: 'Sarah Silverman',
      email: 'sarah.silverman@gmail.com',
      position: 'Graphic Designer',
      photo:
        'https://m.media-amazon.com/images/M/MV5BMTM2NzI3NTU5Nl5BMl5BanBnXkFtZTcwODkxODAwNA@@._V1_UY256_CR9,0,172,256_AL_.jpg',
      bio,
    },
    {
      name: 'Yadira Redmond',
      email: 'yadira.redmond@gmail.com',
      position: 'Attorney',
      photo:
        'https://images.generated.photos/Vxo-E6jKCT6fwNhd3yriFD6SIj1xWQU0axLr5X4zB1I/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzA2NDU4NDguanBn.jpg',
      bio,
    },
    {
      name: 'Tamar Heard',
      email: 'tamar.heard@gmail.com',
      position: 'Part Time',
      photo:
        'https://images.generated.photos/HjCCTHGwYG32Lu0yxyXYgjRUaN5k0PnraNAKvisqdeQ/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzAx/MzQzODcuanBn.jpg',
      bio,
    },
    {
      name: 'Kenneth Thompson',
      email: 'kenneth.thompson@gmail.com',
      position: 'Business Analyst',
      photo:
        'https://images.generated.photos/1RqfCen6OzTwpa1Z6VcFwLpnmFzHtUa0grdPklsPFwA/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zLzA5/OTcwMjQuanBn.jpg',
      bio,
    },
    {
      name: 'Eliana Stout',
      email: 'eliana.stout@gmail.com',
      position: 'Marketing',
      photo:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=046c29138c1335ef8edee7daf521ba50',
      bio,
    },
    {
      name: 'Dacre Montgomery',
      email: 'dacre.montgomery@gmail.com',
      position: 'Accountant',
      photo:
        'https://images-na.ssl-images-amazon.com/images/M/MV5BZTM4ODlhMTEtMmEyNy00M2RhLWE3MDQtY2RhMGVmNjllM2VjXkEyXkFqcGdeQXVyMjQ0NDA5NDM@._V1_UX172_CR0,0,172,256_AL_.jpg',
      bio,
    },
  ]
}

export const store = new Store()

export interface Contact {
  name: string
  email: string
  position: string
  photo: string
  bio: string
}

const bio =
  'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls.'
