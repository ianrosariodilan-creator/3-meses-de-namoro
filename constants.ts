
import type { QuizPhase, QuizQuestion, VideoData } from './types';

export const quizData: QuizPhase[] = [
  {
    title: 'Fase 1: O Início de Tudo',
    questions: [
      {
        type: 'standard',
        question: "Para os fracos, o namoro começou há 3 meses. Mas qual foi a data exata do nosso primeiro beijo (o marco zero)?",
        answer: "Exato! Eu disse 'Começou com o nosso beijo no uber' e tu, muito romântica, respondeste 'Só por fogo no kur' 🔥.",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.50 (2).jpeg',
      },
      {
        type: 'standard',
        question: "Onde estávamos no nosso primeiro encontro oficial?",
        answer: "Pátio Belém... Foi perfeito.",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.49.jpeg',
      },
      {
        type: 'standard',
        question: "Teste de Visão: Qual era a cor da roupa que você estava usando nesse primeiro encontro (e que eu nunca esqueci)?",
        answer: "Rosa. Você estava linda (como sempre).",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.48 (3).jpeg',
      },
    ],
  },
  {
    title: 'Fase 2: Manual de Instruções do Ian',
    questions: [
      {
        type: 'standard',
        question: 'Apresentando meus melhores amigos "Lambinho" e "Chupinho"... Quem são as lendas?',
        answer: "Sem comentários. 🦇",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.48 (2).jpeg',
      },
      {
        type: 'standard',
        question: 'Se eu pudesse comer apenas uma coisa para o resto da vida, o prato seria:',
        answer: "Yakisoba é vida. Acertou!",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.48 (1).jpeg',
      },
      {
        type: 'standard',
        question: 'Qual é a minha série/anime de conforto (aquela que eu defendo com unhas e dentes e já vi mil vezes)?',
        answer: "Re:Zero!!! O melhor de todos. Sem discussão.",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.48.jpeg',
      },
      {
        type: 'standard',
        question: 'O que me faz querer virar as costas e sair de uma loja imediatamente (me irrita muito)?',
        answer: "Odeio ter que perguntar 'quanto custa?'. Tem que ter o preço!",
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.50 (1).jpeg',
      },
      {
        type: 'multiple-choice',
        question: 'Sobre acordar... Eu sou do tipo que prefere:',
        answer: "Acordar cedo... Mas só para fazer as coisas para você antes de você acordar ❤️",
        options: [
            { text: 'Ficar na cama até tarde (dorminhoco)' },
            { text: 'Acordar cedo', isCorrect: true },
        ],
        image: 'media/WhatsApp Image 2026-01-02 at 21.29.50.jpeg',
      },
    ],
  },
  {
    title: 'Fase 3: Nossas Loucuras',
    questions: [
        {
            type: 'standard',
            question: 'Qual é a música (peculiar) que toca e me faz lembrar de você na hora?',
            answer: "O jeito é dar uma fugidinha com voce ♪♪",
            image: 'media/WhatsApp Image 2026-01-02 at 21.29.51 (1).jpeg'
        },
        {
            type: 'standard',
            question: 'Qual foi a coisa mais engraçada (e estúpida) que já nos aconteceu juntos?',
            answer: 'Rindo agora, mas na hora foi o caos. Sobrevivemos!',
            image: 'media/WhatsApp Image 2026-01-02 at 21.29.51.jpeg'
        }
    ]
  },
  {
    title: 'Fase 4: O Futuro & Sentimentos',
    questions: [
        {
            type: 'standard',
            question: 'Em agosto, definimos o futuro. Você cria a menina como quiser, mas qual foi o meu pedido pro nosso menino?',
            answer: 'Que ele passe no ITA. Nosso futuro engenheiro!',
        },
        {
            type: 'standard',
            question: 'Sinceramente, o que eu mais gosto no teu corpo?',
            answer: 'O seu rosto. Dentre todas as fotos, eu prefiro sempre aquela do seu rosto feliz.',
            image: 'media/WhatsApp Image 2026-01-02 at 21.29.52.jpeg' // Mandatory image
        }
    ]
  },
  {
    title: 'Fase Bônus: Hipóteses',
    questions: [
        {
            type: 'special-zombie',
            question: 'Se houvesse um apocalipse zumbi amanhã, qual seria meu destino?',
            answer: 'Provavelmente a A, mas eu tentaria te salvar!',
            options: [
                { text: 'Morreria nos primeiros 5 minutos (de stress)'},
                { text: 'Liderava o grupo de sobrevivência' },
                { text: 'Escondia-me debaixo da cama' }
            ]
        },
        {
            type: 'open-text',
            question: 'Se fôssemos uma dupla de desenhos animados, quem seríamos?',
            answer: 'Qualquer um que você escolher, desde que a gente esteja junto!',
            options: [
                { text: 'Shrek e Fiona'},
                { text: 'Cosmo e Wanda'},
                { text: 'Tom e Jerry'}
            ]
        }
    ]
  }
];

export const finalQuestionData: QuizQuestion = {
    type: 'standard',
    question: 'Se amanhã completamos 3 meses oficiais, quantos dias (aproximadamente) já aguentamos a rotina da Fibra, tutorias e fofocas juntos?',
    answer: 'O amor não conta dias, mas eu conto os minutos para te ver.',
};

export const finalVideoData: VideoData = {
    path: 'media/WhatsApp Video 2026-01-02 at 21.29.47.mp4',
    message: 'Vou estar sempre com você, nos melhores e piores momentos.',
    finalWords: 'Feliz 3 meses, meu amor! Te amo. ❤️'
};

export const messageVolumeData = [
  { name: 'Abril', volume: 15, fill: '#8884d8' },
  { name: 'Maio', volume: 40, fill: '#83a6ed' },
  { name: 'Junho', volume: 85, fill: '#8dd1e1' },
  { name: 'Julho', volume: 75, fill: '#82ca9d' },
  { name: 'Agosto', volume: 100, fill: '#a4de6c' },
  { name: 'Setembro', volume: 90, fill: '#d0ed57' },
  { name: 'Outubro', volume: 88, fill: '#ffc658' },
  { name: 'Novembro', volume: 82, fill: '#ff8042' },
  { name: 'Dezembro', volume: 65, fill: '#e94560' },
];

export const topWordsData = [
  { name: 'Akakak/Kkkkk', count: 120, fill: '#e94560' },
  { name: 'Eu', count: 110, fill: '#ff8042' },
  { name: 'Não', count: 95, fill: '#ffc658' },
  { name: 'Amo/Te', count: 115, fill: '#d0ed57' },
  { name: 'Égua', count: 70, fill: '#a4de6c' },
  { name: 'Ian', count: 85, fill: '#82ca9d' },
  { name: 'Sim', count: 75, fill: '#8dd1e1' },
  { name: 'Tu/Você', count: 90, fill: '#83a6ed' },
  { name: 'Prova/Estudar', count: 60, fill: '#8884d8' },
  { name: 'Mds/Misericórdia', count: 55, fill: '#a488d8' },
];
