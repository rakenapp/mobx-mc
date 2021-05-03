const companyData = {
  type: 'Company',
  id: 1,
  name: 'Company_1',
  status: 'ACTIVE',
  images: [
    {
      type: 'Media',
      id: 57313,
      createdTimestamp: 1500266713000,
      createdBy: 2,
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
  }
};

const userData = {
  type: 'User',
  id: 2,
  username: 'projectmem1@rakneapp.com',
  company: {
    type: 'Company',
    id: 2
  },
  firstName: 'John',
  lastName: 'Doe',
  phone: '012345678',
  images: [
    {
      type: 'Media',
      id: 1565139,
      createdTimestamp: 1500266713000,
      createdBy: 2,
      fileName: 'user.png',
      mediaType: 'IMAGE',
      contentUrl: 'https://cdn.example.com/ui/images/user.png',
      thumbUrl: 'https://cdn.example.com/ui/images/user.png',
      contentType: 'image/png',
      etag: 'image/png',
      fileSize: 5215,
      uploadDate: '2017-07-17T04:45:13+0000',
      takenDate: '2017-06-21T03:44:45+0000'
    }
  ]
};

export {
  userData,
  companyData
};
