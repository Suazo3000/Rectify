const mongoose = require('mongoose');
const Therapist = require('../models/Therapist');

mongoose.connect('mongodb://127.0.0.1:27017/rectify', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const therapistData = [
  {
    name: 'Dale Cooper',
    specialty: 'Reintegration Counseling',
    location: 'City A',
    bio: 'I specialize in providing counseling and support to formerly incarcerated individuals as they navigate the challenges of reintegration into society. Together, we will develop strategies to overcome obstacles and achieve personal growth and success.',
  },
  {
    name: 'Laura Palmer',
    specialty: 'Post-Incarceration Trauma Therapy',
    location: 'City B',
    bio: 'With a focus on trauma-informed care, I assist individuals who have been released from incarceration in addressing and healing from the emotional and psychological impact of their experiences. Together, we will work towards building resilience and creating a brighter future.',
  },
  {
    name: 'Audrey Horne',
    specialty: 'Employment and Skills Development',
    location: 'City C',
    bio: 'My expertise lies in helping formerly incarcerated individuals acquire new skills, secure employment, and develop a positive and fulfilling career path. I am committed to supporting you in building a successful and sustainable future.',
  },
  {
    name: 'Denise Bryson',
    specialty: 'Family and Community Reintegration',
    location: 'City D',
    bio: 'As a family and community therapist, I specialize in facilitating the reintegration of formerly incarcerated individuals into their families and communities. By fostering healthy relationships and providing support, we can create a strong foundation for a successful reentry process.',
  },
  {
    name: 'Lawrence Jacoby',
    specialty: 'Substance Abuse and Addiction Recovery',
    location: 'City E',
    bio: 'I focus on helping individuals who have experienced incarceration overcome substance abuse and addiction. Through evidence-based interventions and personalized treatment plans, we can work towards long-term recovery and a positive reintegration into society.',
  },
];

const seedTherapists = async () => {
  try {
    await Therapist.deleteMany();
    await Therapist.create(therapistData);
    console.log('Seed data inserted successfully');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedTherapists();
// Compare this snippet from server/models/Therapist.js: