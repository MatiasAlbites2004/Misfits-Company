const productsData = [
  {
    id: 1,
    name: "POLO NEED A CHANGE NEGRO",
    price: "S/ 79.90",
    image: "/polo_negro.jpg",
    tag: "NUEVO",
    description:
      "Polo oversize de algodón premium con estampado frontal 'Need a Change'. Inspirado en la cultura urbana y la autenticidad.",
    colors: ["#000000", "#f5f5f5"],
    sizes: ["S", "M", "L"],
    details:
      "100% algodón nacional. Tejido grueso, cuello reforzado. Lavar con agua fría y colores similares.",
    sizeGuide:
      "S: 48cm ancho / 68cm largo • M: 52cm / 72cm • L: 56cm / 74cm",
  },
  {
    id: 2,
    name: "POLO NEED A CHANGE BLANCO",
    price: "S/ 79.90",
    image: "/polo_blanco.jpg",
    tag: "NUEVO",
    description:
      "Versión blanca del clásico Need a Change. Diseño minimalista, ideal para todo tipo de outfits.",
    colors: ["#f5f5f5", "#000000"],
    sizes: ["S", "M", "L"],
    details:
      "Algodón 100% peinado. Corte regular. Estampado con tinta ecológica.",
    sizeGuide:
      "S: 47cm / 67cm • M: 51cm / 71cm • L: 55cm / 73cm",
  },
  {
    id: 3,
    name: "POLO BREAK RULES",
    price: "S/ 79.90",
    image: "/polo_break_rules.jpg",
    description:
      "Diseño rebelde con mensaje disruptivo. Perfecto para quienes no siguen las reglas.",
    colors: ["#000000"],
    sizes: ["M", "L"],
    details:
      "Edición limitada. Serigrafía manual. Tejido respirable y resistente.",
    sizeGuide:
      "M: 52cm / 72cm • L: 56cm / 74cm",
  },
  {
    id: 4,
    name: "POLO LIMITED EDITION",
    price: "S/ 89.90",
    image: "/3.jpg",
    description:
      "Edición especial con arte exclusivo Misfits Company. Corte moderno y ajuste perfecto.",
    colors: ["#1a1a1a", "#bdbdbd"],
    sizes: ["S", "M", "L"],
    details:
      "Colección 2025. Estampado en relieve y costuras reforzadas. Fabricado en Perú.",
    sizeGuide:
      "S: 48cm / 68cm • M: 52cm / 72cm • L: 56cm / 74cm",
  },
  {
    id: 5,
    name: "POLO CLASSIC BLACK",
    price: "S/ 69.90",
    image: "/7.jpg",
    description:
      "Diseño clásico, versátil y atemporal. Ideal para outfits casuales o urbanos.",
    colors: ["#000000"],
    sizes: ["S", "M", "L", "XL"],
    details:
      "Tela 100% algodón peinado. Etiqueta interior estampada para mayor comodidad.",
    sizeGuide:
      "S: 47cm / 67cm • M: 51cm / 71cm • L: 55cm / 73cm • XL: 59cm / 76cm",
  },
  {
    id: 6,
    name: "POLO CLASSIC WHITE",
    price: "S/ 69.90",
    image: "/8.jpg",
    description:
      "El básico perfecto. Blanco puro con textura suave y corte relajado.",
    colors: ["#ffffff"],
    sizes: ["S", "M", "L", "XL"],
    details:
      "100% algodón peinado. Cuello reforzado con doble costura. No destiñe.",
    sizeGuide:
      "S: 47cm / 67cm • M: 51cm / 71cm • L: 55cm / 73cm • XL: 59cm / 76cm",
  },
  {
    id: 7,
    name: "POLO RED EYE",
    price: "S/ 89.90",
    image: "/9.jpg",
    description:
      "Diseño impactante con arte gráfico 'Red Eye'. Representa el enfoque y la visión en la oscuridad.",
    colors: ["#000000", "#e53935"],
    sizes: ["S", "M", "L"],
    details:
      "Estampado frontal con tinta textil de alto contraste. Corte oversized.",
    sizeGuide:
      "S: 50cm / 68cm • M: 54cm / 72cm • L: 58cm / 75cm",
  },
  {
    id: 8,
    name: "POLO STREET STYLE",
    price: "S/ 79.90",
    image: "/10.jpg",
    description:
      "Inspirado en el streetwear de los 2000. Look relajado y juvenil.",
    colors: ["#1f1f1f", "#808080"],
    sizes: ["S", "M", "L", "XL"],
    details:
      "Algodón grueso de 180g. Ideal para combinar con joggers o jeans sueltos.",
    sizeGuide:
      "S: 48cm / 68cm • M: 52cm / 72cm • L: 56cm / 74cm • XL: 60cm / 78cm",
  },
  {
    id: 9,
    name: "POLO URBAN GRAY",
    price: "S/ 84.90",
    image: "/11.jpg",
    description:
      "Tono gris grafito, con textura premium y un fit moderno.",
    colors: ["#4b4b4b", "#000000"],
    sizes: ["S", "M", "L"],
    details:
      "Corte recto. Cuello de canalé. Fabricado con hilo peruano de alta calidad.",
    sizeGuide:
      "S: 48cm / 68cm • M: 52cm / 72cm • L: 56cm / 74cm",
  },
  {
    id: 10,
    name: "POLO DARK VISION",
    price: "S/ 94.90",
    image: "/15.jpg",
    description:
      "Colección Dark Line. Polo con estampado reflectante y diseño geométrico.",
    colors: ["#111111", "#333333"],
    sizes: ["M", "L", "XL"],
    details:
      "Estampado reflectivo en pecho y espalda. Costuras invisibles. Fabricación local.",
    sizeGuide:
      "M: 52cm / 72cm • L: 56cm / 74cm • XL: 60cm / 77cm",
  },
  {
    id: 11,
    name: "POLO WHITE VISION",
    price: "S/ 94.90",
    image: "/16.jpg",
    description:
      "La versión clara del Dark Vision. Estilo limpio con contraste minimalista.",
    colors: ["#ffffff", "#cfcfcf"],
    sizes: ["S", "M", "L"],
    details:
      "Tela liviana pero firme. Estampado duradero a base de agua. Corte recto.",
    sizeGuide:
      "S: 48cm / 68cm • M: 52cm / 72cm • L: 56cm / 74cm",
  },
  {
    id: 12,
    name: "POLO MIST BLACK",
    price: "S/ 89.90",
    image: "/19.jpg",
    description:
      "Color negro brumoso con textura especial. Minimalista, moderno y elegante.",
    colors: ["#0d0d0d", "#292929"],
    sizes: ["S", "M", "L", "XL"],
    details:
      "Algodón mezclado con poliéster reciclado. Tejido de alto confort.",
    sizeGuide:
      "S: 47cm / 67cm • M: 51cm / 71cm • L: 55cm / 73cm • XL: 59cm / 76cm",
  },
];

export default productsData;
