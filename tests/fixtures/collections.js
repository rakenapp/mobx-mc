const usersData = [
  {
    id: 1,
    type: 'User',
    title: 'Mr',
    firstName: 'Bill',
    lastName: 'Murray',
    email: 'lostintranslation@example.com',
    phone: '012345678',
    lastLogin: '2017-06-21T03:44:45+0000',
    company: {
      id: 1
    }
  },
  {
    id: 2,
    type: 'User',
    title: 'Mr',
    firstName: 'John',
    lastName: 'Jones',
    email: 'john.jones@example.com',
    phone: '012345678',
    lastLogin: '2017-06-21T03:44:45+0000',
    isPending: true,
    company: {
      id: 2
    }
  },
  {
    id: 3,
    type: 'User',
    title: 'Mr',
    firstName: 'Tim',
    lastName: 'Smith',
    email: 'tim.smith@example.com',
    phone: '012345678',
    company: {
      id: 2
    }
  },
  {
    id: 4,
    type: 'User',
    title: 'Mr',
    firstName: 'Jane',
    lastName: 'Aire',
    email: 'jane.aire@example.com',
    phone: '012345678',
    lastLogin: '2017-06-21T03:44:45+0000',
    company: {
      id: 3
    }
  }
];

const companiesData =  [
  {
    id: 1,
    name: 'Company_1',
    status: 'ACTIVE',
    images: [
      {
        type: 'Media',
        id: 57313,
        createdTimestamp: 1500266713000,
        createdBy: 26478,
        fileName: 'raken.jpg',
        mediaType: 'IMAGE',
        contentUrl:
          'http://cdn.example.com/images/icon-2001270203581133964805.png',
        thumbUrl:
          'http://cdn.example.com/images/icon-2001270203581133964805.png',
        contentType: 'image/png',
        etag: 'image/png',
        fileSize: 5215,
        uploadDate: '2017-07-17T04:45:13+0000',
        takenDate: '2017-06-21T03:44:45+0000'
      }
    ],
    hasSuperDaily: true,
    billingPlan: 'Performance',
    address: {
      type: 'Address',
      streetAddress: '333 N Wilton Pl',
      city: 'Plaucheville',
      state: 'LA',
      postCode: '71362',
      country: 'US',
      timezone: 'America/Chicago',
      geolocation: {
        lat: 30.984297,
        lng: -91.96233
      }
    },
    preferences: {
      weekFirstDay: 7,
      primaryColor: '#4e5939',
      fahrenheit: true,
      registration_completed: true,
      showTimeCardsDivision: false,
      timeCardsRegularTime: 8,
      timeCardsOverTime: 4,
      timeCardsWorkWeek: 40,
      secondaryColor: '#000000'
    }
  },
  {
    id: 2,
    name: 'Company_1',
    status: 'ACTIVE',
    images: [
      {
        type: 'Media',
        id: 57313,
        createdTimestamp: 1500266713000,
        createdBy: 26478,
        fileName: 'raken.jpg',
        mediaType: 'IMAGE',
        contentUrl:
          'http://cdn.example.com/images/icon-2001270203581133964805.png',
        thumbUrl:
          'http://cdn.example.com/images/icon-2001270203581133964805.png',
        contentType: 'image/png',
        etag: 'image/png',
        fileSize: 5215,
        uploadDate: '2017-07-17T04:45:13+0000',
        takenDate: '2017-06-21T03:44:45+0000'
      }
    ],
    hasSuperDaily: true,
    billingPlan: 'Professional',
    address: {
      type: 'Address',
      streetAddress: '59 Rua Road',
      city: 'Auckland',
      state: 'Auckland',
      postCode: '0603',
      country: 'NZ',
      timezone: 'Auckland/Pacific',
      geolocation: {
        lat: -36.9131917,
        lng: 174.65976360000002
      }
    },
    preferences: {
      weekFirstDay: 7,
      primaryColor: '#4e5939',
      fahrenheit: true,
      registration_completed: true,
      showTimeCardsDivision: false,
      timeCardsRegularTime: 8,
      timeCardsOverTime: 4,
      timeCardsWorkWeek: 40,
      secondaryColor: '#000000'
    }
  }
]

export {
  usersData,
  companiesData
};
