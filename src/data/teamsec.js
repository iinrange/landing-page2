import Member1 from 'assets/portrait1.jpg';
import Member2 from 'assets/team/member-2.png';
import Member3 from 'assets/team/member-3.png';
import Member4 from 'assets/team/member-4.png';
import Member5 from 'assets/team/member-5.png';
import Member6 from 'assets/team/member-6.png';

import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



export const teamsec = [
    {
      id: 1,
      imgSrc: Member1,
      altText: 'Raquel Bejarano',
      title: 'Raquel Bejarano',
      designation: 'CEO and Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FaFacebookF />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <FaTwitter />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <FaInstagram />,
        },
      ],
      titleHead: 'Hi there! My name is Raquel and Im so glad you are here!',
      description: 'In 2016, I discovered microblading and I quickly realized that having the correct eyebrow shape and fullness to compliment my facial features helped me feel more beautiful and confident. My fascination with permanent make-up quickly grew into a passion, and I decided to join the profession myself and leave my dental hygiene career of 6 years.      Fast forward 4 years, and now I get to spend most of my days working with other badass women creating the brows and eyeliners of their dreams. My goal is to create a personalized experience and brow art that is special and unique for each person to help boost their confidence, beauty, and simplify their daily routines. ',
    },
    
  ];