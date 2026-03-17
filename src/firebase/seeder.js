import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './config';

const mockProducts = [

  // ── ELIXIRES ──────────────────────────────────────────────────────────────
  {
    title: 'Cold Brew de la Reina Roja',
    category: 'elixires',
    price: 85,
    stock: 40,
    description: 'Cold brew intenso con sirope de cereza roja, crema batida y sprinkles carmesí. Tan dramático como la Reina de Corazones.',
    image: '/img/Gemini_Generated_Image_npl130npl130npl1.png',
  },
  {
    title: 'Brew Vikingo de Thor',
    category: 'elixires',
    price: 90,
    stock: 35,
    description: 'Cold brew oscuro con espuma salada y cristales de sal marina. Con colgante de Mjolnir incluido. ¡Digno de Asgard!',
    image: '/img/Gemini_Generated_Image_snjm7csnjm7csnjm.png',
  },
  {
    title: 'Latte Galaxia Tomorrowland',
    category: 'elixires',
    price: 95,
    stock: 30,
    description: 'Iced latte con espirales de mariposa azul y violeta, crema batida y decoración de planeta. Un viaje al espacio en cada sorbo.',
    image: '/img/Gemini_Generated_Image_jkykqzjkykqzjkyk.png',
  },
  {
    title: 'Matcha de Mike Wazowski',
    category: 'elixires',
    price: 80,
    stock: 45,
    description: 'Iced matcha latte cremoso con leche de avena, coronado con crema batida y un ojo de gelatina verde.',
    image: '/img/Gemini_Generated_Image_ejgkwcejgkwcejgk.png',
  },

  {
    title: 'Manzana Envenenada',
    category: 'elixires',
    price: 80,
    stock: 35,
    description: 'Latte caliente de manzana especiada con canela, crema batida y chip de manzana deshidratada con calavera. Inspirado en la Reina Malvada.',
    image: '/img/Gemini_Generated_Image_1wwy5i1wwy5i1wwy.png',
  },
  {
    title: 'Corazón de Acero (Wall-E)',
    category: 'elixires',
    price: 85,
    stock: 30,
    description: 'Cappuccino con chocolate blanco rallado, polvo rojo en forma de corazón y anillo de fondant. Para los que aman con todo su circuito.',
    image: '/img/Gemini_Generated_Image_ojejziojejziojej.png',
  },
  {
    title: 'Beso de Hielo',
    category: 'elixires',
    price: 88,
    stock: 40,
    description: 'Cold brew con espuma helada azul y cristales de hielo. Inspirado en los poderes de Elsa. Tan frío y mágico como Arendelle en invierno.',
    image: '/img/beso-frio.png',
  },
  {
    title: 'Sombrerero Loco',
    category: 'elixires',
    price: 92,
    stock: 25,
    description: 'Té matcha caliente servido en taza de colores con torre de malvaviscos multicolor bañados en glaseado. ¡El desayuno más desquiciado del País de las Maravillas!',
    image: '/img/sombrerero-loco.png',
  },
  {
    title: 'Curiosidad Submarina',
    category: 'elixires',
    price: 95,
    stock: 28,
    description: 'Frappe de vainilla con swirl de frutilla, borde de azúcar turquesa, crema batida con sprinkles y cola de sirena de chocolate. Parte de tu mundo.',
    image: '/img/curiosidad-submarina.png',
  },
  {
    title: 'Oro del Desierto',
    category: 'elixires',
    price: 90,
    stock: 32,
    description: 'Mocha caliente con pétalos de rosa deshidratados, crema batida y miel dorada. Inspirado en la Rosa Encantada de la Bella y la Bestia.',
    image: '/img/oro-desierto.png',
  },
  {
    title: 'El Aprendiz de Brujo',
    category: 'elixires',
    price: 78,
    stock: 45,
    description: 'Cappuccino cremoso con orejas de Mickey en galleta de cacao y polvo dorado mágico. El favorito del aprendiz más famoso de Fantasía.',
    image: '/img/aprendiz-mago.png',
  },

  // ── PASTELERÍA ENCANTADA ──────────────────────────────────────────────────
    {
    title: 'Galletas "Eat Me"',
    category: 'pasteleria',
    price: 65,
    stock: 20,
    description: 'Galletas de mantequilla con glaseado pastel degradado, letras doradas "Eat Me", rosas blancas y llaves doradas de fondant. Del País de las Maravillas.',
    image: '/img/galleta-comeme.png',
  },

  {
    title: 'Cupcake de Maléfica',
    category: 'pasteleria',
    price: 75,
    stock: 20,
    description: 'Cupcake de chocolate negro con frosting violeta, cuernos de cacao y moras frescas. Oscuro, intenso y deliciosamente malvado.',
    image: '/img/Gemini_Generated_Image_9oebji9oebji9oeb.png',
  },
  {
    title: 'Éclairs de Cruella',
    category: 'pasteleria',
    price: 70,
    stock: 18,
    description: 'Éclairs bicolor inspirados en Cruella De Vil: mitad chocolate oscuro, mitad blanco con manchas dálmata y labios rojos de fondant.',
    image: '/img/Gemini_Generated_Image_ukxidkukxidkukxi.png',
  },
  {
    title: 'Galletas Huella de Simba',
    category: 'pasteleria',
    price: 55,
    stock: 30,
    description: 'Galletas mantequilla en forma de huella de león con chocolate y rostro de Simba en glaseado rojo. Pack de 3.',
    image: '/img/Gemini_Generated_Image_jqi2f1jqi2f1jqi2.png',
  },
  {
    title: 'Esfera Mágica de Aladdin',
    category: 'pasteleria',
    price: 145,
    stock: 12,
    description: 'Esfera de chocolate oscuro con polvo dorado, rellena de mousse y gemas de gelatina multicolor. ¡Rompela y encontrá el tesoro!',
    image: '/img/Gemini_Generated_Image_3okdg33okdg33okd.png',
  },
  {
    title: 'Cheesecake del Genio',
    category: 'pasteleria',
    price: 110,
    stock: 15,
    description: 'Cheesecake azul turquesa con base de galleta dorada, crema batida en espiral y estrellas plateadas. Inspirado en el Genio de la Lámpara.',
    image: '/img/Gemini_Generated_Image_o9osmzo9osmzo9os.png',
  },

  // ── MERCANCÍA MÁGICA ──────────────────────────────────────────────────────
  {
    title: 'Pasaporte Gastronómico',
    category: 'mercancia',
    price: 280,
    stock: 15,
    description: 'Libreta de cuero premium estilo pasaporte Disney con sellos coleccionables, taza Limited Edition y pin de Barista Real.',
    image: '/img/Gemini_Generated_Image_4glpb64glpb64glp.png',
  },
  {
    title: 'Bolsa Pixie Dust',
    category: 'mercancia',
    price: 150,
    stock: 22,
    description: 'Tote bag de algodón natural "Powered by Coffee and Pixie Dust" con hadas ilustradas.',
    image: '/img/Gemini_Generated_Image_jivy2yjivy2yjivy.png',
  },
  {
    title: 'Bolsa Espresso Patronum',
    category: 'mercancia',
    price: 150,
    stock: 22,
    description: 'Tote bag negra con "Espresso Patronum" en letras mágicas doradas y varita. Para los amantes de la cafeína y la magia.',
    image: '/img/Gemini_Generated_Image_jivy2yjivy2yjivy.png',
  },
  {
    title: 'Delantal Mary Poppins',
    category: 'mercancia',
    price: 320,
    stock: 10,
    description: 'Delantal azul marino estilo Cherry Tree Lane Café con moño rojo, botones negros y bordado. Prácticamente perfecto en todos los sentidos.',
    image: '/img/Gemini_Generated_Image_3gtlba3gtlba3gtl.png',
  },
  {
    title: 'Café Madrugada en la Sabana',
    category: 'mercancia',
    price: 180,
    stock: 20,
    description: '250 g de mezcla exclusiva tueste oscuro con notas de cacao y madera ahumada. Inspirada en el amanecer del Rey León. Edición limitada.',
    image: '/img/Gemini_Generated_Image_slpawhslpawhslpa.png',
  },
  {
    title: 'Cucharas Varita de Hadas',
    category: 'mercancia',
    price: 245,
    stock: 14,
    description: 'Set de 4 cucharas medidoras doradas con mango de varita y estrella de cristal. Incluye bolsa de terciopelo.',
    image: '/img/Gemini_Generated_Image_4n4ltn4n4ltn4n4l.png',
  },
  {
    title: 'Set Plantillas Disney para Café',
    category: 'mercancia',
    price: 195,
    stock: 18,
    description: 'Caja de madera con 8 plantillas de acero: Mickey, Minnie, castillo, zapato de Cenicienta y más. Incluye espolvoreador de canela.',
    image: '/img/Gemini_Generated_Image_33il5z33il5z33il.png',
  },
  {
    title: 'French Press Castillo Encantado',
    category: 'mercancia',
    price: 420,
    stock: 8,
    description: 'Cafetera French Press con soporte de peltre tallado en forma de castillo medieval. Capacidad 600 ml.',
    image: '/img/Gemini_Generated_Image_w0sqzhw0sqzhw0sq.png',
  },
  {
    title: 'Vasos Sirenita del Mar',
    category: 'mercancia',
    price: 220,
    stock: 16,
    description: 'Set de 3 vasos doble pared con fondo decorado con arenas, conchas y brillo iridiscente. Inspirados en el océano de Ariel.',
    image: '/img/Gemini_Generated_Image_o57e42o57e42o57e.png',
  },
  {
    title: 'Termo Aurora Edición Especial',
    category: 'mercancia',
    price: 295,
    stock: 12,
    description: 'Set de 2 termos Aurora: gris plata con textura esmerilada y floral acuarela. Acero inoxidable doble pared, mantiene temperatura 12 h.',
    image: '/img/Gemini_Generated_Image_3nutg23nutg23nut.png',
  },

  {
    title: 'Taza del Tesoro del Capitán',
    category: 'mercancia',
    price: 350,
    stock: 10,
    description: 'Taza de cerámica tallada en forma de cofre del tesoro pirata con calavera, monedas y joyas en relieve. Inspirada en el Capitán Jack Sparrow.',
    image: '/img/taza-sparrow.png',
  },
];

export const seedDatabase = async () => {
  try {
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);

    if (!snapshot.empty) {
      console.log(`⚠️ Ya existen ${snapshot.size} productos en Firestore. Seeder omitido.`);
      return;
    }

    console.log("🌱 Poblando Firestore con productos de Mickey's Magic Brew...");
    for (const product of mockProducts) {
      await addDoc(productsRef, product);
    }
    console.log(`✅ Se insertaron ${mockProducts.length} productos exitosamente.`);
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
  }
};