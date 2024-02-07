import { MeiliSearch } from 'meilisearch';

export const data = {
  consultants: [
    {
      id: '1',
      firstName: 'Jar',
      lastName: 'Jarsson',
      skills: ['JavaScript', 'Python', 'Matlab'],
      decription:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum risus non turpis efficitur malesuada. In ac tincidunt mauris. Ut cursus ac odio vitae vestibulum. ',
      title: 'Full-stack javascript developer',
    },
    {
      id: '2',
      firstName: 'Jou-Fang',
      lastName: 'Wang',
      skills: ['JavaScript', 'TypeScript', 'C++', 'Python'],
      decription:
        'With a background in Mechatronics and Architecture, I am a detail-oriented problem solver passionate about IT. I enjoy the challenge of designing products and find being a fullstack developer to be the perfect blend of my engineering and design expertise. My multidimensional perspective enables me to approach tasks from different angles, delivering innovative and user-centric solutions. I am driven to create seamless and intuitive experiences that make a lasting impact. ',
      title:
        'An innovative Full-Stack Developer  who is passionate About IT and Automation Tech',
    },
    {
      id: '3',
      firstName: 'Allan',
      lastName: 'Heremi',
      skills: ['Javascript', 'Typescript', 'Solidity', 'Tailwind', 'React'],
      decription: 'I like to code, especially using React. ',
      title: 'Most humble developer in the world',
    },
    {
      id: '4',
      firstName: 'Rasmus',
      lastName: 'Eklund',
      skills: [
        'JavaScript',
        'TypeScript',
        'React',
        'Python',
        'MongoDB',
        'PostgreSQL',
        'Prisma',
      ],
      decription: 'I like to BBQ, drink beer and code',
      title: 'Fullstack JavaScript developer plus Python',
    },
  ],
};

const client = new MeiliSearch({
  host: 'https://salttalentpool.fly.dev/',
  apiKey: 'vl5JALxfUyTV/RNnSQEIp2crn+/2Cw2DAcZNs2zkUyE=',
});

const populateMeilisearch = async () => {
  const devs = data.consultants;
  client
    .index('developers')
    .addDocuments(devs)
    .then(res => console.log(res))
    .catch(err => {
      console.log(err.message);
    });
};

populateMeilisearch()
  .then(() => console.log('Meilisearch populated!'))
  .catch(err => {
    console.log(err.message);
  });
