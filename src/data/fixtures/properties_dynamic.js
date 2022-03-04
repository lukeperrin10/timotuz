import PågåendeYstad1 from '../../assets/images/pågåendeYstad/03.jpg'
import PågåendeYstad2 from '../../assets/images/pågåendeYstad/01.jpg'
import PågåendeYstad3 from '../../assets/images/pågåendeYstad/02.jpg'
import PågåendeYstad4 from '../../assets/images/pågåendeYstad/04.jpg'
import PågåendeYstad5 from '../../assets/images/pågåendeYstad/05.jpg'
import PågåendeYstad6 from '../../assets/images/pågåendeYstad/06.jpg'
import PågåendeYstad7 from '../../assets/images/pågåendeYstad/07.jpg'
import PågåendeYstad8 from '../../assets/images/pågåendeYstad/08.jpg'
import PågåendeYstad9 from '../../assets/images/pågåendeYstad/09.jpg'
// import PågåendeYstad10 from '../../assets/images/pågåendeYstad/10.jpg'
import Ystad1 from '../../assets/images/Ystad/1.jpg'
import Ystad2 from '../../assets/images/Ystad/2.jpg'
import Ystad3 from '../../assets/images/Ystad/3.jpg'
import Ystad4 from '../../assets/images/Ystad/4.JPG'
import Limhamn1 from '../../assets/images/Limhamn/1.JPG'
import Limhamn2 from '../../assets/images/Limhamn/2.JPG'
import Limhamn3 from '../../assets/images/Limhamn/3.jpg'
import Limhamn4 from '../../assets/images/Limhamn/4.jpg'
import Helsingborg1 from '../../assets/images/Helsingborg/1.jpg'

const properties_dynamic = [
  {
    id: 1,
    district: 'YSTAD',
    name: 'Pågående nyproduktion: Aurora',
    description:
      'Aurora, möjligheternas kvarter, beläget i hjärtat av pittoreska Ystad längs de brokiga kullerstensgatorna. Här har vi ambitionen och förutsättningarna att bygga bostäder som möter morgondagens behov. Vi är i full fas med att utveckla ett nytt bostadskoncept i Ystad för den medvetna stadsmänniskan.\r\n\r\nFastigheten som sträcker sig från Stora Östergatan, den så kallade gågatan, och Lilla Östergatan, är i dagens läge en fastighet som har en enorm potential till att bidra med något speciellt till Ystad som stad.\r\n\r\nKvarterets centrala läge gör det enkelt att gå, cykla eller åka kollektivt. Med fokus på att leva hållbart och tillgängligt bidrar livsstilen samtidigt till en bättre miljö och en bättre hälsa för de boende. I sann Ystadsanda med en pittoresk innergård och privat pool så är vår ambition att  skapa Ystads Gårdshus 2.0.\r\n\r\nPreliminär säljstart: Hösten 2022 ',
    address: 'Stora Östergatan 31 / Lilla Östergatan 36',
    type: 'Bostäder',
    housing: '19st',
    boa: '1500 kvm',
    images: [
      // {
      //   id: 10,
      //   photo: PågåendeYstad10,
      //   alt: '',
      // },
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
    foradling:
      'Lokalerna på innegården kommer rivas och ombildas till ca 30-35 bostäder med levande innergårdar.',
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
    district: 'Malmö / Limhamn',
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
  {
    id: 4,
    district: 'Helsingborg',
    name: 'Mörsaren Västra 6',
    description:
      'Fastigheten ligger på det mest attraktiva och expansiva industriområdet Berga i Norra Helsingborg. På endast 10 minuter med bil nås Helsingborg centrum. Buss avgår ett stenkast från fastigheten till centrala Helsingborg och från Maria station som ligger inom promenadavstånd från fastigheten avgår Pågatågen.',
    address: 'Pistolgatan 3, Helsingborg',
    type: 'Industrilokal',
    lager: '480 kvm',
    kontor: '120 kvm',
    images: [
      {
        id: 1,
        photo: Helsingborg1,
        alt: '',
      },
    ],
  },
]

export default properties_dynamic
