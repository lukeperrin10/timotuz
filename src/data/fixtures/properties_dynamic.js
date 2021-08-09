import LimhamnSky from '../../assets/images/LimhamnSky.JPG';
import LimhamnFront from '../../assets/images/LimhamnFront.JPG';
import threeDImage from '../../assets/images/3d_draft.jpg';

const properties_dynamic = [
  {
    id: 1,
    address: 'Strandgatan 2, Limhamn',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem magni officiis mollitia amet suscipit, dicta odio ab quod expedita maiores eius ea aliquid aliquam fugiat dolore quisquam maxime enim rerum consequatur eaque consectetur dolor? Provident eius veniam consequatur quo, quos facere maxime perspiciatis perferendis at facilis temporibus quaerat illum velit. Aliquid harum quibusdam a laboriosam ut aperiam ipsum velit molestiae incidunt accusamus enim nisi voluptatibus consectetur quidem tempore sunt, et, asperiores nobis! Iusto, similique? Labore dolor sequi illo nam vel error voluptates perspiciatis fugit ullam aliquid ipsum veniam distinctio laudantium deleniti enim vitae dolore sed alias quae, tempora voluptatem!',
    images: [
      {
        url: LimhamnFront,
        alt: 'Image of the front of brick house',
      },
      {
        url: LimhamnSky,
        alt: "Image of the bird's-eye view of brick house",
      },
    ],
  },
  {
    id: 2,
    address: 'Bryggerigatan 3, Limhamn',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi rem magni officiis mollitia amet suscipit, dicta odio ab quod expedita maiores eius ea aliquid aliquam fugiat dolore quisquam maxime enim rerum consequatur eaque consectetur dolor? Provident eius veniam consequatur quo, quos facere maxime perspiciatis perferendis at facilis temporibus quaerat illum velit. Aliquid harum quibusdam a laboriosam ut aperiam ipsum velit molestiae incidunt accusamus enim nisi voluptatibus consectetur quidem tempore sunt, et, asperiores nobis! Iusto, similique? Labore dolor sequi illo nam vel error voluptates perspiciatis fugit ullam aliquid ipsum veniam distinctio laudantium deleniti enim vitae dolore sed alias quae, tempora voluptatem!',
    images: [
      {
        url: threeDImage,
        alt: "Image of the bird's-eye view of brick house",
      },
      {
        url: LimhamnFront,
        alt: 'Lorem ipsum dolor sit amet consectetur',
      },
      {
        url: LimhamnSky,
        alt: '8 vånings lägenhets hus',
      },
    ],
  },
];

export default properties_dynamic;
