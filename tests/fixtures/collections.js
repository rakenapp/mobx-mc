const usersData = {
  page: {
    previous: 'http://example.com/users?page=1',
    self: 'http://example.com/users?page=2',
    next: 'http://example.com/users?page=3'
  },
  summary: {
    collaborators: 20,
    members: 10
  },
  collection: [
    {
      id: 1,
      type: 'User',
      title: 'Mr',
      firstName: 'Nick',
      lastName: 'Ryall',
      email: 'nick.ryall@gmail.com',
      phone: '021552497',
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
      email: 'john.jones@gmail.com',
      phone: '021552497',
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
      email: 'tim.smith@gmail.com',
      phone: '021552497',
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
      email: 'jane.aire@gmail.com',
      phone: '021552497',
      lastLogin: '2017-06-21T03:44:45+0000',
      company: {
        id: 3
      }
    }
  ]
};

const companiesData = {
  page: {
    previous: 'http://example.com/companies?page=1',
    self: 'http://example.com/companies?page=2',
    next: 'http://example.com/companies?page=3'
  },
  collection: [
    {
      id: 1,
      name: 'BiznessName1',
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
            'http://cdn.rakenapp.com/images/icon-2001270203581133964805.png',
          thumbUrl:
            'http://cdn.rakenapp.com/images/icon-2001270203581133964805.png',
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
      name: 'BiznessName2',
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
            'http://cdn.rakenapp.com/images/icon-2001270203581133964805.png',
          thumbUrl:
            'http://cdn.rakenapp.com/images/icon-2001270203581133964805.png',
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
};

const projectsData = {
  collection: [
    {
      id: 2,
      teamId: 2,
      type: 'Project',
      projectState: 'ACTIVE',
      startDate: '2017-05-23T04:36:49+00:00',
      createdTimestamp: '2017-05-23T04:36:49+00:00',
      name: 'Lincoln Place Apartments',
      projectNo: '124',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '1050 Frederick St',
        city: 'Venice',
        state: 'CA',
        postCode: '90291',
        timezone: 'America/Los_Angeles',
        country: 'US',
        geolocation: {
          lat: 33.9992489,
          lng: -118.4602105
        }
      },
      overallStats: {
        workers: 85,
        hours: 125000
      },
      timeCardsRegularTime: 8,
      timeCardsOverTime: 4,
      timeCardsWorkWeek: 40
    },
    {
      id: 3,
      teamId: 3,
      type: 'Project',
      projectState: 'INACTIVE',
      name: 'Wilshire Grand Center',
      startDate: '2015-01-15T04:36:49+00:00',
      createdTimestamp: '2015-01-15T04:36:49+00:00',
      projectNo: '125',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '900 Wilshire Blvd',
        city: 'Los Angeles',
        state: 'CA',
        postCode: '92007',
        country: 'US',
        geolocation: {
          lat: 34.0501216,
          lng: -118.2595763
        },
        timezone: 'America/Los_Angeles'
      },
      overallStats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 4,
      teamId: 4,
      type: 'Project',
      projectState: 'DELETED',
      startDate: '2015-03-11T04:36:49+00:00',
      createdTimestamp: '2015-03-11T04:36:49+00:00',
      name: 'Village at Westfield Topanga',
      projectNo: '126',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '96600 Topanga Canyon Blvd',
        city: 'Canoga Park',
        state: 'CA',
        postCode: '91303',
        country: 'US',
        geolocation: {
          lat: 34.1900772,
          lng: -118.6042674
        },
        timezone: 'America/Los_Angeles'
      },
      overallStats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 5,
      teamId: 5,
      type: 'Project',
      projectState: 'INACTIVE',
      startDate: '2016-04-11T04:36:49+00:00',
      createdTimestamp: '2015-03-11T04:36:49+00:00',
      name: 'Torrance Memorial Medical Center',
      projectNo: '127',
      streetAddress: '3330 Lomita Blvd',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        city: 'Torrance',
        state: 'CA',
        postCode: '90505',
        country: 'US',
        geolocation: {
          lat: 33.8119157,
          lng: -118.3434945
        },
        timezone: 'America/Los_Angeles'
      },
      overallStats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 6,
      teamId: 6,
      type: 'Project',
      projectState: 'ACTIVE',
      startDate: '2016-08-18T04:36:49+00:00',
      createdTimestamp: '2016-08-18T04:36:49+00:00',
      name: 'Rose Bowl Rennovation',
      projectNo: '128',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '1001 Rose Bowl Dr',
        city: 'Pasadena',
        state: 'CA',
        postCode: '91103',
        country: 'US',
        geolocation: {
          lat: 34.1624472,
          lng: -118.1665604
        },
        timezone: 'America/Los_Angeles'
      },
      stats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 7,
      teamId: 7,
      type: 'Project',
      projectState: 'ACTIVE',
      startDate: '2016-12-18T04:36:49+00:00',
      createdTimestamp: '2016-12-18T04:36:49+00:00',
      name: 'Jordan High School',
      projectNo: '128',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '6500 Atlantic Ave',
        city: 'Long Beach',
        state: 'CA',
        postCode: '90805',
        country: 'US',
        geolocation: {
          lat: 33.8709466,
          lng: -118.1850493
        },
        timezone: 'America/Los_Angeles'
      },
      stats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 8,
      teamId: 8,
      type: 'Project',
      projectState: 'ACTIVE',
      startDate: '2016-10-25T04:36:49+00:00',
      name: 'The Camden Apartments',
      createdTimestamp: '2016-12-18T04:36:49+00:00',
      projectNo: '129',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '1540 N. Vine St',
        city: 'Hollywood',
        state: 'CA',
        postCode: '90028',
        country: 'US',
        geolocation: {
          lat: 34.0989441,
          lng: -118.3266888
        },
        timezone: 'America/Los_Angeles'
      },
      stats: {
        workers: 85,
        hours: 125000
      }
    },
    {
      id: 9,
      teamId: 9,
      projectState: 'ACTIVE',
      startDate: '2016-09-25T04:36:49+00:00',
      createdTimestamp: '2016-09-25T04:36:49+00:00',
      name: 'Sunset And Gordon Residential Tower 789',
      projectNo: '130',
      projectImage: {
        type: 'Media',
        contentUrl: '/images/project.jpg'
      },
      address: {
        streetAddress: '1528 Gordon St',
        city: 'Hollywood',
        state: 'Los Angeles',
        postCode: '90028',
        country: 'US',
        geolocation: {
          lat: 34.098977,
          lng: -118.319287
        },
        timezone: 'America/Los_Angeles'
      },
      stats: {
        workers: 85,
        hours: 125000
      }
    }
  ]
};

const questionCategoriesData = {
  collection: [
    {
      id: 1000,
      name: 'General',
      displayName: 'General Site Conditions',
      value: 'CATEGORY_GENERAL'
    },
    {
      id: 1001,
      name: 'Delays',
      displayName: 'Schedule Delays',
      value: 'CATEGORY_DELAYS'
    },
    {
      id: 1002,
      name: 'Weather',
      displayName: 'Weather Delays',
      value: 'CATEGORY_DELAYS_WEATHER'
    },
    {
      id: 1003,
      name: 'Safety',
      displayName: 'Site Safety',
      value: 'CATEGORY_SAFETY'
    },
    {
      id: 1004,
      name: 'Inspection',
      displayName: 'Inspection',
      value: 'CATEGORY_INSPECTION'
    },
    {
      id: 1005,
      name: 'Visitors',
      displayName: 'Site Visitors',
      value: 'CATEGORY_VISITORS'
    },
    {
      id: 1006,
      name: 'Equipment',
      displayName: 'Equipment & Deliveries',
      value: 'CATEGORY_EQUIPMENT'
    },
    {
      id: 1007,
      name: 'Environmental',
      displayName: 'Environmental Concerns',
      value: 'CATEGORY_ENVIRONMENTAL'
    }
  ]
};

const allTimeStatsByProjectData = {
  type: 'Insights',
  rollupProjectMeasureStats: {
    type: 'ProjectMeasureStats',
    workers: 1115.0,
    hours: 24806.0,
    safetyIncidents: 5,
    delays: 4,
    dailyReports: 116,
    missedDailies: 1709,
    dailiesCompliancePercent: 8,
    openTasks: 333,
    createdTasks: 2,
    openTasksPercent: 0,
    totalProjectDays: 4248
  },
  projectMeasures: [
    {
      type: 'ProjectMeasure',
      project: {
        id: 2,
        type: 'Project',
        name: 'Lincoln Place Apartments'
      },
      stats: {
        type: 'ProjectMeasureStats',
        workers: 78.0,
        hours: 668.0,
        safetyIncidents: 3,
        delays: 1,
        dailyReports: 54,
        missedDailies: 1222,
        dailiesCompliancePercent: 4,
        openTasks: 333,
        createdTasks: 1,
        openTasksPercent: 0,
        totalProjectDays: 2550
      },
      teamMeasures: []
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 6,
        type: 'Project',
        name: 'Rose Bowl Rennovation'
      },
      stats: {
        type: 'ProjectMeasureStats',
        workers: 21.0,
        hours: 113.25,
        safetyIncidents: 1,
        delays: 1,
        dailyReports: 20,
        missedDailies: 91,
        dailiesCompliancePercent: 18,
        openTasks: 0,
        createdTasks: 1,
        openTasksPercent: 0,
        totalProjectDays: 222
      },
      teamMeasures: []
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 7,
        type: 'Project',
        name: 'Jordan High School'
      },
      stats: {
        type: 'ProjectMeasureStats',
        workers: 2.0,
        hours: 16.0,
        safetyIncidents: 0,
        delays: 0,
        dailyReports: 12,
        missedDailies: 176,
        dailiesCompliancePercent: 6,
        openTasks: 0,
        createdTasks: 0,
        openTasksPercent: 0,
        totalProjectDays: 378
      },
      teamMeasures: []
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 8,
        type: 'Project',
        name: 'The Camden Apartments'
      },
      stats: {
        type: 'ProjectMeasureStats',
        workers: 0.0,
        hours: 0.0,
        safetyIncidents: 0,
        delays: 0,
        dailyReports: 11,
        missedDailies: 29,
        dailiesCompliancePercent: 28,
        openTasks: 0,
        createdTasks: 0,
        openTasksPercent: 0,
        totalProjectDays: 662
      },
      teamMeasures: []
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 9,
        type: 'Project',
        name: 'Sunset And Gordon Residential Tower'
      },
      stats: {
        type: 'ProjectMeasureStats',
        workers: 0.0,
        hours: 0.0,
        safetyIncidents: 0,
        delays: 0,
        dailyReports: 11,
        missedDailies: 29,
        dailiesCompliancePercent: 28,
        openTasks: 0,
        createdTasks: 0,
        openTasksPercent: 0,
        totalProjectDays: 82
      },
      teamMeasures: []
    }
  ]
};

const complianceByProjectData = {
  type: 'Insights',
  projectMeasures: [
    {
      type: 'ProjectMeasure',
      project: {
        id: 2,
        type: 'Project',
        name: 'Lincoln Place Apartments'
      },
      stats: {
        type: 'ProjectMeasureStats',
        dailyReports: 0,
        missedDailies: 8,
        dailiesCompliancePercent: 0
      },
      teamMeasures: [
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 2,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 0,
            missedDailies: 8,
            dailiesCompliancePercent: 0,
            company: {
              id: 1,
              name: 'BiznessName1',
              status: 'ACTIVE'
            }
          }
        },
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 11,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 0,
            missedDailies: 8,
            dailiesCompliancePercent: 0,
            company: {
              id: 2,
              name: 'BiznessName2',
              status: 'ACTIVE'
            }
          }
        }
      ]
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 6,
        type: 'Project',
        name: 'Rose Bowl Rennovation'
      },
      stats: {
        type: 'ProjectMeasureStats',
        dailyReports: 0,
        missedDailies: 13,
        dailiesCompliancePercent: 0
      },
      teamMeasures: [
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 6,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 0,
            missedDailies: 13,
            dailiesCompliancePercent: 0,
            company: {
              id: 1,
              name: 'BiznessName1',
              status: 'ACTIVE'
            }
          }
        }
      ]
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 7,
        type: 'Project',
        name: 'Jordan High School'
      },
      stats: {
        type: 'ProjectMeasureStats',
        dailyReports: 1,
        missedDailies: 12,
        dailiesCompliancePercent: 8
      },
      teamMeasures: [
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 7,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 1,
            missedDailies: 12,
            dailiesCompliancePercent: 8,
            company: {
              id: 1,
              name: 'BiznessName1',
              status: 'ACTIVE'
            }
          }
        },
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 12,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 1,
            missedDailies: 12,
            dailiesCompliancePercent: 8,
            company: {
              id: 3,
              name: 'BiznessName3',
              status: 'ACTIVE'
            }
          }
        }
      ]
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 8,
        type: 'Project',
        name: 'The Camden Apartments'
      },
      stats: {
        type: 'ProjectMeasureStats',
        dailyReports: 0,
        missedDailies: 18,
        dailiesCompliancePercent: 0
      },
      teamMeasures: [
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 8,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 0,
            missedDailies: 18,
            dailiesCompliancePercent: 0,
            company: {
              id: 1,
              name: 'BiznessName1',
              status: 'ACTIVE'
            }
          }
        },
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 13,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 0,
            missedDailies: 18,
            dailiesCompliancePercent: 0,
            company: {
              id: 4,
              name: 'BiznessName4',
              status: 'ACTIVE'
            }
          }
        }
      ]
    },
    {
      type: 'ProjectMeasure',
      project: {
        id: 9,
        name: 'Sunset And Gordon Residential Tower'
      },
      stats: {
        type: 'ProjectMeasureStats',
        dailyReports: 4,
        missedDailies: 25,
        dailiesCompliancePercent: 14
      },
      teamMeasures: [
        {
          type: 'ProjectTeamMeasure',
          projectTeamId: 9,
          stats: {
            type: 'ProjectMeasureStats',
            dailyReports: 4,
            missedDailies: 25,
            dailiesCompliancePercent: 14,
            company: {
              id: 1,
              name: 'BiznessName1',
              status: 'ACTIVE'
            }
          }
        }
      ]
    }
  ]
};

const topUsersData = {
  type: 'Insights',
  userMeasures: [
    {
      type: 'UserMeasureStats',
      id: 26552,
      numberOfActivities: 45,
      signedReports: 2,
      compliancePercent: -2150,
      company: {
        id: 1,
        name: 'BiznessName1'
      },
      user: {
        id: 1
      }
    },
    {
      type: 'UserMeasureStats',
      id: 27425,
      numberOfActivities: 303,
      signedReports: 21,
      compliancePercent: -1343,
      company: {
        id: 1,
        name: 'BiznessName2'
      },
      user: {
        id: 2
      }
    },
    {
      type: 'UserMeasureStats',
      id: 28553,
      numberOfActivities: 1,
      signedReports: 0,
      compliancePercent: 0,
      company: {
        id: 1,
        name: 'BiznessName2'
      },
      user: {
        id: 3
      }
    }
  ]
};

const attachmentActivityData = {
  collection: [
    {
      type: 'AttachmentActivity',
      id: 1627459,
      createdTimestamp: 1512429246000,
      createdBy: 1,
      project: {
        id: 2
      },
      company: {
        id: 1
      },
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/cardiff-mall_2017-12-03_5796b2883ea7b057.pdf'
      },
      reportDate: '2017-12-03',
      reportStatus: 'UNSIGNED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1512428400,
          temperature: 64.71,
          icon: 'clear-day'
        }
      },
      updatedBy: 0,
      fileName: 'Cardiff Mall_20171204_151407.jpg.jpg',
      mediaType: 'IMAGE',
      contentUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/8ffdf9a1-2001-459e-9a09-049a3e5f9f88',
      thumbUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/8ffdf9a1-2001-459e-9a09-049a3e5f9f88_thumb.jpg',
      contentType: 'image/jpeg',
      tags: 'null',
      fileSize: 0,
      uploadDate: 1512429245000,
      takenDate: 1512429248000,
      empty: false
    },
    {
      type: 'AttachmentActivity',
      id: 1627458,
      createdTimestamp: 1512429243000,
      createdBy: 2,
      project: {
        id: 2
      },
      company: {
        id: 2
      },
      projectTeamId: 62453,
      reportId: 611650,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/cardiff-mall_2017-12-03_5796b2883ea7b057.pdf'
      },
      reportDate: '2017-12-03',
      reportStatus: 'UNSIGNED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1512428400,
          temperature: 64.71,
          icon: 'clear-day'
        }
      },
      updatedBy: 0,
      fileName: 'Cardiff Mall_20171204_151404.jpg.jpg',
      mediaType: 'IMAGE',
      contentUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/6ba8e8ad-5ec7-4e47-b886-a9269497b7b7',
      thumbUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/6ba8e8ad-5ec7-4e47-b886-a9269497b7b7_thumb.jpg',
      contentType: 'image/jpeg',
      tags: 'null',
      fileSize: 0,
      uploadDate: 1512429243000,
      takenDate: 1512429244000,
      empty: false
    }
  ]
};

const surveyActivityData = {
  collection: [
    {
      type: 'SurveyActivity',
      id: 4505662,
      createdTimestamp: 1509082933000,
      updatedTimestamp: 1509406479000,
      updatedBy: 27425,
      createdBy: 27425,
      project: {
        id: 3
      },
      company: {
        id: 1
      },
      projectTeamId: 59552,
      reportId: 608331,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/make-office-building_2017-10-26_b4a008a331f657b4.pdf'
      },
      reportDate: '2017-10-26',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1509404400,
          temperature: 65.3,
          icon: 'clear-day'
        }
      },
      questionId: 167766,
      desc: 'Delay',
      answer: 'NO',
      question: {
        type: 'ReportQuestion',
        id: 167766,
        tag: 3,
        category: 'CATEGORY_DELAYS',
        question: 'Any schedule delays occur?',
        required: true
      },
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4492718,
      createdTimestamp: 1507614235000,
      updatedTimestamp: 1507614331000,
      updatedBy: 2,
      createdBy: 27425,
      project: {
        id: 3,
        name: 'florida hospital'
      },
      company: {
        id: 2,
        name: 'Fortis Construction'
      },
      projectTeamId: 59790,
      reportId: 606164,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/florida-hospital_2017-10-09_3c5fff2d395bd1a1.pdf'
      },
      reportDate: '2017-10-09',
      reportStatus: 'UNSIGNED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1507611600,
          temperature: 78.2,
          icon: 'clear-night'
        }
      },
      questionId: 169936,
      desc:
        'there was too much rain which caused the footing pour to be delayed',
      answer: 'YES',
      question: {
        type: 'ReportQuestion',
        id: 169936,
        tag: 1,
        category: 'CATEGORY_DELAYS',
        question: 'Any equipment delays?',
        required: true
      },
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4492719,
      createdTimestamp: 1507614235000,
      updatedTimestamp: 1507614331000,
      updatedBy: 27425,
      createdBy: 27425,
      project: {
        id: 2
      },
      company: {
        id: 2
      },
      projectTeamId: 59790,
      reportId: 606164,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/florida-hospital_2017-10-09_3c5fff2d395bd1a1.pdf'
      },
      reportDate: '2017-10-09',
      reportStatus: 'UNSIGNED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1507611600,
          temperature: 78.2,
          icon: 'clear-night'
        }
      },
      questionId: 169937,
      desc:
        'there was too much rain which caused the footing pour to be delayed',
      answer: 'YES',
      question: {
        type: 'ReportQuestion',
        id: 169937,
        tag: 2,
        category: 'CATEGORY_DELAYS_WEATHER',
        question: 'Did weather cause any delays?',
        required: true
      },
      empty: false
    }
  ]
};

const missedDailiesData = {
  page: {
    offset: 0,
    limit: 10,
    totalElements: 1000,
    next: '/ra/dashboard/misseddailies?offset=100&limit=10'
  },
  collection: [
    {
      dateFor: '2017-12-11',
      notified: false,
      project: {
        id: 2
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-11'
    },
    {
      dateFor: '2017-12-08',
      notified: false,
      project: {
        id: 3
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-08'
    },
    {
      dateFor: '2017-12-07',
      notified: false,
      project: {
        id: 4
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-07'
    },
    {
      dateFor: '2017-12-06',
      notified: false,
      project: {
        id: 5
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-06'
    },
    {
      dateFor: '2017-12-05',
      notified: false,
      project: {
        id: 6
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-05'
    },
    {
      dateFor: '2017-12-04',
      notified: false,
      project: {
        id: 7
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-04'
    },
    {
      dateFor: '2017-12-01',
      notified: false,
      project: {
        id: 4
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-12-01'
    },
    {
      dateFor: '2017-12-01',
      notified: false,
      project: {
        id: 3
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 3,
      id: '3_2017-12-01'
    },
    {
      dateFor: '2017-11-30',
      notified: false,
      project: {
        id: 2
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-11-30'
    },
    {
      dateFor: '2017-11-29',
      notified: false,
      project: {
        id: 5
      },
      company: {
        id: 1,
        name: 'raken'
      },
      projectTeamId: 4,
      id: '4_2017-11-29'
    }
  ]
};

const recentActivityData = {
  page: {
    offset: 0,
    limit: 7,
    totalElements: 7
  },
  collection: [
    {
      type: 'AttachmentActivity',
      id: 1628886,
      createdTimestamp: 1513631194000,
      createdBy: 2,
      project: {
        id: 2,
        name: 'A New Project With Image'
      },
      company: {
        id: 2
      },
      projectTeamId: 2,
      reportId: 612716,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/a-new-project-with-image_2017-12-17_cbb661c8002fb1a8.pdf'
      },
      reportDate: '2017-12-17',
      reportStatus: 'UNSIGNED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513630800,
          temperature: 69.78,
          icon: 'clear-day'
        }
      },
      updatedBy: 0,
      fileName: '2518edc6-205c-4b97-81b2-cd2d22fa579a_thumb.jpg',
      mediaType: 'IMAGE',
      contentUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/2097f789-1af0-4dc0-ba12-e7b95a2b1dcf',
      thumbUrl:
        'https://s3.amazonaws.com/raken-dev/2017/12/2097f789-1af0-4dc0-ba12-e7b95a2b1dcf_thumb.jpg',
      contentType: 'image/jpeg',
      fileSize: 71706,
      uploadDate: 1513631194000,
      takenDate: 1508230129000,
      empty: false
    },
    {
      type: 'TaskActivity',
      id: 135795,
      createdTimestamp: 1513550969000,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportDate: '2017-12-17',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      desc: 'A new task.',
      status: 'OPEN',
      assignee: {
        id: 27682,
        name: 'yuri@rakenapp.com',
        firstName: 'Yuriy',
        lastName: 'Kuchinskiy(1)',
        active: true
      },
      dueDate: '2017-12-17',
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4528561,
      createdTimestamp: 1512724169000,
      updatedTimestamp: 1513550949000,
      updatedBy: 27682,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      questionId: 161035,
      desc: 'All areas done.',
      answer: 'NO',
      question: {
        type: 'ReportQuestion',
        id: 161035,
        tag: 4,
        category: 'CATEGORY_DELAYS',
        question: "Any areas that can't be worked on?",
        required: true
      },
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4528560,
      createdTimestamp: 1512724169000,
      updatedTimestamp: 1513550949000,
      updatedBy: 27682,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      questionId: 161034,
      desc: 'There were 3 visitors.',
      answer: 'YES',
      question: {
        type: 'ReportQuestion',
        id: 161034,
        tag: 3,
        category: 'CATEGORY_VISITORS',
        question: 'Any visitors on site?',
        required: true
      },
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4528562,
      createdTimestamp: 1512724169000,
      updatedTimestamp: 1513550949000,
      updatedBy: 27682,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      questionId: 161036,
      answer: 'YES',
      question: {
        type: 'ReportQuestion',
        id: 161036,
        tag: 5,
        category: 'CATEGORY_EQUIPMENT',
        question: 'Any equipment rented on site?',
        required: true
      },
      empty: false
    },
    {
      type: 'SurveyActivity',
      id: 4528559,
      createdTimestamp: 1512724169000,
      updatedTimestamp: 1513550949000,
      updatedBy: 27682,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      questionId: 161033,
      answer: 'YES',
      question: {
        type: 'ReportQuestion',
        id: 161033,
        tag: 2,
        category: 'CATEGORY_DELAYS_WEATHER',
        question: 'Did weather cause any delays?',
        required: true
      },
      empty: false
    },
    {
      type: 'NoteActivity',
      id: 488158,
      createdTimestamp: 1513550922000,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      comment: 'A New Note.',
      category: 'NOTES',
      empty: false
    },
    {
      type: 'WorklogActivity',
      id: 4289945,
      createdTimestamp: 1513550909000,
      createdBy: 27682,
      project: {
        id: 3,
        name: 'Test-2017-06-17'
      },
      company: {
        id: 22827,
        name: 'raken'
      },
      projectTeamId: 3,
      reportId: 612183,
      pdfs: {
        daily:
          'https://alpha-priv.rakenapp.com//projects/reports/test-2017-06-17_2017-12-08_4d0859eb0c361749.pdf'
      },
      reportDate: '2017-12-08',
      reportStatus: 'COMPLETED',
      weatherNow: {
        type: 'Weather',
        hourSummary: {
          type: 'HourSummary',
          hour: 1513548000,
          temperature: 46.27,
          icon: 'partly-cloudy-day'
        }
      },
      subcontractor: 'New WorkLog',
      workerCount: 2,
      hours: 0.0,
      empty: false
    }
  ]
};

const filterData = {
  collection: [
    {
      type: 'Filter',
      id: 1,
      userId: 1,
      name: 'Raken Default',
      filterDefault: false
    },
    {
      type: 'Filter',
      id: 2,
      userId: 2,
      name: 'A Custom Filter',
      filterDefault: true,
      duration: 'ALLTIME',
      projectIds: [2, 3, 4]
    }
  ]
};

const dailyReportsData = {
  page: {
    offset: 0,
    limit: 2,
    next: 'https://app.rakenapp.com/ra/timeline?offset=2&limit=2'
  },
  collection: [
    {
      type: 'Report',
      id: 646322,
      project: {
        type: 'Project',
        id: 2
      },
      status: 'COMPLETED',
      date: '2018-02-23',
      workLogs: [
        {
          type: 'Worklog',
          id: 4483856,
          createdTimestamp: 1519263199000,
          createdBy: 28425,
          workerCount: 3,
          totalHours: 0.0,
          teamId: 2,
          attachments: [
            {
              type: 'Media',
              id: 2022393,
              createdTimestamp: 1519263206000,
              createdBy: 28425,
              fileName: 'project-11.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/5cca8dc9-d801-425b-8173-bcbc4b35b6d2',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/5cca8dc9-d801-425b-8173-bcbc4b35b6d2_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 174697,
              uploadDate: 1519263206000,
              takenDate: 1515699363000
            }
          ],
          subcontractor: 'Another Worklog',
          hours: 0.0
        }
      ],
      notes: [
        {
          type: 'Note',
          id: 653566,
          createdTimestamp: 1519329691000,
          createdBy: 28425,
          category: 'NOTES',
          comment: 'A New Note',
          teamId: 2
        }
      ],
      answers: [
        {
          type: 'ReportAnswer',
          id: 4733528,
          createdTimestamp: 1519263177000,
          updatedTimestamp: 1519263208000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376498,
            tag: 0,
            category: 'CATEGORY_SAFETY',
            question: 'Any accidents on site today?',
            required: true
          },
          questionId: 376498,
          answer: 'YES',
          teamId: 2
        },
        {
          type: 'ReportAnswer',
          id: 4733529,
          createdTimestamp: 1519263177000,
          updatedTimestamp: 1519263208000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376499,
            tag: 1,
            category: 'CATEGORY_DELAYS',
            question: 'Any schedule delays occur?',
            required: true
          },
          questionId: 376499,
          answer: 'YES',
          teamId: 2
        },
        {
          type: 'ReportAnswer',
          id: 4733530,
          createdTimestamp: 1519263177000,
          updatedTimestamp: 1519518680000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376500,
            tag: 2,
            category: 'CATEGORY_DELAYS_WEATHER',
            question: 'Did weather cause any delays?',
            required: true
          },
          questionId: 376500,
          answer: 'NO',
          teamId: 2
        },
        {
          type: 'ReportAnswer',
          id: 4733531,
          createdTimestamp: 1519263177000,
          updatedTimestamp: 1519518680000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376501,
            tag: 3,
            category: 'CATEGORY_VISITORS',
            question: 'Any visitors on site?',
            required: true
          },
          questionId: 376501,
          answer: 'NO',
          teamId: 2
        },
        {
          type: 'ReportAnswer',
          id: 4733532,
          createdTimestamp: 1519263177000,
          updatedTimestamp: 1519263208000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376502,
            tag: 4,
            category: 'CATEGORY_DELAYS',
            question: "Any areas that can't be worked on?",
            required: true
          },
          questionId: 376502,
          answer: 'NO',
          teamId: 2
        }
      ],
      insights: {
        workersToday: 3,
        hoursToday: 0.0
      },
      pdfs: {
        daily:
          'https://phase2.rakenapp.com//projects/reports/a-new-project_2018-02-23_b431e7250f4d6c73.pdf'
      }
    },
    {
      type: 'Report',
      id: 646310,
      project: {
        type: 'Project',
        id: 2
      },
      status: 'COMPLETED',
      date: '2018-02-22',
      workLogs: [
        {
          type: 'Worklog',
          id: 4483854,
          createdTimestamp: 1519263137000,
          createdBy: 28425,
          workDesc:
            'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.',
          workerCount: 3,
          totalHours: 0.75,
          subcontractor: 'A New WorkLog',
          hours: 0.25
        }
      ],
      notes: [
        {
          type: 'Note',
          id: 653465,
          createdTimestamp: 1519263145000,
          createdBy: 28425,
          category: 'NOTES',
          comment:
            'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia bibendum nulla sed consectetur. Vestibulum id ligula porta felis euismod semper. Sed posuere consectetur est at lobortis. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.'
        }
      ],
      tasks: [
        {
          type: 'Task',
          id: 231791,
          createdTimestamp: 1519256256000,
          updatedTimestamp: 1519332444000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Nullam quis risus eget urna mollis ornare vel eu leo. Vestibulum id ligula porta felis euismod semper. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ',
          status: 'DELETED',
          dueDate: '2018-02-24',
          attachments: [
            {
              type: 'Media',
              id: 2022256,
              createdTimestamp: 1519256937000,
              createdBy: 28425,
              fileName: 'project-1.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/197932c3-eb36-4ec0-9828-343f4afcc0e8',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/197932c3-eb36-4ec0-9828-343f4afcc0e8_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 210139,
              uploadDate: 1519256937000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022257,
              createdTimestamp: 1519256945000,
              createdBy: 28425,
              fileName: 'project-3.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/853a590e-cb41-4fe1-8b6d-01a3d6533047',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/853a590e-cb41-4fe1-8b6d-01a3d6533047_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 119984,
              uploadDate: 1519256944000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022258,
              createdTimestamp: 1519256949000,
              createdBy: 28425,
              fileName: 'project-8.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/4917d0b3-9501-434e-8a4b-499277e47bc2',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/4917d0b3-9501-434e-8a4b-499277e47bc2_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 217161,
              uploadDate: 1519256949000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022661,
              createdTimestamp: 1519291724000,
              createdBy: 28425,
              fileName: 'project-6.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7327bb5c-2cf8-44a2-a182-fb51869f7d47',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7327bb5c-2cf8-44a2-a182-fb51869f7d47_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 225199,
              uploadDate: 1519291723000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022662,
              createdTimestamp: 1519291724000,
              createdBy: 28425,
              fileName: 'project-7.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/98db3947-79d5-490c-a1a9-b1ca94471bdf',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/98db3947-79d5-490c-a1a9-b1ca94471bdf_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161177,
              uploadDate: 1519291723000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231797,
          createdTimestamp: 1519260927000,
          updatedTimestamp: 1519333368000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 39305,
            title: 'Other',
            firstName: 'User ',
            lastName: 'Two',
            email: 'testing@nickryall.com.au',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
          status: 'DELETED',
          dueDate: '2018-02-16',
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231798,
          createdTimestamp: 1519261029000,
          updatedTimestamp: 1519291898000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 39305,
            title: 'Other',
            firstName: 'User ',
            lastName: 'Two',
            email: 'testing@nickryall.com.au',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
          status: 'OPEN',
          dueDate: '2018-03-23',
          attachments: [
            {
              type: 'Media',
              id: 2022663,
              createdTimestamp: 1519291872000,
              createdBy: 28425,
              fileName: 'project-11.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6f54b462-e82a-44f5-a909-0608ba085933',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6f54b462-e82a-44f5-a909-0608ba085933_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 174697,
              uploadDate: 1519291871000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022664,
              createdTimestamp: 1519291872000,
              createdBy: 28425,
              fileName: 'project-12.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/615c5de2-69f2-40a3-8b17-91f33e96beb3',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/615c5de2-69f2-40a3-8b17-91f33e96beb3_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 186278,
              uploadDate: 1519291871000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022665,
              createdTimestamp: 1519291873000,
              createdBy: 28425,
              fileName: 'project-16.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/d33f0611-8b72-4dc8-8dae-d818f643bb06',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/d33f0611-8b72-4dc8-8dae-d818f643bb06_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 116626,
              uploadDate: 1519291873000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231896,
          createdTimestamp: 1519331645000,
          updatedTimestamp: 1519333286000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc: 'Item',
          status: 'DELETED',
          dueDate: '2018-02-15',
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231897,
          createdTimestamp: 1519332942000,
          updatedTimestamp: 1519340295000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. ',
          status: 'DELETED',
          dueDate: '2018-05-18',
          attachments: [
            {
              type: 'Media',
              id: 2022666,
              createdTimestamp: 1519332943000,
              createdBy: 28425,
              fileName: 'project-5.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/87ef252f-3126-4e3a-95be-a1f9ed33249b',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/87ef252f-3126-4e3a-95be-a1f9ed33249b_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 150017,
              uploadDate: 1519332942000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022667,
              createdTimestamp: 1519332943000,
              createdBy: 28425,
              fileName: 'project-6.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/aa17ad25-a02b-40ad-8c68-877ad2424fa6',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/aa17ad25-a02b-40ad-8c68-877ad2424fa6_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 225199,
              uploadDate: 1519332942000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022668,
              createdTimestamp: 1519332943000,
              createdBy: 28425,
              fileName: 'project-7.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/3ef345ce-5a2a-43d0-8cde-43d3de5dc0f2',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/3ef345ce-5a2a-43d0-8cde-43d3de5dc0f2_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161177,
              uploadDate: 1519332943000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231898,
          createdTimestamp: 1519333152000,
          updatedTimestamp: 1519333239000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Curabitur blandit tempus porttitor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Sed posuere consectetur est at lobortis. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus porttitor.',
          status: 'DELETED',
          dueDate: '2018-02-22',
          attachments: [
            {
              type: 'Media',
              id: 2022669,
              createdTimestamp: 1519333155000,
              createdBy: 28425,
              fileName: 'project-1.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/0c6969c1-eac1-4d5e-aa22-ff180f67242c',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/0c6969c1-eac1-4d5e-aa22-ff180f67242c_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 210139,
              uploadDate: 1519333154000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022670,
              createdTimestamp: 1519333155000,
              createdBy: 28425,
              fileName: 'project-2.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/4087b294-a985-4f85-974b-f9e2807c4500',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/4087b294-a985-4f85-974b-f9e2807c4500_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 211345,
              uploadDate: 1519333154000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022671,
              createdTimestamp: 1519333155000,
              createdBy: 28425,
              fileName: 'project-3.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/36ef0145-9dc5-4a7e-ad69-339abba2f901',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/36ef0145-9dc5-4a7e-ad69-339abba2f901_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 119984,
              uploadDate: 1519333155000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022672,
              createdTimestamp: 1519333155000,
              createdBy: 28425,
              fileName: 'project-4.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/427d6856-e4c8-46b0-8a48-0fcf157977d8',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/427d6856-e4c8-46b0-8a48-0fcf157977d8_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 112407,
              uploadDate: 1519333155000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022673,
              createdTimestamp: 1519333160000,
              createdBy: 28425,
              fileName: 'project-5.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/921ed1e0-e2a1-42d4-acf7-aeb5e163ad65',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/921ed1e0-e2a1-42d4-acf7-aeb5e163ad65_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 150017,
              uploadDate: 1519333159000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022674,
              createdTimestamp: 1519333160000,
              createdBy: 28425,
              fileName: 'project-6.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/595e9f08-0f9b-49b1-92f1-06ab7fe05a35',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/595e9f08-0f9b-49b1-92f1-06ab7fe05a35_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 225199,
              uploadDate: 1519333160000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022675,
              createdTimestamp: 1519333166000,
              createdBy: 28425,
              fileName: 'project-7.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6522dea8-740b-4239-bb01-c2a6b72eabab',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6522dea8-740b-4239-bb01-c2a6b72eabab_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161177,
              uploadDate: 1519333165000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022676,
              createdTimestamp: 1519333170000,
              createdBy: 28425,
              fileName: 'project-9.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/d62f3c9e-8e2a-438d-bbe7-d9e0c5cf6565',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/d62f3c9e-8e2a-438d-bbe7-d9e0c5cf6565_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161064,
              uploadDate: 1519333169000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022677,
              createdTimestamp: 1519333170000,
              createdBy: 28425,
              fileName: 'project-8.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/67decbf5-5336-4d88-970e-b42023f9850d',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/67decbf5-5336-4d88-970e-b42023f9850d_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 217161,
              uploadDate: 1519333169000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231899,
          createdTimestamp: 1519333390000,
          updatedTimestamp: 1519339854000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 39305,
            title: 'Other',
            firstName: 'User ',
            lastName: 'Two',
            email: 'testing@nickryall.com.au',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
          status: 'COMPLETED',
          dueDate: '2018-02-22',
          attachments: [
            {
              type: 'Media',
              id: 2022678,
              createdTimestamp: 1519333391000,
              createdBy: 28425,
              fileName: 'project-11.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7619b5fe-4c50-4948-becf-785e44c7fbcc',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7619b5fe-4c50-4948-becf-785e44c7fbcc_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 174697,
              uploadDate: 1519333391000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022679,
              createdTimestamp: 1519333391000,
              createdBy: 28425,
              fileName: 'project-12.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/79deaa6d-fc9a-46c9-b9db-ec2d44fddaa1',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/79deaa6d-fc9a-46c9-b9db-ec2d44fddaa1_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 186278,
              uploadDate: 1519333391000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022680,
              createdTimestamp: 1519333394000,
              createdBy: 28425,
              fileName: 'project-14.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/822c834e-7b43-4a11-96b5-6dbca9439a61',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/822c834e-7b43-4a11-96b5-6dbca9439a61_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 103716,
              uploadDate: 1519333394000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022681,
              createdTimestamp: 1519333395000,
              createdBy: 28425,
              fileName: 'project-13.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/25e1d1d0-19ee-4da7-be14-207bde2e146f',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/25e1d1d0-19ee-4da7-be14-207bde2e146f_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 142862,
              uploadDate: 1519333394000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022682,
              createdTimestamp: 1519333397000,
              createdBy: 28425,
              fileName: 'project-15.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/37d929ae-8904-4d89-8c39-e60e020fef7b',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/37d929ae-8904-4d89-8c39-e60e020fef7b_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 159998,
              uploadDate: 1519333397000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231900,
          createdTimestamp: 1519333414000,
          updatedTimestamp: 1519338370000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 39305,
            title: 'Other',
            firstName: 'User ',
            lastName: 'Two',
            email: 'testing@nickryall.com.au',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
          status: 'COMPLETED',
          dueDate: '2018-02-22',
          attachments: [
            {
              type: 'Media',
              id: 2022683,
              createdTimestamp: 1519333416000,
              createdBy: 28425,
              fileName: 'project-14.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/32a330dd-b454-4eb0-97c8-2e272f31a89c',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/32a330dd-b454-4eb0-97c8-2e272f31a89c_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 103716,
              uploadDate: 1519333416000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022684,
              createdTimestamp: 1519333416000,
              createdBy: 28425,
              fileName: 'project-13.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/88c46731-c243-4c54-898c-35331f18e3ae',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/88c46731-c243-4c54-898c-35331f18e3ae_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 142862,
              uploadDate: 1519333416000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022685,
              createdTimestamp: 1519333417000,
              createdBy: 28425,
              fileName: 'project-15.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/12e834ed-c9d2-4e09-b8ee-ef5410138d8b',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/12e834ed-c9d2-4e09-b8ee-ef5410138d8b_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 159998,
              uploadDate: 1519333416000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        },
        {
          type: 'Task',
          id: 231901,
          createdTimestamp: 1519333435000,
          updatedTimestamp: 1519342556000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 39305,
            title: 'Other',
            firstName: 'User ',
            lastName: 'Two',
            email: 'testing@nickryall.com.au',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc:
            'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
          status: 'COMPLETED',
          dueDate: '2018-02-22',
          attachments: [
            {
              type: 'Media',
              id: 2022686,
              createdTimestamp: 1519333438000,
              createdBy: 28425,
              fileName: 'project-3.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/93f6c149-d507-49cb-bdc3-d88f573fb39c',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/93f6c149-d507-49cb-bdc3-d88f573fb39c_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 119984,
              uploadDate: 1519333437000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022687,
              createdTimestamp: 1519333438000,
              createdBy: 28425,
              fileName: 'project-4.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/aac449cc-4f85-4d4e-8466-6dae568f06ff',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/aac449cc-4f85-4d4e-8466-6dae568f06ff_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 112407,
              uploadDate: 1519333437000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022688,
              createdTimestamp: 1519333442000,
              createdBy: 28425,
              fileName: 'project-5.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/a5dbbe16-f4ba-4e1b-a2ed-8e9f9f283d5f',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/a5dbbe16-f4ba-4e1b-a2ed-8e9f9f283d5f_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 150017,
              uploadDate: 1519333442000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022689,
              createdTimestamp: 1519333443000,
              createdBy: 28425,
              fileName: 'project-6.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7d725a18-0a03-4327-9dc9-32e2b5f2e99e',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7d725a18-0a03-4327-9dc9-32e2b5f2e99e_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 225199,
              uploadDate: 1519333443000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022690,
              createdTimestamp: 1519333448000,
              createdBy: 28425,
              fileName: 'project-7.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/3dbc69d3-95c6-4dac-8601-9908db50cdeb',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/3dbc69d3-95c6-4dac-8601-9908db50cdeb_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161177,
              uploadDate: 1519333447000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022691,
              createdTimestamp: 1519333449000,
              createdBy: 28425,
              fileName: 'project-8.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/48d95f41-f5ee-40d7-9854-cc16d7879eb2',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/48d95f41-f5ee-40d7-9854-cc16d7879eb2_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 217161,
              uploadDate: 1519333448000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022692,
              createdTimestamp: 1519333453000,
              createdBy: 28425,
              fileName: 'project-9.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/8a1532f6-8b5a-4ebd-89bb-d61bf959ec7d',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/8a1532f6-8b5a-4ebd-89bb-d61bf959ec7d_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 161064,
              uploadDate: 1519333452000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022693,
              createdTimestamp: 1519333454000,
              createdBy: 28425,
              fileName: 'project-10.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/e29f62d9-ef81-465b-b689-5297e2a91973',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/e29f62d9-ef81-465b-b689-5297e2a91973_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 202932,
              uploadDate: 1519333454000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022694,
              createdTimestamp: 1519333459000,
              createdBy: 28425,
              fileName: 'project-11.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/70ceb4b0-3b76-483b-a1aa-533e99e9e934',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/70ceb4b0-3b76-483b-a1aa-533e99e9e934_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 174697,
              uploadDate: 1519333458000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022695,
              createdTimestamp: 1519333459000,
              createdBy: 28425,
              fileName: 'project-12.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6c48fb65-38d7-43e7-8338-f5b6f6b1cf32',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/6c48fb65-38d7-43e7-8338-f5b6f6b1cf32_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 186278,
              uploadDate: 1519333459000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022696,
              createdTimestamp: 1519333463000,
              createdBy: 28425,
              fileName: 'project-13.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/9bb6dcf4-c7f4-4845-b5aa-4c3018dd71ec',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/9bb6dcf4-c7f4-4845-b5aa-4c3018dd71ec_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 142862,
              uploadDate: 1519333462000,
              takenDate: 1515699363000
            },
            {
              type: 'Media',
              id: 2022697,
              createdTimestamp: 1519333463000,
              createdBy: 28425,
              fileName: 'project-14.png',
              mediaType: 'IMAGE',
              contentUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7cbd136e-f1c2-4387-8179-484eb221801f',
              thumbUrl:
                'https://s3.amazonaws.com/raken-dev/2018/02/7cbd136e-f1c2-4387-8179-484eb221801f_thumb.png',
              contentType: 'image/png',
              etag: 'image/png',
              fileSize: 103716,
              uploadDate: 1519333462000,
              takenDate: 1515699363000
            }
          ],
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        }
      ],
      insights: {
        workersToday: 3,
        hoursToday: 0.75
      },
      pdfs: {
        daily:
          'https://phase2.rakenapp.com//projects/reports/a-new-project_2018-02-22_2b0cb173c8761bf6.pdf'
      }
    },
    {
      type: 'Report',
      id: 646345,
      project: {
        type: 'Project',
        id: 2
      },
      status: 'UNSIGNED',
      date: '2018-02-21',
      notes: [
        {
          type: 'Note',
          id: 653567,
          createdTimestamp: 1519329889000,
          createdBy: 28425,
          category: 'SAFETY',
          comment:
            'Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.'
        }
      ],
      tasks: [
        {
          type: 'Task',
          id: 231793,
          createdTimestamp: 1519259893000,
          updatedTimestamp: 1519261053000,
          createdBy: 28425,
          assignee: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          },
          projectTeam: {
            type: 'ProjectTeam',
            id: 2,
            createdTimestamp: 1519256168000,
            updatedTimestamp: 1519503634000,
            updatedBy: 28425,
            projectTeamType: 'GENERAL_CONTRACTOR',
            projectState: 'ACTIVE',
            startDate: '2018-02-22'
          },
          desc: 'Curabitur blandit tempus porttitor. Donec sed odio dui.',
          status: 'DELETED',
          dueDate: '2018-03-29',
          creator: {
            type: 'User',
            id: 28425,
            firstName: 'Nick',
            lastName: 'Ryall',
            email: 'nick@rakenapp.com',
            phone: '(021) 552-497 '
          }
        }
      ],
      insights: {
        workersToday: 0,
        hoursToday: 0.0
      },
      pdfs: {
        daily:
          'https://phase2.rakenapp.com//projects/reports/a-new-project_2018-02-21_e1b9efc74d373ff0.pdf'
      }
    },
    {
      type: 'Report',
      id: 646346,
      project: {
        type: 'Project',
        id: 2
      },
      status: 'UNSIGNED',
      date: '2018-02-20',
      workLogs: [
        {
          type: 'Worklog',
          id: 4483992,
          createdTimestamp: 1519334062000,
          createdBy: 28425,
          workDesc:
            'Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. ',
          workerCount: 3,
          totalHours: 2.25,
          subcontractor: 'Rodney Dangerfield',
          hours: 0.75
        }
      ],
      answers: [
        {
          type: 'ReportAnswer',
          id: 4733672,
          createdTimestamp: 1519334034000,
          updatedTimestamp: 1519334070000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376498,
            tag: 0,
            category: 'CATEGORY_SAFETY',
            question: 'Any accidents on site today?',
            required: true
          },
          questionId: 376498,
          answer: 'YES'
        },
        {
          type: 'ReportAnswer',
          id: 4733673,
          createdTimestamp: 1519334034000,
          updatedTimestamp: 1519334070000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376499,
            tag: 1,
            category: 'CATEGORY_DELAYS',
            question: 'Any schedule delays occur?',
            required: true
          },
          questionId: 376499,
          answer: 'YES'
        },
        {
          type: 'ReportAnswer',
          id: 4733674,
          createdTimestamp: 1519334034000,
          updatedTimestamp: 1519334070000,
          updatedBy: 28425,
          createdBy: 28425,
          question: {
            type: 'ReportQuestion',
            id: 376500,
            tag: 2,
            category: 'CATEGORY_DELAYS_WEATHER',
            question: 'Did weather cause any delays?',
            required: true
          },
          questionId: 376500,
          answer: 'YES'
        }
      ],
      attachments: [
        {
          type: 'Media',
          id: 2022698,
          createdTimestamp: 1519334094000,
          createdBy: 28425,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8f0af4f1-e294-4750-b8cb-280d6f4e6f87',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8f0af4f1-e294-4750-b8cb-280d6f4e6f87_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 217161,
          uploadDate: 1519334094000,
          takenDate: 1515699363000
        },
        {
          type: 'Media',
          id: 2022699,
          createdTimestamp: 1519334096000,
          createdBy: 28425,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/1bb3674d-dffa-4bd2-b000-f3eafb2d8e27',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/1bb3674d-dffa-4bd2-b000-f3eafb2d8e27_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 202932,
          uploadDate: 1519334096000,
          takenDate: 1515699363000
        },
        {
          type: 'Media',
          id: 2022700,
          createdTimestamp: 1519334097000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/85e38fb6-a922-46eb-b9b7-b63290d06126',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/85e38fb6-a922-46eb-b9b7-b63290d06126_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519334097000,
          takenDate: 1515699363000
        },
        {
          type: 'Media',
          id: 2022701,
          createdTimestamp: 1519334102000,
          createdBy: 28425,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/d9c8f1d0-2eaa-463e-8b4e-66886ea83ee9',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/d9c8f1d0-2eaa-463e-8b4e-66886ea83ee9_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 186278,
          uploadDate: 1519334102000,
          takenDate: 1515699363000
        },
        {
          type: 'Media',
          id: 2022702,
          createdTimestamp: 1519334105000,
          createdBy: 28425,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/28607ab0-742d-4104-b93a-25707c3421ea',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/28607ab0-742d-4104-b93a-25707c3421ea_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161064,
          uploadDate: 1519334105000,
          takenDate: 1515699363000
        },
        {
          type: 'Media',
          id: 2022703,
          createdTimestamp: 1519334109000,
          createdBy: 28425,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/2cef8b39-e5b1-4577-bf48-36289e6f8909',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/2cef8b39-e5b1-4577-bf48-36289e6f8909_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161177,
          uploadDate: 1519334109000,
          takenDate: 1515699363000
        }
      ],
      insights: {
        workersToday: 3,
        hoursToday: 2.25
      },
      pdfs: {
        daily:
          'https://phase2.rakenapp.com//projects/reports/a-new-project_2018-02-20_db46f465077478e4.pdf'
      }
    },
    {
      type: 'Report',
      id: 646347,
      project: {
        type: 'Project',
        id: 2
      },
      status: 'UNSIGNED',
      date: '2018-02-19',
      workLogs: [
        {
          type: 'Worklog',
          id: 4483993,
          createdTimestamp: 1519334233000,
          createdBy: 28425,
          workDesc:
            'Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.',
          workerCount: 3,
          totalHours: 0.0,
          subcontractor: 'JR',
          hours: 0.0
        }
      ],
      notes: [
        {
          type: 'Note',
          id: 653568,
          createdTimestamp: 1519334212000,
          createdBy: 28425,
          category: 'SAFETY',
          comment:
            'Donec ullamcorper nulla non metus auctor fringilla. Sed posuere consectetur est at lobortis. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.'
        }
      ],
      insights: {
        workersToday: 3,
        hoursToday: 0.0
      },
      pdfs: {
        daily:
          'https://phase2.rakenapp.com//projects/reports/a-new-project_2018-02-19_b33faebf2e7da26f.pdf'
      }
    }
  ]
};

const tasksData = {
  summary: {
    open: 8,
    completed: 4,
    deleted: 6
  },
  collection: [
    {
      id: 231792,
      createdTimestamp: 1519256638000,
      createdBy: 1,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc: 'Do Something',
      status: 'OPEN',
      dueDate: '2018-02-22',
      attachments: [
        {
          id: 2022259,
          createdTimestamp: 1519256970000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/391f8427-5924-49fb-bae0-ece9d9e6892f',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/391f8427-5924-49fb-bae0-ece9d9e6892f_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519256970000,
          takenDate: 1515699363000
        },
        {
          id: 2022260,
          createdTimestamp: 1519256986000,
          createdBy: 28425,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e4dcc7e5-6603-4331-8c3f-94c9c68ddbfe',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e4dcc7e5-6603-4331-8c3f-94c9c68ddbfe_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 116947,
          uploadDate: 1519256986000,
          takenDate: 1515699363000
        },
        {
          id: 2022656,
          createdTimestamp: 1519291428000,
          createdBy: 28425,
          fileName: '27356397_946808065457796_3248636085611993088_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/4b57c07f-488a-461c-bd83-4638a7f80f1b',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/4b57c07f-488a-461c-bd83-4638a7f80f1b_thumb.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 234962,
          uploadDate: 1519291427000,
          takenDate: 1517036531000
        },
        {
          id: 2022657,
          createdTimestamp: 1519291428000,
          createdBy: 28425,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/1d763c77-a139-4dcc-8492-83a2965c0313',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/1d763c77-a139-4dcc-8492-83a2965c0313_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 202932,
          uploadDate: 1519291427000,
          takenDate: 1515699363000
        },
        {
          id: 2022658,
          createdTimestamp: 1519291429000,
          createdBy: 28425,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/876baad9-59c0-4ba7-ba11-e69af876be23',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/876baad9-59c0-4ba7-ba11-e69af876be23_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 116626,
          uploadDate: 1519291428000,
          takenDate: 1515699363000
        },
        {
          id: 2022659,
          createdTimestamp: 1519291429000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/13e79cb8-09f1-47b7-a190-d16dde0bc0b1',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/13e79cb8-09f1-47b7-a190-d16dde0bc0b1_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519291429000,
          takenDate: 1515699363000
        },
        {
          id: 2022660,
          createdTimestamp: 1519291430000,
          createdBy: 28425,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/cb69702d-b8c6-4f3f-899a-60a873b02b83',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/cb69702d-b8c6-4f3f-899a-60a873b02b83_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 116947,
          uploadDate: 1519291430000,
          takenDate: 1515699363000
        },
        {
          id: 2034545,
          createdTimestamp: 1519416656000,
          createdBy: 28425,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/832d331c-966f-43b6-822b-47120d9fb102',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/832d331c-966f-43b6-822b-47120d9fb102_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 103716,
          uploadDate: 1519416655000,
          takenDate: 1515699363000
        },
        {
          id: 2034546,
          createdTimestamp: 1519418955000,
          createdBy: 28425,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/3d5fa9bc-dc71-4262-8cfd-06f0db9c420c',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/3d5fa9bc-dc71-4262-8cfd-06f0db9c420c_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 217161,
          uploadDate: 1519418954000,
          takenDate: 1515699363000
        },
        {
          id: 2034547,
          createdTimestamp: 1519452984000,
          createdBy: 28425,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8f6ad291-0e9f-4519-bfcc-36d443609ae3',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8f6ad291-0e9f-4519-bfcc-36d443609ae3_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 142862,
          uploadDate: 1519452984000,
          takenDate: 1515699363000
        },
        {
          id: 2034548,
          createdTimestamp: 1519589295000,
          createdBy: 28425,
          fileName: 'project.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/2fc8e0f8-5a8a-4934-92b6-6684b7e25d8f',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/2fc8e0f8-5a8a-4934-92b6-6684b7e25d8f_thumb.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 493323,
          uploadDate: 1519589294000,
          takenDate: 1519328623000
        }
      ],
      creator: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231796,
      createdTimestamp: 1519260634000,
      updatedTimestamp: 1519790167000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'thdrthdrthrth rthgrdth rsthesrhdrthrthrt Nullam quis risus eget urna mollis ornare vel eu leo. Curabitur blandit tempus porttitor. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Donec ullamcorper nulla non metus auctor fringilla.',
      status: 'COMPLETED',
      dueDate: '2018-02-14',
      attachments: [
        {
          id: 2034543,
          createdTimestamp: 1519416463000,
          createdBy: 28425,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/5c3693c9-ba69-46bf-8e57-6fddd9635a26',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/5c3693c9-ba69-46bf-8e57-6fddd9635a26_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 186278,
          uploadDate: 1519416463000,
          takenDate: 1515699363000
        },
        {
          id: 2034544,
          createdTimestamp: 1519416550000,
          createdBy: 28425,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e607e86a-98ec-433c-b84d-13a1225331dd',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e607e86a-98ec-433c-b84d-13a1225331dd_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 217161,
          uploadDate: 1519416550000,
          takenDate: 1515699363000
        },
        {
          id: 2070109,
          createdTimestamp: 1519630815000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519630815000
        },
        {
          id: 2081988,
          createdTimestamp: 1519680958000,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 174697,
          uploadDate: 1519680957000
        },
        {
          id: 2081989,
          createdTimestamp: 1519681105000,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 174697,
          uploadDate: 1519681105000
        },
        {
          id: 2081990,
          createdTimestamp: 1519682783000,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161064,
          uploadDate: 1519682782000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231798,
      createdTimestamp: 1519261029000,
      updatedTimestamp: 1519791486000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
      status: 'COMPLETED',
      dueDate: '2018-03-23',
      attachments: [
        {
          id: 2022663,
          createdTimestamp: 1519291872000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/6f54b462-e82a-44f5-a909-0608ba085933',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/6f54b462-e82a-44f5-a909-0608ba085933_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519291871000,
          takenDate: 1515699363000
        },
        {
          id: 2022664,
          createdTimestamp: 1519291872000,
          createdBy: 28425,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/615c5de2-69f2-40a3-8b17-91f33e96beb3',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/615c5de2-69f2-40a3-8b17-91f33e96beb3_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 186278,
          uploadDate: 1519291871000,
          takenDate: 1515699363000
        },
        {
          id: 2022665,
          createdTimestamp: 1519291873000,
          createdBy: 28425,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/d33f0611-8b72-4dc8-8dae-d818f643bb06',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/d33f0611-8b72-4dc8-8dae-d818f643bb06_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 116626,
          uploadDate: 1519291873000,
          takenDate: 1515699363000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231899,
      createdTimestamp: 1519333390000,
      updatedTimestamp: 1519793530000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.',
      status: 'OPEN',
      dueDate: '2018-02-22',
      attachments: [
        {
          id: 2022678,
          createdTimestamp: 1519333391000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7619b5fe-4c50-4948-becf-785e44c7fbcc',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7619b5fe-4c50-4948-becf-785e44c7fbcc_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519333391000,
          takenDate: 1515699363000
        },
        {
          id: 2022679,
          createdTimestamp: 1519333391000,
          createdBy: 28425,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/79deaa6d-fc9a-46c9-b9db-ec2d44fddaa1',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/79deaa6d-fc9a-46c9-b9db-ec2d44fddaa1_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 186278,
          uploadDate: 1519333391000,
          takenDate: 1515699363000
        },
        {
          id: 2022680,
          createdTimestamp: 1519333394000,
          createdBy: 28425,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/822c834e-7b43-4a11-96b5-6dbca9439a61',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/822c834e-7b43-4a11-96b5-6dbca9439a61_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 103716,
          uploadDate: 1519333394000,
          takenDate: 1515699363000
        },
        {
          id: 2022681,
          createdTimestamp: 1519333395000,
          createdBy: 28425,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/25e1d1d0-19ee-4da7-be14-207bde2e146f',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/25e1d1d0-19ee-4da7-be14-207bde2e146f_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 142862,
          uploadDate: 1519333394000,
          takenDate: 1515699363000
        },
        {
          id: 2022682,
          createdTimestamp: 1519333397000,
          createdBy: 28425,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/37d929ae-8904-4d89-8c39-e60e020fef7b',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/37d929ae-8904-4d89-8c39-e60e020fef7b_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 159998,
          uploadDate: 1519333397000,
          takenDate: 1515699363000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231900,
      createdTimestamp: 1519333414000,
      updatedTimestamp: 1519793525000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. ',
      status: 'COMPLETED',
      dueDate: '2018-02-22',
      attachments: [
        {
          id: 2022683,
          createdTimestamp: 1519333416000,
          createdBy: 28425,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/32a330dd-b454-4eb0-97c8-2e272f31a89c',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/32a330dd-b454-4eb0-97c8-2e272f31a89c_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 103716,
          uploadDate: 1519333416000,
          takenDate: 1515699363000
        },
        {
          id: 2022684,
          createdTimestamp: 1519333416000,
          createdBy: 28425,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/88c46731-c243-4c54-898c-35331f18e3ae',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/88c46731-c243-4c54-898c-35331f18e3ae_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 142862,
          uploadDate: 1519333416000,
          takenDate: 1515699363000
        },
        {
          id: 2022685,
          createdTimestamp: 1519333417000,
          createdBy: 28425,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/12e834ed-c9d2-4e09-b8ee-ef5410138d8b',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/12e834ed-c9d2-4e09-b8ee-ef5410138d8b_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 159998,
          uploadDate: 1519333416000,
          takenDate: 1515699363000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231901,
      createdTimestamp: 1519333435000,
      updatedTimestamp: 1519793839000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      status: 'OPEN',
      dueDate: '2018-02-22',
      attachments: [
        {
          id: 2022686,
          createdTimestamp: 1519333438000,
          createdBy: 28425,
          fileName: 'project-3.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/93f6c149-d507-49cb-bdc3-d88f573fb39c',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/93f6c149-d507-49cb-bdc3-d88f573fb39c_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 119984,
          uploadDate: 1519333437000,
          takenDate: 1515699363000
        },
        {
          id: 2022687,
          createdTimestamp: 1519333438000,
          createdBy: 28425,
          fileName: 'project-4.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/aac449cc-4f85-4d4e-8466-6dae568f06ff',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/aac449cc-4f85-4d4e-8466-6dae568f06ff_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 112407,
          uploadDate: 1519333437000,
          takenDate: 1515699363000
        },
        {
          id: 2022688,
          createdTimestamp: 1519333442000,
          createdBy: 28425,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/a5dbbe16-f4ba-4e1b-a2ed-8e9f9f283d5f',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/a5dbbe16-f4ba-4e1b-a2ed-8e9f9f283d5f_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 150017,
          uploadDate: 1519333442000,
          takenDate: 1515699363000
        },
        {
          id: 2022689,
          createdTimestamp: 1519333443000,
          createdBy: 28425,
          fileName: 'project-6.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7d725a18-0a03-4327-9dc9-32e2b5f2e99e',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7d725a18-0a03-4327-9dc9-32e2b5f2e99e_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 225199,
          uploadDate: 1519333443000,
          takenDate: 1515699363000
        },
        {
          id: 2022690,
          createdTimestamp: 1519333448000,
          createdBy: 28425,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/3dbc69d3-95c6-4dac-8601-9908db50cdeb',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/3dbc69d3-95c6-4dac-8601-9908db50cdeb_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161177,
          uploadDate: 1519333447000,
          takenDate: 1515699363000
        },
        {
          id: 2022691,
          createdTimestamp: 1519333449000,
          createdBy: 28425,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/48d95f41-f5ee-40d7-9854-cc16d7879eb2',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/48d95f41-f5ee-40d7-9854-cc16d7879eb2_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 217161,
          uploadDate: 1519333448000,
          takenDate: 1515699363000
        },
        {
          id: 2022692,
          createdTimestamp: 1519333453000,
          createdBy: 28425,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8a1532f6-8b5a-4ebd-89bb-d61bf959ec7d',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/8a1532f6-8b5a-4ebd-89bb-d61bf959ec7d_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161064,
          uploadDate: 1519333452000,
          takenDate: 1515699363000
        },
        {
          id: 2022693,
          createdTimestamp: 1519333454000,
          createdBy: 28425,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e29f62d9-ef81-465b-b689-5297e2a91973',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/e29f62d9-ef81-465b-b689-5297e2a91973_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 202932,
          uploadDate: 1519333454000,
          takenDate: 1515699363000
        },
        {
          id: 2022694,
          createdTimestamp: 1519333459000,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/70ceb4b0-3b76-483b-a1aa-533e99e9e934',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/70ceb4b0-3b76-483b-a1aa-533e99e9e934_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1519333458000,
          takenDate: 1515699363000
        },
        {
          id: 2022695,
          createdTimestamp: 1519333459000,
          createdBy: 28425,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/6c48fb65-38d7-43e7-8338-f5b6f6b1cf32',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/6c48fb65-38d7-43e7-8338-f5b6f6b1cf32_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 186278,
          uploadDate: 1519333459000,
          takenDate: 1515699363000
        },
        {
          id: 2022696,
          createdTimestamp: 1519333463000,
          createdBy: 28425,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/9bb6dcf4-c7f4-4845-b5aa-4c3018dd71ec',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/9bb6dcf4-c7f4-4845-b5aa-4c3018dd71ec_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 142862,
          uploadDate: 1519333462000,
          takenDate: 1515699363000
        },
        {
          id: 2022697,
          createdTimestamp: 1519333463000,
          createdBy: 28425,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7cbd136e-f1c2-4387-8179-484eb221801f',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/7cbd136e-f1c2-4387-8179-484eb221801f_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 103716,
          uploadDate: 1519333462000,
          takenDate: 1515699363000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231902,
      createdTimestamp: 1519339891000,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Curabitur blandit tempus porttitor. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. Curabitur blandit tempus porttitor. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
      status: 'OPEN',
      dueDate: '2018-02-14',
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 231903,
      createdTimestamp: 1519340098000,
      updatedTimestamp: 1519790514000,
      updatedBy: 28425,
      createdBy: 28425,
      assignee: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Etiam porta sem malesuada magna mollis euismod. ',
      status: 'COMPLETED',
      dueDate: '2018-02-07',
      attachments: [
        {
          id: 2070105,
          createdTimestamp: 1519630228000,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 202932,
          uploadDate: 1519630228000
        },
        {
          id: 2070107,
          createdTimestamp: 1519630643000,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/sample_project2513660425531102369.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/sample_project5850339161677215457_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 103716,
          uploadDate: 1519630642000
        },
        {
          id: 2070111,
          createdTimestamp: 1519633108000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519633107000
        },
        {
          id: 2070112,
          createdTimestamp: 1519633122000,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116626,
          uploadDate: 1519633122000
        },
        {
          id: 2070113,
          createdTimestamp: 1519633186000,
          fileName: '27356397_946808065457796_3248636085611993088_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note18733947097530721252.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note14870073127328902750_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 234962,
          uploadDate: 1519633185000
        },
        {
          id: 2075655,
          createdTimestamp: 1519634641000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519634641000
        },
        {
          id: 2077523,
          createdTimestamp: 1519634851000,
          fileName: 'project-1.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/2of4330114095889975124.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/2of48981664494261231160_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 210139,
          uploadDate: 1519634850000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 234801,
      createdTimestamp: 1519357332000,
      updatedTimestamp: 1519456464000,
      createdBy: 28425,
      assignee: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      status: 'OPEN',
      dueDate: '2018-02-28',
      attachments: [
        {
          id: 2070099,
          createdTimestamp: 1519628626000,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 103716,
          uploadDate: 1519628626000
        },
        {
          id: 2070100,
          createdTimestamp: 1519628627000,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note18733947097530721252.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note14870073127328902750_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 186278,
          uploadDate: 1519628626000
        },
        {
          id: 2070101,
          createdTimestamp: 1519628627000,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 142862,
          uploadDate: 1519628626000
        },
        {
          id: 2070102,
          createdTimestamp: 1519628658000,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note36203895636269515783.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note37394333796173285710_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116626,
          uploadDate: 1519628658000
        },
        {
          id: 2070103,
          createdTimestamp: 1519628685000,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116947,
          uploadDate: 1519628684000
        },
        {
          id: 2070104,
          createdTimestamp: 1519629461000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_27513590827971964555.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_24279985981259047024_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519629460000
        },
        {
          id: 2070106,
          createdTimestamp: 1519630502000,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 150017,
          uploadDate: 1519630502000
        },
        {
          id: 2070108,
          createdTimestamp: 1519630748000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_18296360811545794461.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_1170218693028856066_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519630748000
        },
        {
          id: 2070110,
          createdTimestamp: 1519632293000,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_18296360811545794461.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_1170218693028856066_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 217161,
          uploadDate: 1519632293000
        },
        {
          id: 2081970,
          createdTimestamp: 1519635375000,
          fileName: '27355631_946807742124495_4965316223629530571_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 243633,
          uploadDate: 1519635375000
        },
        {
          id: 2081971,
          createdTimestamp: 1519678894000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/2of4330114095889975124.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/2of48981664494261231160_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519678893000
        },
        {
          id: 2081972,
          createdTimestamp: 1519678911000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note36203895636269515783.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note37394333796173285710_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519678911000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 234802,
      createdTimestamp: 1519584610000,
      updatedTimestamp: 1519713056000,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc:
        'Cras mattis consectetur purus sit amet fermentum. Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Maecenas faucibus mollis interdum.',
      status: 'OPEN',
      dueDate: '2018-02-14',
      attachments: [
        {
          id: 2081979,
          createdTimestamp: 1519679808000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519679807000
        },
        {
          id: 2081980,
          createdTimestamp: 1519679808000,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/2of4330114095889975124.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/2of48981664494261231160_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161064,
          uploadDate: 1519679807000
        },
        {
          id: 2081981,
          createdTimestamp: 1519679808000,
          fileName: 'project-1.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 210139,
          uploadDate: 1519679808000
        },
        {
          id: 2081982,
          createdTimestamp: 1519679808000,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/3of4906770848267608849.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/3of46524640087418067237_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 217161,
          uploadDate: 1519679808000
        },
        {
          id: 2081983,
          createdTimestamp: 1519679809000,
          fileName: '27355631_946807742124495_4965316223629530571_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_31405889427230014606.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 243633,
          uploadDate: 1519679808000
        },
        {
          id: 2081984,
          createdTimestamp: 1519679809000,
          fileName: '27356397_946808065457796_3248636085611993088_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 234962,
          uploadDate: 1519679808000
        },
        {
          id: 2081985,
          createdTimestamp: 1519679810000,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/sample_project2513660425531102369.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/sample_project5850339161677215457_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116626,
          uploadDate: 1519679809000
        },
        {
          id: 2081986,
          createdTimestamp: 1519679810000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519679809000
        },
        {
          id: 2081987,
          createdTimestamp: 1519679810000,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note18733947097530721252.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note14870073127328902750_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116947,
          uploadDate: 1519679809000
        },
        {
          id: 2116683,
          createdTimestamp: 1519713035000,
          fileName: 'project-2.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-5_13787907808943212979.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-5_1903361965090704416_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 293175,
          uploadDate: 1519713034000
        },
        {
          id: 2116684,
          createdTimestamp: 1519716687000,
          createdBy: 28425,
          fileName:
            'Hays CV - Paul Bickerstaff - DevOps Lead Engineer at Raken.pdf',
          mediaType: 'DOCUMENT',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/9c9cf5d5-198d-4eab-b4a9-c20edbd113bc',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/9c9cf5d5-198d-4eab-b4a9-c20edbd113bc_thumb.jpg',
          contentType: 'application/pdf',
          etag: 'application/pdf',
          fileSize: 525333,
          uploadDate: 1519716687000,
          takenDate: 1518412902000
        },
        {
          id: 2116685,
          createdTimestamp: 1519716691000,
          createdBy: 28425,
          fileName:
            'Hays CV - Paul Bickerstaff - DevOps Lead Engineer at Raken.pdf',
          mediaType: 'DOCUMENT',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/840204c2-eb5c-4fda-8698-ea1a0fe942e3',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/840204c2-eb5c-4fda-8698-ea1a0fe942e3_thumb.jpg',
          contentType: 'application/pdf',
          etag: 'application/pdf',
          fileSize: 525333,
          uploadDate: 1519716691000,
          takenDate: 1518412902000
        },
        {
          id: 2116686,
          createdTimestamp: 1519716699000,
          createdBy: 28425,
          fileName: 'Comspek_Lisett_Edstrom_Raken.pdf',
          mediaType: 'DOCUMENT',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/abcedb0f-7ec8-4fda-9574-0de9ddd095e5',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/02/abcedb0f-7ec8-4fda-9574-0de9ddd095e5_thumb.jpg',
          contentType: 'application/pdf',
          etag: 'application/pdf',
          fileSize: 96638,
          uploadDate: 1519716699000,
          takenDate: 1518034211000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 243561,
      createdTimestamp: 1519629017000,
      createdBy: 28425,
      assignee: {
        id: 1,
        title: 'Other',
        firstName: 'User ',
        lastName: 'Two',
        email: 'testing@nickryall.com.au',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc: 'huuyuiyuiyiuyiu',
      status: 'OPEN',
      dueDate: '2018-02-09',
      attachments: [
        {
          id: 2081973,
          createdTimestamp: 1519679787000,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/3of4906770848267608849.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/3of46524640087418067237_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161064,
          uploadDate: 1519679787000
        },
        {
          id: 2081974,
          createdTimestamp: 1519679787000,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 174697,
          uploadDate: 1519679787000
        },
        {
          id: 2081975,
          createdTimestamp: 1519679787000,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/sample_project2513660425531102369.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/sample_project5850339161677215457_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 186278,
          uploadDate: 1519679787000
        },
        {
          id: 2081976,
          createdTimestamp: 1519679787000,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 217161,
          uploadDate: 1519679787000
        },
        {
          id: 2081977,
          createdTimestamp: 1519679787000,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 142862,
          uploadDate: 1519679787000
        },
        {
          id: 2081978,
          createdTimestamp: 1519679788000,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 202932,
          uploadDate: 1519679787000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    },
    {
      id: 246459,
      createdTimestamp: 1519682920000,
      createdBy: 28425,
      assignee: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      },
      projectTeam: {
        id: 2,
        createdTimestamp: 1519256168000,
        updatedTimestamp: 1519684273000,
        updatedBy: 28425,
        projectTeamType: 'GENERAL_CONTRACTOR',
        projectState: 'ACTIVE',
        startDate: '2018-02-22'
      },
      desc: 'A New Task',
      status: 'OPEN',
      dueDate: '2018-02-15',
      attachments: [
        {
          id: 2081991,
          createdTimestamp: 1519682929000,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_27513590827971964555.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_24279985981259047024_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 142862,
          uploadDate: 1519682928000
        },
        {
          id: 2081992,
          createdTimestamp: 1519682936000,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116626,
          uploadDate: 1519682935000
        },
        {
          id: 2081993,
          createdTimestamp: 1519682945000,
          fileName: 'project-16.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_31405889427230014606.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116626,
          uploadDate: 1519682945000
        },
        {
          id: 2081994,
          createdTimestamp: 1519682986000,
          fileName: 'project-14.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 103716,
          uploadDate: 1519682985000
        },
        {
          id: 2081995,
          createdTimestamp: 1519683069000,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note18733947097530721252.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note14870073127328902750_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116947,
          uploadDate: 1519683068000
        },
        {
          id: 2081996,
          createdTimestamp: 1519683078000,
          fileName: 'project-17.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_27513590827971964555.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_24279985981259047024_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 116947,
          uploadDate: 1519683078000
        },
        {
          id: 2081997,
          createdTimestamp: 1519683094000,
          fileName: 'project-1.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 210139,
          uploadDate: 1519683093000
        },
        {
          id: 2081998,
          createdTimestamp: 1519683399000,
          fileName: '27356397_946808065457796_3248636085611993088_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note36203895636269515783.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note37394333796173285710_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 234962,
          uploadDate: 1519683398000
        },
        {
          id: 2081999,
          createdTimestamp: 1519683498000,
          fileName: 'project-6.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/2of4330114095889975124.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/2of48981664494261231160_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 225199,
          uploadDate: 1519683498000
        },
        {
          id: 2082000,
          createdTimestamp: 1519683499000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519683498000
        },
        {
          id: 2082001,
          createdTimestamp: 1519683499000,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note36203895636269515783.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note37394333796173285710_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 217161,
          uploadDate: 1519683499000
        },
        {
          id: 2082002,
          createdTimestamp: 1519683500000,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 202932,
          uploadDate: 1519683499000
        },
        {
          id: 2082003,
          createdTimestamp: 1519683500000,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_31405889427230014606.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 150017,
          uploadDate: 1519683500000
        },
        {
          id: 2082004,
          createdTimestamp: 1519683501000,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 174697,
          uploadDate: 1519683501000
        },
        {
          id: 2082005,
          createdTimestamp: 1519683502000,
          fileName: 'project-12.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 186278,
          uploadDate: 1519683502000
        },
        {
          id: 2082006,
          createdTimestamp: 1519683503000,
          fileName: 'project-13.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 142862,
          uploadDate: 1519683502000
        },
        {
          id: 2082007,
          createdTimestamp: 1519683505000,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_31405889427230014606.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161064,
          uploadDate: 1519683504000
        },
        {
          id: 2116679,
          createdTimestamp: 1519698248000,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_27513590827971964555.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_24279985981259047024_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 161177,
          uploadDate: 1519698247000
        },
        {
          id: 2116680,
          createdTimestamp: 1519698266000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519698266000
        },
        {
          id: 2116681,
          createdTimestamp: 1519698447000,
          fileName: 'project-15.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 159998,
          uploadDate: 1519698446000
        },
        {
          id: 2116682,
          createdTimestamp: 1519698843000,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 202932,
          uploadDate: 1519698842000
        },
        {
          id: 2116687,
          createdTimestamp: 1519763032000,
          fileName: 'Screen Shot 2018-02-21 at 7.45.21 AM.png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/2of4330114095889975124.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/2of48981664494261231160_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 570149,
          uploadDate: 1519763031000
        },
        {
          id: 2128688,
          createdTimestamp: 1519782142000,
          fileName: 'Screen Shot 2018-02-16 at 11.08.29 AM (2).png',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/4of46556216477715952641.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/4of44712337837978741276_200x200.jpg',
          contentType: 'image/x-png',
          etag: 'image/x-png',
          fileSize: 590384,
          uploadDate: 1519782142000
        },
        {
          id: 2140662,
          createdTimestamp: 1519792024000,
          createdBy: 28425,
          fileName: '27356397_946808065457796_3248636085611993088_o.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 234962,
          uploadDate: 1519792023000
        }
      ],
      creator: {
        id: 28425,
        firstName: 'Nick',
        lastName: 'Ryall',
        email: 'nick@rakenapp.com',
        phone: '(021) 552-497 '
      }
    }
  ]
};

const workLogsData = {
  collection: [
    {
      type: 'StandardWorklog',
      id: 5117697,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Bobs Building',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5117698,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Carpenters',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5117699,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Carpenters',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'PersonWorklog',
      id: 5647210,
      createdTimestamp: 1525835370000,
      updatedTimestamp: 1526268153000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'My Description',
      workerCount: 1,
      totalHours: 23.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 916123,
        worker: {
          type: 'Worker',
          id: 459787,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'Jane',
          lastName: 'Eyre',
          projectId: 83711,
          employeeId: '12345'
        },
        classification: {
          type: 'Classification',
          id: 81546,
          name: 'Superintendent',
          status: 'DELETED'
        },
        costCodes: [
          {
            type: 'TimeCostCode',
            id: 1126943,
            costCode: {
              type: 'CostCode',
              id: 322488,
              division: 'Heavy',
              code: '1200',
              description: 'Meta'
            },
            regularTime: 8.0,
            overTime: 4.0,
            doubleTime: 11.0
          }
        ],
        regularTime: 8.0,
        overTime: 4.0,
        doubleTime: 11.0,
        split: true,
        totalHours: 23.0
      }
    },
    {
      type: 'PersonWorklog',
      id: 5647211,
      createdTimestamp: 1525843132000,
      updatedTimestamp: 1526264817000,
      updatedBy: 28425,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 916143,
        worker: {
          type: 'Worker',
          id: 258371,
          workerType: 'PERSON',
          status: 'DELETED',
          firstName: 'John',
          lastName: 'Ryall',
          classificationId: 1129648,
          classificationName: 'My Classification'
        },
        classification: {
          type: 'Classification',
          id: 93625,
          name: 'Project Engineer',
          status: 'DELETED'
        },
        costCodes: [
          {
            type: 'TimeCostCode',
            id: 1121691,
            costCode: {
              type: 'CostCode',
              id: 202308,
              division: 'Another Onw',
              code: '1234',
              description: 'rtdhdrthr'
            },
            regularTime: 0.0,
            overTime: 0.0,
            doubleTime: 0.0
          }
        ],
        regularTime: 0.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: true,
        totalHours: 0.0
      }
    },
    {
      type: 'StandardWorklog',
      id: 5117700,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'JR',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5123290,
      createdTimestamp: 1522904169000,
      updatedTimestamp: 1522904169000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'Another Day',
      workerCount: 2,
      totalHours: 1.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'JR',
      hours: 0.5,
      teamId: 2
    },
    {
      type: 'PersonWorklog',
      id: 5369368,
      createdTimestamp: 1524646858000,
      updatedTimestamp: 1526271080000,
      updatedBy: 28425,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 740464,
        worker: {
          type: 'Worker',
          id: 459788,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'Monde',
          lastName: 'Cande',
          projectId: 83711,
          employeeId: '1234567'
        },
        classification: {
          type: 'Classification',
          id: 975724,
          name: 'Front End',
          status: 'DELETED'
        },
        costCodes: [],
        regularTime: 0.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: true,
        totalHours: 0.0
      }
    },
    {
      type: 'PersonWorklog',
      id: 5647232,
      createdTimestamp: 1525857518000,
      updatedTimestamp: 1526259624000,
      updatedBy: 28425,
      createdBy: 28425,
      workerCount: 1,
      totalHours: 5.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 916150,
        worker: {
          type: 'Worker',
          id: 459788,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'Monde',
          lastName: 'Cande',
          projectId: 83711,
          employeeId: '1234567'
        },
        costCodes: [],
        regularTime: 5.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: false,
        totalHours: 5.0
      }
    },
    {
      type: 'CrewWorklog',
      id: 5765789,
      createdTimestamp: 1526159033000,
      updatedTimestamp: 1526159033000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc:
        'Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.',
      workerCount: 2,
      totalHours: 48.0,
      attachments: [],
      workLogType: 'CREW',
      teamId: 2,
      name: 'My Awesome Crew',
      timeCards: [
        {
          type: 'TimeCard',
          id: 991850,
          worker: {
            type: 'Worker',
            id: 258371,
            workerType: 'PERSON',
            status: 'DELETED',
            firstName: 'John',
            lastName: 'Ryall',
            classificationId: 1129648,
            classificationName: 'My Classification'
          },
          costCodes: [],
          regularTime: 24.0,
          overTime: 0.0,
          doubleTime: 0.0,
          split: false,
          totalHours: 24.0
        },
        {
          type: 'TimeCard',
          id: 991851,
          worker: {
            type: 'Worker',
            id: 438005,
            workerType: 'PERSON',
            status: 'ACTIVE',
            firstName: 'Latest',
            lastName: 'Worker'
          },
          costCodes: [],
          regularTime: 24.0,
          overTime: 0.0,
          doubleTime: 0.0,
          split: false,
          totalHours: 24.0
        }
      ]
    },
    {
      type: 'CrewWorklog',
      id: 5342331,
      createdTimestamp: 1524456130000,
      updatedTimestamp: 1525837851000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc:
        'Vestibulum id ligula porta felis euismod semper.  Vestibulum id ligula porta felis euismod semper. ',
      workerCount: 1,
      totalHours: 3.0,
      attachments: [],
      workLogType: 'CREW',
      name: 'My Crews',
      teamId: 2,
      timeCards: [
        {
          type: 'TimeCard',
          id: 916128,
          worker: {
            type: 'Worker',
            id: 258371,
            workerType: 'PERSON',
            status: 'DELETED',
            firstName: 'John',
            lastName: 'Ryall',
            classificationId: 1129648,
            classificationName: 'My Classification'
          },
          classification: {
            type: 'Classification',
            id: 5571,
            name: 'Journeyman',
            status: 'DELETED'
          },
          costCodes: [
            {
              type: 'TimeCostCode',
              id: 1015998,
              costCode: {
                type: 'CostCode',
                id: 202308,
                division: 'Another Onw',
                code: '1234',
                description: 'rtdhdrthr'
              },
              regularTime: 3.0,
              overTime: 0.0,
              doubleTime: 0.0
            },
            {
              type: 'TimeCostCode',
              id: 1015999,
              costCode: {
                type: 'CostCode',
                id: 324770,
                division: 'Division',
                code: '1000',
                description: 'Tests'
              },
              regularTime: 0.0,
              overTime: 0.0,
              doubleTime: 0.0
            }
          ],
          regularTime: 3.0,
          overTime: 0.0,
          doubleTime: 0.0,
          split: true,
          totalHours: 3.0
        }
      ]
    },
    {
      type: 'PersonWorklog',
      id: 5545252,
      createdTimestamp: 1525252416000,
      updatedTimestamp: 1526269195000,
      updatedBy: 28425,
      createdBy: 28425,
      workerCount: 1,
      totalHours: 11.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 850408,
        worker: {
          type: 'Worker',
          id: 438011,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'New',
          lastName: 'Roeler'
        },
        classification: {
          type: 'Classification',
          id: 975719,
          name: 'My New Classification',
          status: 'DELETED'
        },
        costCodes: [],
        regularTime: 11.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: false,
        totalHours: 11.0
      }
    },
    {
      type: 'PersonWorklog',
      id: 5369377,
      createdTimestamp: 1524647065000,
      updatedTimestamp: 1526068543000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'Lorem Ipsum Dolor',
      workerCount: 1,
      totalHours: 5.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 740468,
        worker: {
          type: 'Worker',
          id: 1975,
          workerType: 'USER',
          firstName: 'Nick',
          lastName: 'Ryall'
        },
        costCodes: [],
        regularTime: 5.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: false,
        totalHours: 5.0
      }
    },
    {
      type: 'StandardWorklog',
      id: 5365950,
      createdTimestamp: 1524538506000,
      updatedTimestamp: 1524538506000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'Timber',
      workerCount: 2,
      totalHours: 8.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Otis Redding',
      hours: 4.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5117701,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'ro',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5117702,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Rodney Dangerfield',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5117703,
      createdTimestamp: 1522898335000,
      updatedBy: 0,
      createdBy: 28425,
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Rodney Dangerfield',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5123288,
      createdTimestamp: 1522901963000,
      updatedTimestamp: 1522901963000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'drthdrth',
      workerCount: 0,
      totalHours: 0.0,
      attachments: [],
      workLogType: 'STANDARD',
      subcontractor: 'Rodney Dangerfield',
      hours: 0.0,
      teamId: 2
    },
    {
      type: 'StandardWorklog',
      id: 5123289,
      createdTimestamp: 1522902000000,
      updatedTimestamp: 1522902000000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'My Description',
      workerCount: 2,
      totalHours: 1.0,
      teamId: 2,
      attachments: [
        {
          type: 'Media',
          id: 3096598,
          createdTimestamp: 1522901974000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-4.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/489aac5e-cd3d-4c67-9d70-bf804472b552',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/489aac5e-cd3d-4c67-9d70-bf804472b5526130489526130880843_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 112407,
          uploadDate: 1522901972000
        },
        {
          type: 'Media',
          id: 3096599,
          createdTimestamp: 1522901975000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/d939960d-5480-4dc2-819f-ab3ffb97ddda',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/d939960d-5480-4dc2-819f-ab3ffb97ddda6979884076205606946_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 150017,
          uploadDate: 1522901972000
        },
        {
          type: 'Media',
          id: 3096600,
          createdTimestamp: 1522901975000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-3.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/e39a56d7-b281-48e7-bc4d-d192c26cc67c',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/e39a56d7-b281-48e7-bc4d-d192c26cc67c5327837176237524150_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 119984,
          uploadDate: 1522901972000
        },
        {
          type: 'Media',
          id: 3096601,
          createdTimestamp: 1522901975000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-6.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/780f944d-849e-487d-b0a8-2602fe01462a',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/780f944d-849e-487d-b0a8-2602fe01462a6707951499703208143_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 225199,
          uploadDate: 1522901973000
        },
        {
          type: 'Media',
          id: 3096602,
          createdTimestamp: 1522901975000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-2.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/d28acc93-ab62-4b86-9e0e-94acde1ab330',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/04/d28acc93-ab62-4b86-9e0e-94acde1ab3305321811336869408232_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 211345,
          uploadDate: 1522901973000
        }
      ],
      workLogType: 'STANDARD',
      subcontractor: 'Rodney Dangerfield',
      hours: 0.5
    },
    {
      type: 'CrewWorklog',
      id: 5342332,
      createdTimestamp: 1524475129000,
      updatedTimestamp: 1525857143000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'My Description',
      workerCount: 1,
      totalHours: 2.0,
      attachments: [],
      workLogType: 'CREW',
      name: 'Second Crews',
      teamId: 2,
      timeCards: [
        {
          type: 'TimeCard',
          id: 916149,
          worker: {
            type: 'Worker',
            id: 459787,
            workerType: 'PERSON',
            status: 'ACTIVE',
            firstName: 'Jane',
            lastName: 'Eyre',
            projectId: 83711,
            employeeId: '12345'
          },
          classification: {
            type: 'Classification',
            id: 9666,
            name: 'Apprentice',
            status: 'DELETED'
          },
          costCodes: [],
          regularTime: 2.0,
          overTime: 0.0,
          doubleTime: 0.0,
          split: true,
          totalHours: 2.0
        }
      ]
    },
    {
      type: 'PersonWorklog',
      id: 5802657,
      createdTimestamp: 1526270771000,
      updatedTimestamp: 1526518857000,
      updatedBy: 28425,
      createdBy: 28425,
      workDesc: 'Some work got done.',
      workerCount: 1,
      totalHours: 24.0,
      teamId: 2,
      attachments: [
        {
          type: 'Media',
          id: 4295950,
          createdTimestamp: 1526332450000,
          updatedTimestamp: 1526343092000,
          updatedBy: 28425,
          createdBy: 28425,
          fileName: 'thingo.jpg',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/98590ecf-3561-46c3-a2ba-3a4ff77eddf1',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/98590ecf-3561-46c3-a2ba-3a4ff77eddf15209656250990039079_thumb.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 1217658,
          uploadDate: 1526332449000,
          takenDate: 1523293741000
        },
        {
          type: 'Media',
          id: 4336511,
          createdTimestamp: 1526347914000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/10284dd5-b23c-468c-99cb-8970231c2f40',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/10284dd5-b23c-468c-99cb-8970231c2f403709029620048604204_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 150017,
          uploadDate: 1526347913000
        },
        {
          type: 'Media',
          id: 4336512,
          createdTimestamp: 1526347915000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-6.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/f1f50879-35a5-423f-9c25-7a6341002a06',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/f1f50879-35a5-423f-9c25-7a6341002a062339683049046221190_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 225199,
          uploadDate: 1526347913000
        },
        {
          type: 'Media',
          id: 4336513,
          createdTimestamp: 1526347915000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/a3df529b-3e6d-4351-8ab1-77ba428dac79',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/a3df529b-3e6d-4351-8ab1-77ba428dac79382211848930648482_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161177,
          uploadDate: 1526347913000
        },
        {
          type: 'Media',
          id: 4543918,
          createdTimestamp: 1526438479000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-4.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/e51b7313-d835-45cc-9285-81c1ee436c20',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/e51b7313-d835-45cc-9285-81c1ee436c203149218518453674726_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 112407,
          uploadDate: 1526438476000
        },
        {
          type: 'Media',
          id: 4543919,
          createdTimestamp: 1526438480000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-6.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/c40bd366-a214-411f-a49d-ba73ed693aec',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/c40bd366-a214-411f-a49d-ba73ed693aec6434808008299723829_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 225199,
          uploadDate: 1526438477000
        },
        {
          type: 'Media',
          id: 4543920,
          createdTimestamp: 1526438480000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-5.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/a920b85f-cd49-4d8e-a0a6-d5822af673f9',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/a920b85f-cd49-4d8e-a0a6-d5822af673f93936548855912408996_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 150017,
          uploadDate: 1526438477000
        },
        {
          type: 'Media',
          id: 4543921,
          createdTimestamp: 1526438480000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-3.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/ddf55aae-9b32-4f93-8b8a-cc0eb530c461',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/ddf55aae-9b32-4f93-8b8a-cc0eb530c4617757663255038730520_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 119984,
          uploadDate: 1526438476000
        },
        {
          type: 'Media',
          id: 4543922,
          createdTimestamp: 1526438480000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-1.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/1fb1d081-a76b-4791-aa62-f941ff388939',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/1fb1d081-a76b-4791-aa62-f941ff3889397736856797145801287_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 210139,
          uploadDate: 1526438477000
        },
        {
          type: 'Media',
          id: 4543923,
          createdTimestamp: 1526438481000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-2.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/7ef68307-36c2-489e-858e-77a0aa44c138',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/7ef68307-36c2-489e-858e-77a0aa44c1383283081475340047902_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 211345,
          uploadDate: 1526438477000
        },
        {
          type: 'Media',
          id: 4543924,
          createdTimestamp: 1526438482000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-7.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/71b25a9b-7db8-492e-b3ae-8876f239176e',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/71b25a9b-7db8-492e-b3ae-8876f239176e4393052799336815588_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161177,
          uploadDate: 1526438480000
        },
        {
          type: 'Media',
          id: 4543925,
          createdTimestamp: 1526438483000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-9.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/6df65752-0416-4709-b5fe-f14399f93a4e',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/6df65752-0416-4709-b5fe-f14399f93a4e9219636888517651561_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 161064,
          uploadDate: 1526438481000
        },
        {
          type: 'Media',
          id: 4543926,
          createdTimestamp: 1526438483000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-8.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/515e2765-fe78-467e-b6fd-8c96040c7863',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/515e2765-fe78-467e-b6fd-8c96040c78638744574903390909257_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 217161,
          uploadDate: 1526438481000
        },
        {
          type: 'Media',
          id: 4543927,
          createdTimestamp: 1526438483000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-10.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/ad625400-8e17-4f17-a0e0-54155f04b068',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/ad625400-8e17-4f17-a0e0-54155f04b0685921864363587315536_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 202932,
          uploadDate: 1526438481000
        },
        {
          type: 'Media',
          id: 4543928,
          createdTimestamp: 1526438484000,
          updatedBy: 0,
          createdBy: 28425,
          fileName: 'project-11.png',
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/e7249885-c870-4647-abd8-21f58b01dcbe',
          thumbUrl:
            'https://s3.amazonaws.com/raken-dev/2018/05/e7249885-c870-4647-abd8-21f58b01dcbe6737939108954808476_thumb.png',
          contentType: 'image/png',
          etag: 'image/png',
          fileSize: 174697,
          uploadDate: 1526438482000
        }
      ],
      workLogType: 'PERSON',
      timeCard: {
        type: 'TimeCard',
        id: 1015763,
        worker: {
          type: 'Worker',
          id: 422757,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'Tim',
          lastName: 'Smith'
        },
        classification: {
          type: 'Classification',
          id: 975724,
          name: 'Front End',
          status: 'DELETED'
        },
        costCodes: [],
        regularTime: 24.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: false,
        totalHours: 24.0
      }
    },
    {
      type: 'PersonWorklog',
      id: 5632165,
      createdTimestamp: 1525669785000,
      updatedTimestamp: 1526269662000,
      updatedBy: 28425,
      createdBy: 28425,
      workerCount: 1,
      totalHours: 11.0,
      attachments: [],
      workLogType: 'PERSON',
      teamId: 2,
      timeCard: {
        type: 'TimeCard',
        id: 906527,
        worker: {
          type: 'Worker',
          id: 422755,
          workerType: 'PERSON',
          status: 'ACTIVE',
          firstName: 'Tony',
          lastName: 'Montana'
        },
        classification: {
          type: 'Classification',
          id: 975723,
          name: 'My Class',
          status: 'DELETED'
        },
        costCodes: [],
        regularTime: 11.0,
        overTime: 0.0,
        doubleTime: 0.0,
        split: false,
        totalHours: 11.0
      }
    }
  ]
};

const projectMembersData = {
  collection: [
    {
      id: 27353,
      username: 'eterehov+60@neklo.com',
      phone: '(375) 297-7665',
      company: {
        id: 21965,
        name: 'raken stage',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Eugene',
      lastName: 'Terehov',
      images: [],
      lastLogin: 1511478558000,
      projectTeamIds: [2]
    },
    {
      id: 26421,
      username: 'eterehov@neklo.com',
      phone: '+16421552497',
      company: {
        id: 21980,
        name: 'Neklo_Test',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Eugene',
      lastName: 'Test1',
      images: [
        {
          id: 1581763,
          createdTimestamp: 1497853585000,
          updatedBy: 0,
          createdBy: 26421,
          createdByRef: {
            id: 26421,
            name: 'eterehov@neklo.com',
            firstName: 'Eugene',
            lastName: 'Test1',
            active: true
          },
          mediaType: 'IMAGE',
          contentUrl:
            'https://s3.amazonaws.com/raken-stag/2017/06/7995b4fd-a6ab-4950-bf15-538f5a1baeb4',
          thumbUrl:
            'https://s3.amazonaws.com/raken-stag/2017/06/7995b4fd-a6ab-4950-bf15-538f5a1baeb4_thumb.jpg',
          contentType: 'image/jpeg',
          etag: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1497835585000
        }
      ],
      lastLogin: 1536885999000,
      projectTeamIds: [2]
    },
    {
      id: 26489,
      username: 'anastasia.lyutarevich+867@neklo.com',
      phone: '(123) 456-    ',
      company: {
        id: 21980,
        name: 'Neklo_Test',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Nora',
      lastName: 'Melloni',
      images: [],
      lastLogin: 1517391533000,
      teamId: 56603
    },
    {
      id: 27715,
      username: 'nickw+2@rakenapp.com',
      phone: '(888) 888-8888',
      company: {
        id: 22863,
        name: 'TEST_MARKETING',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Nick',
      lastName: 'Warner',
      images: [],
      lastLogin: 1532038580000,
      projectTeamIds: [2]
    },
    {
      id: 28425,
      username: 'nick@rakenapp.com',
      phone: '(021) 552-497 ',
      company: {
        id: 23470,
        name: 'RakenNZ',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Nick',
      lastName: 'Ryall',
      images: [],
      lastLogin: 1533261132000,
      projectTeamIds: [2]
    },
    {
      id: 42334,
      username: 'trent@rakenapp.com',
      company: {
        id: 28060,
        name: 'Gibson Group intranet',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Trenton',
      lastName: 'Lowe',
      images: [],
      inviteId: 42334,
      projectTeamIds: [2]
    },
    {
      id: 43938,
      username: 'trent@foobar.com',
      company: {
        id: 327290,
        name: 'Fortis Construction | NEW',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Trent',
      lastName: 'Hogan',
      images: [],
      inviteId: 43938,
      projectTeamIds: [2]
    },
    {
      id: 44826,
      username: 'zing@zoom.com',
      company: {
        id: 338638,
        name: 'Fortis Constr',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Zing',
      lastName: '',
      images: [],
      inviteId: 44826,
      projectTeamIds: [2]
    },
    {
      id: 45380,
      username: 'rick@rick.com',
      company: {
        id: 345387,
        name: 'My New Companys',
        members: [],
        status: 'ACTIVE',
        images: []
      },
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Rick',
      lastName: 'Ryall',
      images: [],
      inviteId: 45380,
      projectTeamIds: [2]
    }
  ],
  projectDirectoryLink:
    'https://develop.rakenapp.com//directory/56603/missed-stage_directory.pdf'
};

const companyMembersData = {
  page: {
    offset: 0,
    limit: 9,
    totalElements: 9
  },
  collection: [
    {
      type: 'User',
      id: 56640,
      username: 'test_pending@neklo.com',
      uuid: 'cb1dc940-11bf-45de-bc31-7b19d09d85f3',
      isPending: true,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'A',
      lastName: 'new',
      images: [],
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 26490,
      username: 'anastasia.lyutarevich+868@neklo.com',
      phone: '123456',
      uuid: 'a02204c5-6719-4d27-89e7-3c2ecf287e64',
      isPending: false,
      role: 'ROLE_PROJECT_MEMBER',
      firstName: 'Aira',
      lastName: 'Zah',
      images: [],
      lastLogin: 1504248239000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 26421,
      username: 'eterehov@neklo.com',
      phone: '+16421552497',
      uuid: '5d7546af-5b40-4a79-bc7f-0ea92504e27e',
      isPending: false,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Eugene',
      lastName: 'Test1',
      images: [],
      lastLogin: 1536885999000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 458216,
      username: 'kim@rakenapp.com',
      phone: '(642) 111-6765',
      uuid: 'd04e3b83-3a60-4831-a4a8-40b47ab535c4',
      isPending: false,
      role: 'ROLE_PROJECT_MEMBER',
      firstName: 'Kim',
      lastName: 'Hue',
      images: [],
      lastLogin: 1534720442000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 26489,
      username: 'anastasia.lyutarevich+867@neklo.com',
      phone: '(123) 456-    ',
      uuid: 'dc67daee-bfa3-4fc7-b4e4-7a272108ea7e',
      isPending: false,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'Nora',
      lastName: 'Melloni',
      images: [],
      lastLogin: 1517391533000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 29354,
      username: 'maxim.cherny+sc21@neklo.com',
      phone: '(375) 257-4932',
      uuid: '891e9afd-6b0d-4254-b367-3715bb72a796',
      isPending: true,
      role: 'ROLE_PROJECT_MEMBER',
      firstName: 'SC21',
      lastName: 'Cherny',
      images: [],
      lastLogin: 1535512817000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 26849,
      username: 'adminewrw@tet.com',
      phone: '(   )    -    ',
      uuid: '05f480b5-c0c1-4313-b5fd-5a7288dc5e62',
      isPending: false,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'erwerw',
      lastName: 'werwer',
      images: [],
      lastLogin: 1522315644000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 26442,
      username: 'polyansky_03_04@neklo.com',
      phone: '(555)    -    ',
      uuid: 'e10aba6a-13cf-4419-ab2d-c126c5f5e5f8',
      isPending: false,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'swf',
      lastName: 'wf',
      images: [],
      lastLogin: 1457143453000,
      company: {
        id: 1
      }
    },
    {
      type: 'User',
      id: 629038,
      username: 'yuanlin1110+token@gmail.com',
      phone: '+1111',
      uuid: '68c14be9-3133-4dc5-8401-62dd441d431e',
      isPending: false,
      role: 'ROLE_ACCOUNT_ADMIN',
      firstName: 'yuan',
      lastName: '123',
      images: [],
      lastLogin: 1536880204000,
      company: {
        id: 1
      }
    }
  ]
};

const companyPermissionsData = {
  collection: [
    {
      role: 'ROLE_ACCOUNT_ADMIN',
      roleName: 'Account Administrator',
      description: 'Automatically added to every new project created',
      enabled: true,
      permissionEnum: 'AUTO_ADD_NEW_PROJECT'
    },
    {
      role: 'ROLE_ACCOUNT_ADMIN',
      roleName: 'Account Administrator',
      description: 'Can create new projects',
      enabled: true,
      permissionEnum: 'CREATE_NEW_PROJECTS'
    },
    {
      role: 'ROLE_ADMIN',
      roleName: 'Administrator',
      description: 'Automatically added to every new project created',
      enabled: true,
      permissionEnum: 'AUTO_ADD_NEW_PROJECT'
    },
    {
      role: 'ROLE_ADMIN',
      roleName: 'Administrator',
      description: 'Can create new projects',
      enabled: true,
      permissionEnum: 'CREATE_NEW_PROJECTS'
    },
    {
      role: 'ROLE_ADMIN',
      roleName: 'Administrator',
      description: 'Can invite new Team Members to my company',
      enabled: false,
      permissionEnum: 'INVITE_NEW_TEAM_MEMBERS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can invite Collaborators to projects',
      enabled: true,
      permissionEnum: 'INVITE_COLLABORATORS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can use the automatic email feature',
      enabled: false,
      permissionEnum: 'USE_AUTOMATIC_EMAIL_FEATURE'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can modify daily report settings',
      enabled: false,
      permissionEnum: 'MODIFY_DAILY_REPORT_SETTINGS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can delete and inactivate projects',
      enabled: false,
      permissionEnum: 'DELETE_AND_INACTIVATE_PROJECTS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can create/edit/delete Cost Codes',
      enabled: true,
      permissionEnum: 'CUD_COST_CODES'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can modify info and general settings',
      enabled: false,
      permissionEnum: 'MODIFY_GENERAL_SETTINGS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can create new projects',
      enabled: true,
      permissionEnum: 'CREATE_NEW_PROJECTS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can invite new Team Members to my company',
      enabled: false,
      permissionEnum: 'INVITE_NEW_TEAM_MEMBERS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can create/edit/delete Workers',
      enabled: true,
      permissionEnum: 'CUD_WORKERS'
    },
    {
      role: 'ROLE_PROJECT_MEMBER',
      roleName: 'Project Member',
      description: 'Can modify Survey Question settings',
      enabled: false,
      permissionEnum: 'MODIFY_SURVEY_QUESTION_SETTINGS'
    }
  ]
};

const toolboxTalksData = {
  page: {
    offset: 0,
    limit: 10,
    totalElements: 2
  },
  collection: [
    {
      uuid: 'ffbab577-8307-42b3-a3b3-034497c54d65',
      name: 'lorem ipsum1',
      document: {
        contentUrl:
          'https://s3.amazonaws.com/raken-dev/processed/2019/01/23/dc646c58-2754-4b5a-bd30-b26dfadcc161'
      },
      countUpcoming: 0,
      countPast: 5,
      lastPresentedDate: '2019-02-02',
      status: 'ACTIVE'
    },
    {
      uuid: '730d8769-e8bb-48d8-811e-1a02a9f94f3b',
      name: 'lorem ipsum2',
      document: {
        contentUrl:
          'https://s3.amazonaws.com/raken-dev/processed/2019/01/23/dc646c58-2754-4b5a-bd30-b26dfadcc161'
      },
      countUpcoming: 2,
      countPast: 0,
      lastPresentedDate: '2019-02-02',
      status: 'DELETED'
    }
  ]
};

export {
  usersData,
  companiesData,
  projectsData,
  questionCategoriesData,
  allTimeStatsByProjectData,
  complianceByProjectData,
  topUsersData,
  attachmentActivityData,
  surveyActivityData,
  missedDailiesData,
  recentActivityData,
  filterData,
  dailyReportsData,
  tasksData,
  workLogsData,
  companyMembersData,
  projectMembersData,
  companyPermissionsData,
  toolboxTalksData
};
