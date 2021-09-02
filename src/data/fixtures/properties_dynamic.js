import PågåendeYstad1 from '../../assets/images/Pågående_Ystad/01.jpg'
import PågåendeYstad2 from '../../assets/images/Pågående_Ystad/02.jpg'
import PågåendeYstad3 from '../../assets/images/Pågående_Ystad/03.jpg'
import PågåendeYstad4 from '../../assets/images/Pågående_Ystad/04.jpg'
import PågåendeYstad5 from '../../assets/images/Pågående_Ystad/05.jpg'
import PågåendeYstad6 from '../../assets/images/Pågående_Ystad/06.jpg'
import PågåendeYstad7 from '../../assets/images/Pågående_Ystad/07.jpg'
import PågåendeYstad8 from '../../assets/images/Pågående_Ystad/08.jpg'
import PågåendeYstad9 from '../../assets/images/Pågående_Ystad/09.jpg'
import Ystad1 from '../../assets/images/Ystad/1.jpg'
import Ystad2 from '../../assets/images/Ystad/2.jpg'
import Ystad3 from '../../assets/images/Ystad/3.jpg'
import Ystad4 from '../../assets/images/Ystad/4.jpg'
import Limhamn1 from '../../assets/images/Limhamn/1.jpg'
import Limhamn2 from '../../assets/images/Limhamn/2.jpg'
import Limhamn3 from '../../assets/images/Limhamn/3.jpg'
import Limhamn4 from '../../assets/images/Limhamn/4.jpg'

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
    boa: '667 kvm',
    images: [
      {
        id: 1,
        photo: PågåendeYstad1,
        alt: '',
      },
      {
        id: 2,
        photo: PågåendeYstad2,
        alt: '',
      },
      {
        id: 3,
        photo: PågåendeYstad3,
        alt: '',
      },
      {
        id: 4,
        photo: PågåendeYstad4,
        alt: '',
      },
      {
        id: 5,
        photo: PågåendeYstad5,
        alt: '',
      },
      {
        id: 6,
        photo: PågåendeYstad6,
        alt: '',
      },
      {
        id: 7,
        photo: PågåendeYstad7,
        alt: '',
      },
      {
        id: 8,
        photo: PågåendeYstad8,
        alt: '',
      },
      {
        id: 9,
        photo: PågåendeYstad9,
        alt: '',
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
    boa: '667 kvm',
    premises: '5st',
    loa: '1155 kvm',
    parking: 'Parkeringsplats (16st)',
    other:
      'Förädling/exploatering: Lokalerna på innegården kommer rivas och ombildas till ca 30-35 bostäder med levande innergårdar.',
    images: [
      {
        id: 1,
        photo: Ystad1,
        alt: '',
      },
      {
        id: 2,
        photo: Ystad2,
        alt: '',
      },
      {
        id: 3,
        photo: Ystad3,
        alt: '',
      },
      {
        id: 4,
        photo: Ystad4,
        alt: '',
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
    boa: '727 kvm',
    premises: '2',
    loa: '460 kvm',
    parking: 'Underjordiskt garage (17st)',
    standard:
      'Fastigheten håller en hög teknisk standard. Lägenheter har under åren succesivt totalrenoverats med bruksvärdeshöjande uppgraderingar.',
    images: [
      {
        id: 1,
        photo: Limhamn1,
        alt: '',
      },
      {
        id: 1,
        photo: Limhamn2,
        alt: '',
      },
      {
        id: 3,
        photo: Limhamn3,
        alt: '',
      },
      {
        id: 4,
        photo: Limhamn4,
        alt: '',
      },
    ],
  },
]

export default properties_dynamic
