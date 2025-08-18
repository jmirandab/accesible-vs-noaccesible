export const movies = [
    {
        id: 'drama-aqui-y-ahora',
        title: 'Aquí y ahora',
        genre: 'Drama',
        image: '/img/aqui_y_ahora.jpg',
        description: 'Una emotiva historia sobre la importancia de vivir el presente y valorar cada momento con nuestros seres queridos. Una reflexión profunda sobre la vida, la familia y el tiempo.',
        cast: [
            {
                name: 'María González',
                role: 'director',
                profilePicture: null
            },
            {
                name: 'Carlos Mendez',
                role: 'actor',
                profilePicture: null
            },
            {
                name: 'Ana Rodríguez',
                role: 'actor',
                profilePicture: null
            }
        ]
    },
    {
        id: 'drama-clara-sola',
        title: 'Clara Sola',
        genre: 'Drama',
        image: '/img/clara_sola.jpeg',
        description: 'La historia de una mujer que busca su independencia y autodescubrimiento en un entorno rural lleno de tradiciones. Un drama íntimo y poderoso sobre la liberación personal.',
        cast: [
            {
                name: 'Nathalie Álvarez',
                role: 'director',
                profilePicture: null
            },
            {
                name: 'Wendy Chinchilla',
                role: 'actor',
                profilePicture: null
            },
            {
                name: 'Daniel Castañeda',
                role: 'actor',
                profilePicture: null
            }
        ]
    },
    {
        id: 'comedia-cascos-indomables',
        title: 'Cascos Indomables',
        genre: 'Comedia',
        image: '/img/cascos_indomables.jpg',
        description: 'Una divertida comedia sobre un grupo de motociclistas que deben enfrentar desafíos inesperados en su aventura por las carreteras. Risas garantizadas en cada kilómetro.',
        cast: [
            {
                name: 'Roberto Jiménez',
                role: 'director',
                profilePicture: null
            },
            {
                name: 'Luis Morales',
                role: 'actor',
                profilePicture: null
            },
            {
                name: 'Patricia Vargas',
                role: 'actor',
                profilePicture: null
            }
        ]
    },
    {
        id: 'comedia-por-las-plumas',
        title: 'Por las plumas',
        genre: 'Comedia',
        image: '/img/por_las_plumas.jpg',
        description: 'Una comedia ligera y familiar sobre las aventuras de un grupo de amigos que deciden abrir una granja avícola. Momentos divertidos y situaciones inesperadas los esperan.',
        cast: [
            {
                name: 'Sofía Herrera',
                role: 'director',
                profilePicture: null
            },
            {
                name: 'Miguel Torres',
                role: 'actor',
                profilePicture: null
            },
            {
                name: 'Carmen Delgado',
                role: 'actor',
                profilePicture: null
            }
        ]
    },
    {
        id: 'ciencia-orbita-prima',
        title: 'Órbita Prima',
        genre: 'Ciencia ficción',
        image: '/img/orbita_prima.jpg',
        description: 'Una épica aventura espacial que nos lleva a explorar nuevos mundos y civilizaciones. Una historia de supervivencia, descubrimiento y la búsqueda de un nuevo hogar para la humanidad.',
        cast: [
            {
                name: 'Diego Ramírez',
                role: 'director',
                profilePicture: null
            },
            {
                name: 'Elena Castillo',
                role: 'actor',
                profilePicture: null
            },
            {
                name: 'Andrés Vega',
                role: 'actor',
                profilePicture: null
            }
        ]
    }
];

// Group movies by genre for TreeView
export const peliculas = movies.reduce((acc, movie) => {
    if (!acc[movie.genre]) {
        acc[movie.genre] = [];
    }
    acc[movie.genre].push(movie);
    return acc;
}, {});

export default movies;