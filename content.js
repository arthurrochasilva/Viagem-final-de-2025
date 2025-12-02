const itineraryData = {
    "2025-12-20": {
        title: "O Começo da Viagem ❣️",
        events: [
            {
                time: "15:15",
                description: "Viagem de Rolim de Moura (RO) para Pimenta Bueno (RO)",
                images: [{ src: "Imagens/RolimDeMoura.jpeg", caption: "Rolim de Moura" }],
                icon: "🚗"
            },
            {
                time: "17:15",
                description: "Ônibus de Pimenta Bueno (RO) para Cuiabá (MT)",
                details: "Previsão de chegada: 07:50 (dia seguinte). <br><strong>Poltrona: 41</strong>",
                icon: "🚌"
            }
        ]
    },
    "2025-12-21": {
        title: "Cuiabá e Voo para SP ✈️",
        events: [
            {
                time: "07:50",
                description: "Chegada em Cuiabá",
                images: [{ src: "Imagens/Cuiaba.jpg", caption: "Cuiabá" }],
                icon: "📍"
            },
            {
                time: "Manhã",
                description: "Hospedagem no <strong>Hits Pantanal Hotel</strong>",
                images: [
                    "Imagens/FrenteHotelCuiaba.png",
                    "Imagens/QuartoHotelCuiaba.png",
                    "Imagens/QuartoHotelCuiaba2.png",
                    "Imagens/BanheiroHotelCuiaba.png",
                    "Imagens/BanheiroHotelCuiaba2.png"
                ],
                icon: "🏨"
            },
            {
                time: "16:00",
                description: "Saída do hotel rumo ao aeroporto",
                images: [
                    { src: "Imagens/AeroportoCuiaba.jpg", caption: "Aeroporto de Cuiabá" }
                ],
                icon: "🚕"
            },
            {
                time: "18:10",
                description: "Avião de Cuiabá (MT) para Guarulhos (SP)",
                details: "Chegada prevista: 21:45. <br><strong>Código da reserva: DGHRQF</strong>",
                images: [{ src: "Imagens/AviaoLatam.jpg", caption: "Avião LATAM" }],
                icon: "✈️"
            },
            {
                time: "21:45",
                description: "Encontro no Aeroporto de Guarulhos! ❤️",
                images: [
                    { src: "Imagens/AeroportoGarulhos.jpg", caption: "Aeroporto de Guarulhos" }
                ],
                icon: "👩‍❤️‍💋‍👨"
            },
            {
                time: "23:15",
                description: "Ônibus de Guarulhos (SP) para São José dos Campos (SP)",
                details: "Chegada prevista: 00:45",
                icon: "🚌"
            },
            {
                time: "00:45",
                description: "Chegada em casa! Banho, comida e descanso 🏠",
                images: [{ src: "Imagens/H8.jpg", caption: "Lar doce lar ❤️" }],
                icon: "💤"
            }
        ]
    },
    "2025-12-22": {
        title: "Passeio em SJC 🏙️",
        events: [
            {
                time: "Dia",
                description: "Passeio pelo centro",
                images: [{ src: "Imagens/CentroSJC.jpg", caption: "Centro de SJC" }],
                icon: "🚶‍♀️"
            },
            {
                time: "Noite",
                description: "Jantar no restaurante <strong>Sukiya</strong> 🍜",
                images: [{ src: "Imagens/Sukiya.jpg", caption: "Sukiya" }],
                icon: "🍲"
            }
        ]
    },
    "2025-12-23": {
        title: "Conhecendo o ITA e Shopping 🚀",
        events: [
            {
                time: "Dia",
                description: "Tour para conhecer o ITA",
                images: [{ src: "Imagens/ITA.jpg", caption: "ITA" }],
                icon: "🎓"
            },
            {
                time: "Noite",
                description: "Passeio no CenterVale Shopping",
                images: [{ src: "Imagens/CenterValeShopping.jpg", caption: "CenterVale Shopping" }],
                icon: "🛍️"
            }
        ]
    },
    "2025-12-24": {
        title: "Véspera de Natal 🎄",
        events: [
            {
                time: "Dia",
                description: "Aproveitar piscina ☀️",
                icon: "🏊‍♀️"
            },
            {
                time: "Noite",
                description: "Jantar especial de Natal! 🎅❤️",
                icon: "🍽️"
            }
        ]
    },
    "2025-12-25": {
        title: "Feliz Natal! 🎁",
        events: [
            {
                time: "Dia todo",
                description: "Celebração de Natal ❤️",
                icon: "🎄"
            }
        ]
    },
    "2025-12-26": {
        title: "Cinema: Avatar 🍿",
        events: [
            {
                time: "Dia",
                description: "Assistir o filme Avatar: Fogo E Cinzas",
                images: [{ src: "Imagens/FilmeAvatarFogoECinzas.jpg", caption: "Poster Avatar: Fogo E Cinzas" }],
                icon: "🎬"
            }
        ]
    },
    "2025-12-27": {
        title: "Cinema: Sorry, Baby 🎬",
        events: [
            {
                time: "Dia",
                description: "Assistir o filme Sorry, Baby",
                images: [{ src: "Imagens/FilmeSorryBaby.jpg", caption: "Poster Sorry, Baby" }],
                icon: "🎟️"
            }
        ]
    },
    "2025-12-28": {
        title: "Aparecida 🙏",
        events: [
            {
                time: "Manhã",
                description: "Viagem de São José dos Campos (SP) para Aparecida (SP)",
                icon: "🚗"
            },
            {
                time: "Dia",
                description: "Passeio pelo Santuário Nacional de Nossa Senhora da Conceição Aparecida",
                images: [{ src: "Imagens/Aparecida.jpg", caption: "Catedral Basílica de Nossa Senhora Aparecida" }],
                icon: "⛪"
            },
            {
                time: "Noite",
                description: "Viagem de Aparecida (SP) para São José dos Campos (SP)",
                icon: "🚗"
            }
        ]
    },
    "2025-12-29": {
        title: "Piquenique Romântico 🧺",
        events: [
            {
                time: "Dia",
                description: "Piquenique",
                images: [{ src: "Imagens/ParqueDaCidade.jpg", caption: "Parque Roberto Burle Marx - Parque da Cidade" }],
                icon: "🍇"
            }
        ]
    },
    "2025-12-30": {
        title: "Cinema: Valor Sentimental 🎥",
        events: [
            {
                time: "Dia",
                description: "Assistir o filme Valor Sentimental",
                images: [{ src: "Imagens/FilmeValorSentimental.jpg", caption: "Poster Valor Sentimental" }],
                icon: "🍿"
            }
        ]
    },
    "2025-12-31": {
        title: "Rumo a Campos do Jordão 🌲",
        events: [
            {
                time: "15:30",
                description: "Ônibus de São José dos Campos (SP) para Campos do Jordão (SP)",
                details: "Chegada prevista: 17:00",
                icon: "🚌"
            },
            {
                time: "Noite",
                description: "Chegada ao hotel e Ano Novo na Vila Capivari",
                images: [
                    { src: "Imagens/Vistadobairro.jpg", caption: "Vista de cima" },
                    { src: "Imagens/Arquiteturadobairro.jpg", caption: "Arquitetura" },
                    { src: "Imagens/CentrodeCapivari.jpg", caption: "Centro de Capivari" }
                ],
                icon: "✨"
            },
            {
                time: "00:00",
                description: "Feliz Ano Novo! 🎆🥂",
                icon: "🎆"
            }
        ]
    },
    "2026-01-01": {
        title: "Volta para SJC 🏡",
        events: [
            {
                time: "13:30",
                description: "Ônibus de Campos do Jordão (SP) para São José dos Campos (SP)",
                details: "Chegada prevista: 15:30",
                icon: "🚌"
            }
        ]
    },
    "2026-01-05": {
        title: "Viagem para Piracicaba 🚌",
        events: [
            {
                time: "09:00",
                description: "São José dos Campos (SP) ➡️ Piracicaba (SP)",
                details: "Chegada prevista: 12:45",
                icon: "🚌"
            }
        ]
    },
    "2026-01-06": {
        title: "Aniversário Pai de Arthur 🎉",
        events: [
            {
                time: "Dia",
                description: "Churrasco em comemoração ao aniversário! 🍖🍻",
                icon: "🎂"
            }
        ]
    },
    "2026-01-07": {
        title: "Volta para SJC 🏡",
        events: [
            {
                time: "13:20",
                description: "Ônibus de Piracicaba (SP) para São José dos Campos (SP)",
                details: "Chegada prevista: 17:30",
                icon: "🚌"
            }
        ]
    },
    "2026-01-10": {
        title: "Cinema: Família De Aluguel 🎞️",
        events: [
            {
                time: "Dia",
                description: "Assistir o filme Família De Aluguel",
                images: [{ src: "Imagens/FilmeFamiliaDeAluguel.jpg", caption: "Poster Família De Aluguel" }],
                icon: "🎬"
            }
        ]
    },
    "2026-01-12": {
        title: "Praia em Ubatuba 🌊",
        events: [
            {
                time: "11:30",
                description: "Ônibus de São José dos Campos (SP) para Ubatuba (SP)",
                details: "Chegada prevista: 14:40",
                images: [{ src: "Imagens/Ubatuba.png", caption: "Ubatuba" }],
                icon: "🚌"
            },
            {
                time: "Tarde",
                description: "Aproveitar a Praia Tenório",
                images: [{ src: "Imagens/PraiaTenorio.png", caption: "Praia Tenório" }],
                icon: "🏖️"
            },
            {
                time: "Noite",
                description: "Passeio no Centro de Ubatuba",
                images: [{ src: "Imagens/CentroUbatuba.jpg", caption: "Centro de Ubatuba" }],
                icon: "🌃"
            }
        ]
    },
    "2026-01-13": {
        title: "Ubatuba - Dia 2 ☀️",
        events: [
            {
                time: "Dia todo",
                description: "Mais praia!",
                images: [{ src: "Imagens/PraiaTenorio.png", caption: "Praia Tenório" }],
                icon: "🏖️"
            },
            {
                time: "Noite",
                description: "Passeio no Centro de Ubatuba",
                images: [{ src: "Imagens/CentroUbatuba.jpg", caption: "Centro de Ubatuba" }],
                icon: "🌃"
            }
        ]
    },
    "2026-01-14": {
        title: "Ubatuba - Dia 3 🌊",
        events: [
            {
                time: "Dia todo",
                description: "Mais praia!",
                images: [{ src: "Imagens/PraiaTenorio.png", caption: "Praia Tenório" }],
                icon: "🥥"
            },
            {
                time: "Noite",
                description: "Passeio no Centro de Ubatuba",
                images: [{ src: "Imagens/CentroUbatuba.jpg", caption: "Centro de Ubatuba" }],
                icon: "🌃"
            }
        ]
    },
    "2026-01-15": {
        title: "Ubatuba - Dia 4 🌴",
        events: [
            {
                time: "Dia todo",
                description: "Último dia inteiro na Praia",
                images: [{ src: "Imagens/PraiaTenorio.png", caption: "Praia Tenório" }],
                icon: "🌊"
            },
            {
                time: "Noite",
                description: "Despedida do Centro de Ubatuba",
                images: [{ src: "Imagens/CentroUbatuba.jpg", caption: "Centro de Ubatuba" }],
                icon: "🌃"
            }
        ]
    },
    "2026-01-16": {
        title: "Volta para SJC 🏠",
        events: [
            {
                time: "15:50",
                description: "Ônibus de Ubatuba (SP) para São José dos Campos (SP)",
                details: "Chegada prevista: 19:30",
                icon: "🚌"
            }
        ]
    },
    "2026-01-18": {
        title: "Dia Especial! 🎉❤️",
        events: [
            {
                time: "Dia todo",
                description: "Feliz Aniversário, meu amor! 🎂🎁🎈",
                images: [{ src: "Imagens/Sammy.jpeg", caption: "Parabéns Sammy! ❤️" }],
                icon: "👸"
            }
        ]
    },
    "2026-01-19": {
        title: "Volta 💔",
        events: [
            {
                time: "11:30",
                description: "Ônibus de São José dos Campos (SP) para Guarulhos (SP)",
                details: "Chegada prevista: 13:00",
                icon: "🚌"
            },
            {
                time: "16:25",
                description: "Avião de Guarulhos (SP) para Cuiabá (MT)",
                details: "Chegada prevista: 17:35",
                icon: "✈️"
            },
            {
                time: "21:55",
                description: "Ônibus de Cuiabá (MT) para Pimenta Bueno (RO)",
                details: "Chegada prevista: 13:05 (dia seguinte)",
                icon: "🚌"
            }
        ]
    },
    "2026-01-20": {
        title: "Chegada em Casa 🏠",
        events: [
            {
                time: "13:05",
                description: "Chegada em Pimenta Bueno (RO)",
                icon: "📍"
            }
        ]
    }
};
