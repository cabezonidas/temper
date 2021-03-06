import {
  amorfo,
  apasionado,
  apatico,
  colerico,
  hermetico,
  nervioso,
  sanguineo,
  sentimental,
} from "./Tempers";

export const statements = [
  {
    id: 1,
    text: "Me gusta la naturaleza, me gusta quedarme mirando los paisajes.",
  },
  {
    id: 2,
    text: "Tengo sentimientos vivos, cambiantes; soy de humor variable.",
  },
  { id: 3, text: "Soy calmado, de humor siempre igual." },
  {
    id: 4,
    text: "Me gusta adornar un poco las cosas; no me gusta ser tan estricto en lo que hay que ver y decir las cosas tal como son.",
  },
  { id: 5, text: "Soy impulsivo." },
  {
    id: 6,
    text: "Me gusta hacer con vigor lo que quiero; me pongo a hacer las cosas bien decidido, aunque precipitado a veces.",
  },
  { id: 7, text: "Los demás me consideran perezoso" },
  {
    id: 8,
    text: "Me gustan las teorías y me gusta darle vuelta a las cosas, pensando todo lo que puedo.",
  },
  {
    id: 9,
    text: "Tengo más confianza en las experiencias que en las teorías.",
  },
  { id: 10, text: "Tengo inclinación a la melancolía y a estar triste." },
  { id: 11, text: "Soy optimista y generalmente ando de buen humor." },
  {
    id: 12,
    text: "Soy tímido, cualquier cosa me hiere, me desaliento fácilmente.",
  },
  { id: 13, text: "Soy tenaz y perseverante." },
  {
    id: 14,
    text: "Soy cordial, exuberante. Soy demostrativo porque no puedo disimular lo que siento.",
  },
  {
    id: 15,
    text: "Tengo sentido práctico bien desarrollado, me las se arreglar bien en las dificultades",
  },
  {
    id: 16,
    text: "No tengo sentido práctico, fácilmente me doy cuenta que no sé que hacer en muchos casos.",
  },
  { id: 17, text: "Soy más bien gastador." },
  {
    id: 18,
    text: "Soy muy buen observador y me gusta fijarme bien en las cosas y las personas.",
  },
  { id: 19, text: "Los demás me consideran autoritario y mandón." },
  { id: 20, text: "Los demás me consideran de buen carácter." },
  { id: 21, text: "Los demás me consideran porfiado." },
  {
    id: 22,
    text: "Me gusta pasarlo bien con los demás, me cargan las cosas muy serias.",
  },
  {
    id: 23,
    text: "Me gusta estar solo para pensar en mis cosas, los demás lo complican a uno.",
  },
  { id: 24, text: "Soy muy poco puntual, y descuidado en mis cosas." },
  { id: 25, text: "Me gusta comer, beber y dormir." },
  {
    id: 26,
    text: "Cuando me hacen una, me cuesta olvidarlo y me cuesta volver a hablar con quien no estoy bien.",
  },
  { id: 27, text: "Me gusta divertirme y jugar." },
  {
    id: 28,
    text: "No me gusta que los demás sepan mis cosas, soy más bien cerrado.",
  },
  {
    id: 29,
    text: "Me gusta hacer lo que hace todo el mundo y no andar con cosas raras.",
  },
  { id: 30, text: "Me gusta reírme un poco de los demás y sacarles pica." },
  {
    id: 31,
    text: "Los demás reconocen que tengo buen humor y les gusta que los haga reír.",
  },
  {
    id: 32,
    text: "No me interesa andarme fijando en lo que siento o en lo que me pasa por dentro.",
  },
  { id: 33, text: "Los demás me reconocen lealtad y franqueza." },
  {
    id: 34,
    text: "Tengo bastante capacidad de trabajo, difícilmente me canso.",
  },
  {
    id: 35,
    text: "Me gusta actuar de acuerdo con principios. No se me olvidan mis deberes.",
  },
  { id: 36, text: "Me encanta la poesía y el arte en general." },
  { id: 37, text: "Los demás me consideran poco servicial y poco compasivo." },
  {
    id: 38,
    text: "Soy exigente conmigo mismo. No me dejo estar y me esfuerzo por lo que debo hacer y ser.",
  },
  { id: 39, text: "Me gusta hablar en público, decir discursos." },
  {
    id: 40,
    text: "Todas mis cosas las hago en vista de algo que me propongo. Dejo de lado lo que no me ayuda a lograr lo que quiero.",
  },
  {
    id: 41,
    text: "Me gusta estar en todo. Me gusta hacer cosas diferentes. Me gusta cambiar porque, una sola cosa me aburre.",
  },
  { id: 42, text: "Los demás dicen que soy bien educado." },
  { id: 43, text: "Soy violento." },
  {
    id: 44,
    text: "Me gusta quedarme pensando en lo que ha pasado y me gusta acordarme de muchas cosas.",
  },
  {
    id: 45,
    text: "No me importa lo que ha pasado ni me preocupo mucho de lo que va a pasar.",
  },
  {
    id: 46,
    text: "A los demás les gusta estar conmigo y me doy cuenta que me buscan.",
  },
  {
    id: 47,
    text: "Me gustan las novedades, me gusta saber lo que pasa y estar al día en todo, las cosas viejas y lo que tienen todos no me atraen.",
  },
  {
    id: 48,
    text: "Tengo mis maneras de obrar y no me gusta salirme de ellas.",
  },
  {
    id: 49,
    text: "Soy medio temerario, tanto que me dicen a veces que peco por exceso en algunas cosas",
  },
  {
    id: 50,
    text: "Me gustan las cosas curiosas, lo que llama la atención a los demás.",
  },
  { id: 51, text: "No me gustan las complicaciones prefiero una vida simple." },
  { id: 52, text: "Me gusta llamar la atención, me gusta que se fijen en mí." },
  { id: 53, text: "Los demás piensan que soy valiente y decidido." },
  { id: 54, text: "Me gusta la vida familiar, patriótica y religiosa." },
];

export const valuations = [
  {
    id: "EAS",
    statements: [6, 13, 15, 19, 34, 38, 40, 49, 51, 54],
    achronym: "Emotivo, Activo, Secundario",
    name: "Apasionado",
    temper: apasionado,
  },
  {
    id: "EAP",
    statements: [5, 11, 14, 15, 32, 34, 39, 41, 43, 47],
    achronym: "Emotivo, Activo, Primario",
    name: "Colérico",
    temper: colerico,
  },
  {
    id: "EnAS",
    statements: [1, 10, 12, 16, 23, 26, 28, 44, 48, 51],
    achronym: "Emotivo, No Activo, Secundario",
    name: "Sentimental",
    temper: sentimental,
  },
  {
    id: "EnAP",
    statements: [2, 4, 16, 27, 36, 43, 46, 47, 50, 52],
    achronym: "Emotivo, No Activo, Primario",
    name: "Nervioso",
    temper: nervioso,
  },
  {
    id: "nEAS",
    statements: [3, 8, 13, 18, 31, 33, 35, 48, 51, 53],
    achronym: "No Emotivo, Activo, Secundario",
    name: "Hermético",
    temper: hermetico,
  },
  {
    id: "nEAP",
    statements: [4, 9, 15, 18, 22, 30, 32, 39, 42, 53],
    achronym: "No Emotivo, Activo, Primario",
    name: "Sanguíneo",
    temper: sanguineo,
  },
  {
    id: "nEnAS",
    statements: [7, 10, 21, 23, 26, 28, 33, 35, 37, 48],
    achronym: "No Emotivo, No Activo, Secundario",
    name: "Apático",
    temper: apatico,
  },
  {
    id: "nEnAP",
    statements: [3, 7, 16, 17, 20, 24, 25, 29, 45, 53],
    achronym: "No Emotivo, No Activo, Primario",
    name: "Amorfo",
    temper: amorfo,
  },
];
