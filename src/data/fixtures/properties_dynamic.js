import LimhamnSky from '../../assets/images/LimhamnSky.JPG'
import LimhamnFront from '../../assets/images/LimhamnFront.JPG'
import threeDImage from '../../assets/images/3d_draft.jpg'

const properties_dynamic = [
  {
    id: 1,
    district: 'YSTAD',
    name: 'Pågående nyproduktion: Fredrik 16',
    description:
      'Aurora, möjligheternas kvarter, beläget i hjärtat av pittoreska Ystad längs de brokiga kullerstensgatorna. Här har vi ambitionen och förutsättningarna att bygga och förvalta hyresbostäder som möter morgondagens behov. Vi är i full fas med att utveckla ett nytt bostadskoncept i Ystad för den medvetna stadsmänniskan.\n\nFastigheten som sträcker sig från Stora Östergatan, den så kallade gågatan, och Lilla Östergatan, är i dagens läge en fastighet som har en enorm potential till att bidra med något speciellt till Ystad som stad\n\nKvarterets centrala läge gör det enkelt att gå, cykla eller åka kollektivt istället för att äga en bil. Med fokus på att leva hållbart, tillgängligt och enkelt bidrar livsstilen samtidigt till en bättre miljö, en bättre hälsa och en bättre privatekonomi för de boende.',
    address: 'Stora Östergatan 31 / Lilla Östergatan 36',
    type: 'Bostäder',
    housing: 'ca 35st',
    BOA: '667 kvm',
    images: [
      {
        id: 1,
        photo: LimhamnFront,
        alt: 'Image of the front of brick house',
      },
      {
        id: 2,
        photo: LimhamnSky,
        alt: "Image of the bird's-eye view of brick house",
      },
    ],
  },
  {
    id: 2,
    district: 'YSTAD',
    name: 'Fredrik 16',
    description:
      'Fastigheten är belägen i den gamla citykärnan och de anrika medeltida delarna av Ystad och angränsar dels till den livliga gågatan Stora Östergatan samt Lilla Östergatan. Här kan boende ta del av stadens utbud av restauranger, caféer och butiker rakt utanför dörren samt promenera längst havet runt hörnet.',
    address: 'Stora Östergatan 31 / Lilla Östergatan',
    type: 'Bostäder/Lokaler',
    housing: '9st',
    BOA: '667 kvm',
    premises: '5st',
    LOA: '1155 kvm',
    Parkering: 'Parkeringsplats (16st)',
    other:
      'Förädling/exploatering: Lokalerna på innegården kommer rivas och ombildas till ca 30-35 bostäder med levande innergårdar.',
    images: [
      {
        id: 1,
        photo: LimhamnFront,
        alt: 'Image of the front of brick house',
      },
      {
        id: 2,
        photo: LimhamnSky,
        alt: "Image of the bird's-eye view of brick house",
      },
    ],
  },
  {
    id: 3,
    district: 'Limhamn',
    name: 'Strutsen 25',
    description:
      'Fastigheten är belägen på centrala läge i de pittoreska “gamla” delarna av Limhamn på en lugn återvändsgata ett par minuters promenadavstånd från havet och ett stenkast från Limhamns centrum med restauranger, matbutiker och caféer.',
    address: 'Västra Bernadottesgatan 30, Limhamn ',
    type: 'Bostäder',
    housing: '13',
    BOA: '727 kvm',
    premises: '2',
    LOA: '460 kvm',
    Parkering: 'Underjordiskt garage (17st)',
    Standard:
      'Fastigheten håller en hög teknisk standard. Lägenheter har under åren succesivt totalrenoverats med bruksvärdeshöjande uppgraderingar.',
    other:
      'Förädling/exploatering: Lokalerna på innegården kommer rivas och ombildas till ca 30-35 bostäder med levande innergårdar.',
    images: [
      {
        id: 1,
        photo: LimhamnFront,
        alt: 'Image of the front of brick house',
      },
      {
        id: 2,
        photo: LimhamnSky,
        alt: "Image of the bird's-eye view of brick house",
      },
    ],
  },
]

export default properties_dynamic
