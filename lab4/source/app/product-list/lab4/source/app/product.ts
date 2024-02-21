export interface Product {
    id: number;
    name: string;
    image: string,
    images:string[],
    price: number;
    description: string;
    rating: number,
    link: string
  }
  
  export const products = [
    {
      id: 1, 
      name: 'DRAWSHE Cushion 3 in 1 ', 
      image:'https://resources.cdn-kaspi.kz/img/m/p/h09/hd1/84630322315294.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h37/h5e/84630322380830.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h52/h3f/84630322446366.jpg?format=gallery-medium'],
      price: 1758, 
      description: 'тип: кушон, тип кожи: для всех типов, оттенок:натуральный бежевый, эффект: увлажнение,питание, ,защита от солнечных лучей, 
      link:'https://kaspi.kz/shop/p/drawshe-cushion-3-in-1-kushon-01-30-ml-115039677/?c=750000000' 
    },
    { 
      id: 2, 
      name: 'Тушь для ресниц Vivienne Sabo ', 
      image:'https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/85206846013470.png?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hc9/85206846013470.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h74/hdc/85206846079006.png?format=gallery-medium'],
      price: 1088, 
      description: 'вид: для объема, форма щеточки: овальная, водостойкая: Нет, страна производства: Франция', 
      rating:5, 
      link:'https://kaspi.kz/shop/p/vivienne-sabo-cabaret-dlja-ob-ema-chernyi-17400135/?c=750000000' 
    }, 
    { 
      id: 3, 
      name: 'Vivienne Sabo Jolies Levres карандаш розовый', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/hbe/85209566707742.png?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h86/h18/85209566773278.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5e/h2c/85209566838814.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc8/hff/85209566904350.png?format=gallery-medium'],
      price: 1174, 
      description: 'тип: карандаш, эффект: матовый, уФ-защита: Нет, цвет: розовый, страна производства: Франция', 
      rating:5, 
      link:'https://kaspi.kz/shop/p/vivienne-sabo-jolies-levres-karandash-rozovyi-103-100704541/?c=750000000' 
    }, 
    { 
      id: 4, 
      name: 'Пудра PUPA Luminys Baked Face Powder', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h05/hbd/63813591072798.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h39/h26/63813594087454.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h23/h58/63813596839966.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h75/h35/63813600378910.jpg?format=gallery-medium'],
      price: 7578, 
      description: 'текстура: рассыпчатая, тип кожи: для всех типов, оттенок: светло-бежевый, эффект: увлажнение, ,сияние, уФ-защита: отсутствует, страна производства: Италия', 
      rating: 4.5, 
      link:'https://kaspi.kz/shop/p/pupa-luminys-baked-face-powder-rassypchataja-01-svetlo-bezhevyi-38100015/?c=750000000' 
    },
    { 
      id: 5, 
      name: 'Gabrini Derma Make-Up Cover Foundation тональный крем ', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3d/h22/63997003366430.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h99/h71/63997006544926.jpg?format=gallery-medium'],
      price: 8249, 
      description: 'тип: тональный крем, тип кожи: для всех типов, ,жирная, комбинированная, оттенок: светло-бежевый, эффект: матирующий, уФ-защита: 15, страна производства: Турция',
      rating: 5, 
      link:'https://kaspi.kz/shop/p/gabrini-derma-make-up-cover-foundation-tonal-nyi-krem-102-spf15-40-ml-101273183/?c=750000000' 
    }, 
    { 
      id: 6, 
      name: 'GOLDEN ROSE Make-up Fixing Spray фиксатор макияжа', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/hc2/64454061260830.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/ha2/hc2/64454061260830.jpg?format=gallery-medium'],
      price: 19900, 
      description: 'область нанесения: для лица, тип: фиксатор макияжа, текстура: жидкая, тип кожи: для всех типов, объем: 120.0 мл, страна производства: Турция', 
      rating: 4.5, 
      link:'https://kaspi.kz/shop/p/golden-rose-make-up-fixing-spray-fiksator-makijazha-dlja-litsa-120-ml-104421562/?c=750000000' 
    }, 
    { 
      id: 7, 
      name: 'Romand Glasting Melting Balm 07 Mauve Whip блеск для губ розовый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hcf/70294342369310.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h1a/70294342893598.jpg?format=gallery-medium'],
      price: 18779, 
      description: 'тип: блеск для губ, эффект: глянцевый, мерцающий, сияющий, уФ-защита: Нет, цвет: розовый, страна производства: Южная Корея', 
      rating: 5, 
      link:'https://kaspi.kz/shop/p/romand-glasting-melting-balm-07-mauve-whip-blesk-dlja-gub-rozovyi-109457246/?c=750000000' 
    }, 
    { 
      id: 8, 
      name: 'Black Rice Cover BB Cream SPF36 PA++ BB крем 21 50 мл', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/hd2/64119808884766.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h88/hc2/64119810850846.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h73/hfc/64119814488094.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/ha5/h08/64119817961502.jpg?format=gallery-medium'],
      price: 19409, 
      description: 'тип: BB крем, тип кожи: для всех типов, эффект: матирующий, выравнивание,уФ-защита: 36, страна производства: Южная Корея', 
      rating: 5, 
      link:'https://kaspi.kz/shop/p/black-rice-cover-bb-cream-spf36-pa-bb-krem-21-50-ml-101288569/?c=750000000' 
    }, 
    { 
      id: 9, 
      name: 'Estee Lauder Double Wear тональный крем', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/h34/64355501506590.jpg?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h00/ha6/64355504521246.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/hf7/hea/64355507798046.jpg?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h14/hcd/64355509895198.jpg?format=gallery-medium'],
      price: 13979, 
      description: 'тип: тональный крем, тип кожи: для всех типов, оттенок: бежевый, эффект: увлажнение, ,тонирование, ,матирующий, ,выравнивание, уФ-защита: 10, страна производства: США', 
      rating: 5, 
      link:'https://kaspi.kz/shop/p/estee-lauder-double-wear-tonal-nyi-krem-2n1-desert-beige-30-ml-103023160/?c=750000000' 
    }, 
    { 
      id: 10, 
      name: 'Тушь для ресниц Maybelline New York Lash Sensational', 
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/ha8/85209571459102.png?format=gallery-medium', 
      images: ['https://resources.cdn-kaspi.kz/img/m/p/h89/hdb/85209571524638.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h9d/h02/85209571590174.png?format=gallery-medium','https://resources.cdn-kaspi.kz/img/m/p/h81/h47/85209571655710.png?format=gallery-medium'],
      price: 38999, 
      description: 'вид: для объема, форма щеточки: изогнутая, водостойкая: Нет, страна производства: Франция', 
      rating: 5, 
      link:'https://kaspi.kz/shop/p/maybelline-new-york-lash-sensational-dlja-ob-ema-chernyi-17400288/?c=750000000' 
    }
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */