import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';


export const packages = {
    monthly: [
      {
        id: 1,
        name: 'Microblading',
        description: 'For a Permanent Look',
        buttonText: 'Book',
        priceWithUnit: '$600',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'First Session Free',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Eyelashes and Makeup',
        description: 'Get Ready for Your Ocasion',
        priceWithUnit: '$200',
        buttonText: 'Book',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'First Session Free',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Whole Look',
        description: 'For a professional Look',
        priceWithUnit: '$700',
        buttonText: 'Book',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Microblading, Eyelasher and Makeup session',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
    ],
    session: [
      {
        id: 1,
        name: 'Microblading',
        description: 'For a Permanent Look',
        buttonText: 'Book',
        priceWithUnit: '$700',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'First Session Free',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Eyelashes and Makeup',
        description: 'Get Ready for Your Ocasion',
        priceWithUnit: '$300',
        buttonText: 'Book',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'First Session Free',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
      {
        id: 3,
        header: 'Suggested',
        headerIcon: <IoIosCheckmarkCircle />,
        name: 'Whole Look',
        description: 'For a professional Look',
        priceWithUnit: '$900',
        buttonText: 'Book',
        anotherOption: 'Or Start 14 Days trail',
        points: [
          {
            id: 1,
            icon: <IoIosCheckmarkCircle />,
            text: 'Microblading, Eyelasher and Makeup session',
            isAvailable: true,
          },
          {
            id: 2,
            icon: <IoIosCheckmarkCircle />,
            text: "Free Product per Session",
            isAvailable: true,
          },
          {
            id: 3,
            icon: <IoIosCheckmarkCircle />,
            text: 'Free reschedule',
            isAvailable: true,
          },
        ],
      },
    ],
  };