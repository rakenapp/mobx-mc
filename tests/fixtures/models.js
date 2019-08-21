const companyData = {
  type: 'Company',
  id: 1,
  name: 'BiznessName1',
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
  }
};

const meData = {
  type: 'User',
  id: 1,
  username: 'projectmem1@rakneapp.com',
  permissions: {
    MODIFY_GENERAL_SETTINGS: false,
    USE_AUTOMATIC_EMAIL_FEATURE: false,
    CREATE_NEW_PROJECTS: true,
    MODIFY_DAILY_REPORT_SETTINGS: false,
    INVITE_COLLABORATORS: true,
    MODIFY_SURVEY_QUESTION_SETTINGS: false,
    INVITE_NEW_TEAM_MEMBERS: false,
    DELETE_AND_INACTIVATE_PROJECTS: false
  },
  company: {
    type: 'Company',
    id: 1
  },
  settings: {
    mobileDownloadModalDone: true
  },
  role: 'ROLE_PROJECT_MEMBER',
  firstName: 'Jane',
  lastName: 'Doe',
  phone: '0989056675',
  images: [
    {
      type: 'Media',
      id: 1565139,
      createdTimestamp: 1500266713000,
      createdBy: 2,
      fileName: 'user.png',
      mediaType: 'IMAGE',
      contentUrl: 'https://cdn.rakenapp.com/ui/images/me.png',
      thumbUrl: 'https://cdn.rakenapp.com/ui/images/me.png',
      contentType: 'image/png',
      etag: 'image/png',
      fileSize: 5215,
      uploadDate: '2017-07-17T04:45:13+0000',
      takenDate: '2017-06-21T03:44:45+0000'
    }
  ]
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
  phone: '0989056675',
  images: [
    {
      type: 'Media',
      id: 1565139,
      createdTimestamp: 1500266713000,
      createdBy: 2,
      fileName: 'user.png',
      mediaType: 'IMAGE',
      contentUrl: 'https://cdn.rakenapp.com/ui/images/user.png',
      thumbUrl: 'https://cdn.rakenapp.com/ui/images/user.png',
      contentType: 'image/png',
      etag: 'image/png',
      fileSize: 5215,
      uploadDate: '2017-07-17T04:45:13+0000',
      takenDate: '2017-06-21T03:44:45+0000'
    }
  ]
};

const projectMeasureData = {
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
};

const insightsPeriodData = {
  type: 'InsightsPeriod',
  start: '2017-11-01',
  end: '2017-11-30',
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

const dailyReportData = {
  type: 'Report',
  id: 603034,
  project: {
    type: 'Project',
    id: 3
  },
  status: 'UNSIGNED',
  date: '2017-12-09',
  workLogs: [
    {
      type: 'Worklog',
      id: 4260841,
      createdTimestamp: 1512741600001,
      createdBy: 2,
      subcontractor: 'JR',
      workDesc:
        "Placed planter walls at the dining terrace elevated deck and 'S' shaped retaining wall footing. Continued general cleanup and haul off of materials. Continued to form built up curbs at doors thresholds and electrical sleeves.",
      workerCount: 12,
      hours: 8.0
    },
    {
      type: 'Worklog',
      id: 4260842,
      createdTimestamp: 1512741600002,
      createdBy: 2,
      subcontractor: 'Rodney Dangerfield',
      workDesc:
        "All he did today was walk around the job site saying 'I don't get no respect!'",
      workerCount: 1,
      hours: 2.5
    },
    {
      type: 'Worklog',
      id: 4260844,
      createdTimestamp: 1512741600003,
      createdBy: 2,
      subcontractor: 'Carpenters',
      workDesc:
        'Cutting, joining, and installing of structural elements on 7th floor.',
      workerCount: 4,
      hours: 4.25
    },
    {
      type: 'Worklog',
      id: 4260846,
      createdTimestamp: 1512741600004,
      createdBy: 2,
      subcontractor: 'TPB',
      workDesc:
        'Shotcrete continued at 8 line wall. Also continued building tables and forming LL1 deck 2. Stripped light well wall at east side.  Placed block out and extra area of north grove.  Saw cut joins.',
      workerCount: 18,
      hours: 8.0
    }
  ],
  notes: [
    {
      type: 'Note',
      id: 485239,
      createdTimestamp: 1512741600005,
      createdBy: 2,
      category: 'NOTES',
      comment:
        'TBP employee smashed hand on steel embed and required a 3rd party mobile medic.',
      attachments: [
        {
          type: 'Media',
          id: 1600700,
          createdTimestamp: 1512741600006,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note18733947097530721252.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note14870073127328902750_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        }
      ]
    },
    {
      type: 'Note',
      id: 485249,
      createdTimestamp: 1512741600007,
      createdBy: 2,
      category: 'QUALITY',
      comment:
        'Walked project site and approved misc steel location with Barton & Walters based on current layout.',
      attachments: [
        {
          type: 'Media',
          id: 1600719,
          createdTimestamp: 1512741600008,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-55361666267164854370.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-53201153980349449426_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        },
        {
          type: 'Media',
          id: 1600722,
          createdTimestamp: 1512741600009,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note-5_13787907808943212979.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note-5_1903361965090704416_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        }
      ]
    },
    {
      type: 'Note',
      id: 485246,
      createdTimestamp: 1512741600010,
      createdBy: 2,
      category: 'SAFETY',
      comment:
        'Verbally warned Canton Waterproofing to wear fall protection while on the north air shaft.',
      attachments: [
        {
          type: 'Media',
          id: 1600713,
          createdTimestamp: 1512741600011,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note42102028453036478982.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note41455971677377454757_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        },
        {
          type: 'Media',
          id: 1600716,
          createdTimestamp: 1512741600012,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note4_25118742640241369016.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note4_24054733106168064890_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        }
      ]
    },
    {
      type: 'Note',
      id: 485243,
      createdTimestamp: 1512741600013,
      createdBy: 2,
      category: 'SAFETY',
      comment:
        'Verified that Smith Elevator employees working with the shaft are tied off.',
      attachments: [
        {
          type: 'Media',
          id: 1600710,
          createdTimestamp: 1512741600014,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note37394333796173285710_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        }
      ]
    },
    {
      type: 'Note',
      id: 485241,
      createdTimestamp: 1512741600015,
      createdBy: 2,
      category: 'SAFETY',
      comment:
        'Walked project site and verbally warned 5 employees from various trades to wear safety glasses at all times.',
      attachments: [
        {
          type: 'Media',
          id: 1600703,
          createdTimestamp: 1512741600016,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_18296360811545794461.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_1170218693028856066_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        },
        {
          type: 'Media',
          id: 1600705,
          createdTimestamp: 1512741600017,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_27513590827971964555.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_24279985981259047024_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        },
        {
          type: 'Media',
          id: 1600707,
          createdTimestamp: 1512741600018,
          updatedBy: 0,
          createdBy: 2,
          mediaType: 'IMAGE',
          contentUrl:
            'http://cdn.rakenapp.com/images/note2_31405889427230014606.jpg',
          thumbUrl:
            'http://cdn.rakenapp.com/images/note2_32313696375159670004_200x200.jpg',
          contentType: 'image/jpeg',
          fileSize: 0,
          uploadDate: 1512887252000
        }
      ]
    }
  ],
  answers: [
    {
      type: 'ReportAnswer',
      id: 4471909,
      createdTimestamp: 1512741600000,
      createdBy: 2,
      question: {
        type: 'ReportQuestion',
        id: 147651,
        tag: 0,
        category: 'CATEGORY_SAFETY',
        question: 'Any accidents on site today?',
        required: true
      },
      questionId: 147651,
      answer: 'YES',
      desc:
        'TBP employee smashed hand on steel embed and required a 3rd party mobile medic.'
    },
    {
      type: 'ReportAnswer',
      id: 4471911,
      createdTimestamp: 1512741600000,
      createdBy: 2,
      question: {
        type: 'ReportQuestion',
        id: 147652,
        tag: 1,
        category: 'CATEGORY_DELAYS',
        question: 'Any schedule delays occur?',
        required: true
      },
      questionId: 147652,
      answer: 'YES'
    },
    {
      type: 'ReportAnswer',
      id: 4471912,
      createdTimestamp: 1512741600000,
      createdBy: 2,
      question: {
        type: 'ReportQuestion',
        id: 147653,
        tag: 2,
        category: 'CATEGORY_DELAYS_WEATHER',
        question: 'Did weather cause any delays?',
        required: true
      },
      questionId: 147653,
      answer: 'NO'
    },
    {
      type: 'ReportAnswer',
      id: 4471913,
      createdTimestamp: 1512741600000,
      createdBy: 2,
      question: {
        type: 'ReportQuestion',
        id: 147654,
        tag: 4,
        category: 'CATEGORY_DELAYS',
        question: "Any areas that can't be worked on?",
        required: true
      },
      questionId: 147654,
      answer: 'YES'
    },
    {
      type: 'ReportAnswer',
      id: 4471914,
      createdTimestamp: 1512741600000,
      createdBy: 2,
      question: {
        type: 'ReportQuestion',
        id: 147655,
        tag: 5,
        category: 'CATEGORY_EQUIPMENT',
        question: 'Any equipment rented on site?',
        required: true
      },
      questionId: 147655,
      answer: 'YES',
      desc: 'Fans from Sunstate Equipment were delivered today.'
    }
  ],
  attachments: [
    {
      type: 'Media',
      id: 1600698,
      createdTimestamp: 1512741600000,
      updatedBy: 0,
      createdBy: 2,
      mediaType: 'IMAGE',
      contentUrl: 'http://cdn.rakenapp.com/images/1of43723713942425261047.jpg',
      thumbUrl:
        'http://cdn.rakenapp.com/images/1of43130605674440874364_200x200.jpg',
      contentType: 'image/jpeg',
      fileSize: 0,
      uploadDate: 1512887252000
    }
  ],
  insights: {
    workersToday: 35,
    hoursToday: 259.5,
    weather: {
      type: 'Weather',
      daySummary: {
        type: 'DaySummary',
        temperatureMin: 52.38,
        temperatureMax: 79.27,
        icon: 'clear-day'
      }
    }
  },
  pdfs: {
    super: 'http://cdn.rakenapp.com/link-to-super.pdf',
    daily: 'http://cdn.rakenapp.com/link-to-daily.pdf'
  },
  missedSubcontractorDailies: [
    {
      type: 'MissedDaily',
      dateFor: '2017-12-09',
      notified: false,
      project: {
        id: 3
      },
      company: {
        id: 3,
        name: 'Bull Concrete_QA'
      },
      projectTeamId: 62010,
      id: '62010_2017-12-06'
    }
  ],
  summary: {
    type: 'Worklog',
    id: 4260841,
    createdTimestamp: 1512741600000,
    createdBy: 2,
    subcontractor: 'JR',
    workDesc:
      "Placed planter walls at the dining terrace elevated deck and 'S' shaped retaining wall footing. Continued general cleanup and haul off of materials. Continued to form built up curbs at doors thresholds and electrical sleeves.",
    workerCount: 12,
    hours: 8.0
  }
};

const weatherData = {
  type: 'Weather',
  latitude: 37.09024,
  longitude: -95.71289,
  timezone: 'America/Chicago',
  offset: -6,
  hourlys: [
    {
      type: 'HourlyData',
      time: 1512712800,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0.007,
      precipitationProbability: 0,
      temperature: 15.34,
      apparentTemperature: 15.34,
      dewPoint: 8.12,
      humidity: 0.73,
      windSpeed: 1.1,
      windBearing: 215,
      visibility: 10,
      cloudCover: 0,
      pressure: 1027.45,
      ozone: 323.39
    },
    {
      type: 'HourlyData',
      time: 1512716400,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 14.63,
      apparentTemperature: 14.63,
      dewPoint: 8.06,
      humidity: 0.75,
      windSpeed: 1.36,
      windBearing: 262,
      visibility: 10,
      cloudCover: 0,
      pressure: 1026.39,
      ozone: 322.1
    },
    {
      type: 'HourlyData',
      time: 1512720000,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 12.66,
      apparentTemperature: 12.66,
      dewPoint: 8.63,
      humidity: 0.83,
      windSpeed: 2.3,
      windBearing: 179,
      visibility: 10,
      cloudCover: 0,
      pressure: 1025.63,
      ozone: 318.91
    },
    {
      type: 'HourlyData',
      time: 1512723600,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 12.61,
      apparentTemperature: 12.61,
      dewPoint: 8.26,
      humidity: 0.82,
      windSpeed: 2.65,
      windBearing: 190,
      visibility: 10,
      cloudCover: 0,
      pressure: 1025.25,
      ozone: 316.51
    },
    {
      type: 'HourlyData',
      time: 1512727200,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 13.25,
      apparentTemperature: 7.9,
      dewPoint: 8.33,
      humidity: 0.8,
      windSpeed: 3.11,
      windBearing: 187,
      visibility: 10,
      cloudCover: 0,
      pressure: 1024.34,
      ozone: 315.87
    },
    {
      type: 'HourlyData',
      time: 1512730800,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 14.09,
      apparentTemperature: 14.09,
      dewPoint: 8.41,
      humidity: 0.78,
      windSpeed: 1.85,
      windBearing: 228,
      visibility: 10,
      cloudCover: 0,
      pressure: 1024.21,
      ozone: 315.97
    },
    {
      type: 'HourlyData',
      time: 1512734400,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 13.1,
      apparentTemperature: 7.03,
      dewPoint: 8.12,
      humidity: 0.8,
      windSpeed: 3.51,
      windBearing: 193,
      visibility: 10,
      cloudCover: 0,
      pressure: 1023.63,
      ozone: 323.2
    },
    {
      type: 'HourlyData',
      time: 1512738000,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 14.3,
      apparentTemperature: 14.3,
      dewPoint: 8.66,
      humidity: 0.78,
      windSpeed: 2.4,
      windBearing: 183,
      visibility: 10,
      cloudCover: 0,
      pressure: 1023.08,
      ozone: 326.29
    },
    {
      type: 'HourlyData',
      time: 1512741600,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 16.36,
      apparentTemperature: 9.01,
      dewPoint: 9.93,
      humidity: 0.75,
      windSpeed: 4.75,
      windBearing: 170,
      visibility: 10,
      cloudCover: 0,
      pressure: 1022.44,
      ozone: 329.67
    },
    {
      type: 'HourlyData',
      time: 1512745200,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 23.16,
      apparentTemperature: 15.86,
      dewPoint: 14.81,
      humidity: 0.7,
      windSpeed: 5.83,
      windBearing: 191,
      visibility: 10,
      cloudCover: 0,
      pressure: 1021.51,
      ozone: 332.16
    },
    {
      type: 'HourlyData',
      time: 1512748800,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 27.21,
      apparentTemperature: 20.83,
      dewPoint: 16.14,
      humidity: 0.63,
      windSpeed: 5.65,
      windBearing: 189,
      visibility: 10,
      cloudCover: 0,
      pressure: 1021.54,
      ozone: 333.36
    },
    {
      type: 'HourlyData',
      time: 1512752400,
      summary: 'Clear',
      icon: 'clear-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 33.4,
      apparentTemperature: 27.1,
      dewPoint: 16.64,
      humidity: 0.5,
      windSpeed: 7.13,
      windBearing: 196,
      visibility: 10,
      cloudCover: 0,
      pressure: 1020.95,
      ozone: 333.63
    },
    {
      type: 'HourlyData',
      time: 1512756000,
      summary: 'Partly Cloudy',
      icon: 'partly-cloudy-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 36.68,
      apparentTemperature: 30.4,
      dewPoint: 16.37,
      humidity: 0.43,
      windSpeed: 8.25,
      windBearing: 185,
      visibility: 10,
      cloudCover: 0.43,
      pressure: 1019.56,
      ozone: 321.43
    },
    {
      type: 'HourlyData',
      time: 1512759600,
      summary: 'Partly Cloudy',
      icon: 'partly-cloudy-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 41.06,
      apparentTemperature: 36.07,
      dewPoint: 16.65,
      humidity: 0.37,
      windSpeed: 7.62,
      windBearing: 194,
      visibility: 10,
      cloudCover: 0.43,
      pressure: 1018.79,
      ozone: 321.19
    },
    {
      type: 'HourlyData',
      time: 1512763200,
      summary: 'Overcast',
      icon: 'cloudy',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 40.93,
      apparentTemperature: 36.27,
      dewPoint: 17.35,
      humidity: 0.38,
      windSpeed: 6.97,
      windBearing: 227,
      visibility: 10,
      cloudCover: 1,
      pressure: 1017.95,
      ozone: 322.22
    },
    {
      type: 'HourlyData',
      time: 1512766800,
      summary: 'Overcast',
      icon: 'cloudy',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 41.71,
      apparentTemperature: 36.93,
      dewPoint: 17.85,
      humidity: 0.38,
      windSpeed: 7.49,
      windBearing: 241,
      visibility: 10,
      cloudCover: 1,
      pressure: 1018.1,
      ozone: 322.48
    },
    {
      type: 'HourlyData',
      time: 1512770400,
      summary: 'Overcast',
      icon: 'cloudy',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 41.94,
      apparentTemperature: 37.96,
      dewPoint: 18.08,
      humidity: 0.38,
      windSpeed: 6.16,
      windBearing: 230,
      visibility: 10,
      cloudCover: 0.97,
      pressure: 1018.3,
      ozone: 320.98
    },
    {
      type: 'HourlyData',
      time: 1512774000,
      summary: 'Mostly Cloudy',
      icon: 'partly-cloudy-day',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 40.27,
      apparentTemperature: 38.22,
      dewPoint: 18.43,
      humidity: 0.41,
      windSpeed: 3.41,
      windBearing: 235,
      visibility: 10,
      cloudCover: 0.66,
      pressure: 1018.6,
      ozone: 318.65
    },
    {
      type: 'HourlyData',
      time: 1512777600,
      summary: 'Mostly Cloudy',
      icon: 'partly-cloudy-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 37.28,
      apparentTemperature: 37.28,
      dewPoint: 18.17,
      humidity: 0.46,
      windSpeed: 1.88,
      windBearing: 195,
      visibility: 10,
      cloudCover: 0.6,
      pressure: 1018.48,
      ozone: 317.29
    },
    {
      type: 'HourlyData',
      time: 1512781200,
      summary: 'Mostly Cloudy',
      icon: 'partly-cloudy-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 33.85,
      apparentTemperature: 33.85,
      dewPoint: 18.28,
      humidity: 0.52,
      windSpeed: 2.33,
      windBearing: 205,
      visibility: 10,
      cloudCover: 0.63,
      pressure: 1018.67,
      ozone: 316.41
    },
    {
      type: 'HourlyData',
      time: 1512784800,
      summary: 'Partly Cloudy',
      icon: 'partly-cloudy-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 32.27,
      apparentTemperature: 32.27,
      dewPoint: 18.16,
      humidity: 0.56,
      windSpeed: 2.13,
      windBearing: 264,
      visibility: 10,
      cloudCover: 0.44,
      pressure: 1018.67,
      ozone: 316.01
    },
    {
      type: 'HourlyData',
      time: 1512788400,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 30.51,
      apparentTemperature: 26.3,
      dewPoint: 18.17,
      humidity: 0.6,
      windSpeed: 4.05,
      windBearing: 314,
      visibility: 10,
      cloudCover: 0.02,
      pressure: 1019.37,
      ozone: 316.04
    },
    {
      type: 'HourlyData',
      time: 1512792000,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 28.82,
      apparentTemperature: 28.82,
      dewPoint: 19.31,
      humidity: 0.67,
      windSpeed: 2.45,
      windBearing: 300,
      visibility: 10,
      cloudCover: 0.02,
      pressure: 1019.23,
      ozone: 316.72
    },
    {
      type: 'HourlyData',
      time: 1512795600,
      summary: 'Clear',
      icon: 'clear-night',
      precipIntensity: 0,
      precipitationProbability: 0,
      temperature: 27.33,
      apparentTemperature: 27.33,
      dewPoint: 19.16,
      humidity: 0.71,
      windSpeed: 1.37,
      windBearing: 265,
      visibility: 10,
      cloudCover: 0,
      pressure: 1019.07,
      ozone: 317.97
    }
  ],
  dailys: [
    {
      type: 'DailyData',
      sunriseTime: 1512739534,
      sunsetTime: 1512774429,
      moonPhase: 0.69,
      icon: 'partly-cloudy-day',
      summary:
        'Mostly cloudy starting in the afternoon, continuing until evening.',
      precipitationIntensity: 0.0131,
      precipitationIntensityMax: 0,
      precipitationIntensityMaxTime: 0,
      precipitationProbability: 0,
      temperatureMin: 12.61,
      temperatureMinTime: 1512723600,
      temperatureMax: 41.94,
      temperatureMaxTime: 1512770400,
      apparentTemperatureMin: 7.03,
      apparentTemperatureMinTime: 1512734400,
      apparentTemperatureMax: 38.22,
      apparentTemperatureMaxTime: 1512774000,
      dewPoint: 14.17,
      humidity: 0.61,
      windSpeed: 3.33,
      windGust: 8.88,
      windBearing: 210,
      visibility: 10,
      cloudCover: 0.26,
      pressure: 1021.3
    },
    {
      type: 'DailyData',
      sunriseTime: 1512825982,
      sunsetTime: 1512860833,
      moonPhase: 0.73,
      icon: 'clear-day',
      summary: 'Clear throughout the day.',
      precipitationIntensity: 0,
      precipitationIntensityMax: 0,
      precipitationIntensityMaxTime: 0,
      precipitationProbability: 0,
      temperatureMin: 25.4,
      temperatureMinTime: 1512802800,
      temperatureMax: 49.87,
      temperatureMaxTime: 1512853200,
      apparentTemperatureMin: 21.42,
      apparentTemperatureMinTime: 1512813600,
      apparentTemperatureMax: 45.12,
      apparentTemperatureMaxTime: 1512853200,
      dewPoint: 21.27,
      humidity: 0.6,
      windSpeed: 5.13,
      windGust: 15.4,
      windBearing: 320,
      visibility: 10,
      cloudCover: 0,
      pressure: 1022.46
    },
    {
      type: 'DailyData',
      sunriseTime: 1512912429,
      sunsetTime: 1512947239,
      moonPhase: 0.76,
      icon: 'clear-day',
      summary: 'Clear throughout the day.',
      precipitationIntensity: 0,
      precipitationIntensityMax: 0,
      precipitationIntensityMaxTime: 0,
      precipitationProbability: 0,
      temperatureMin: 24.89,
      temperatureMinTime: 1512889200,
      temperatureMax: 63.39,
      temperatureMaxTime: 1512939600,
      apparentTemperatureMin: 21.23,
      apparentTemperatureMinTime: 1512892800,
      apparentTemperatureMax: 63.39,
      apparentTemperatureMaxTime: 1512939600,
      dewPoint: 21.56,
      humidity: 0.49,
      windSpeed: 3.35,
      windGust: 10.44,
      windBearing: 268,
      visibility: 9.97,
      cloudCover: 0,
      pressure: 1023.3
    },
    {
      type: 'DailyData',
      sunriseTime: 1512998874,
      sunsetTime: 1513033648,
      moonPhase: 0.8,
      icon: 'partly-cloudy-night',
      summary: 'Partly cloudy starting in the afternoon.',
      precipitationIntensity: 0,
      precipitationIntensityMax: 0.0001,
      precipitationIntensityMaxTime: 1513036800,
      precipitationProbability: 0,
      temperatureMin: 33.97,
      temperatureMinTime: 1512997200,
      temperatureMax: 67.02,
      temperatureMaxTime: 1513022400,
      apparentTemperatureMin: 29.89,
      apparentTemperatureMinTime: 1512997200,
      apparentTemperatureMax: 67.02,
      apparentTemperatureMaxTime: 1513022400,
      dewPoint: 21.88,
      humidity: 0.41,
      windSpeed: 7.17,
      windGust: 30.35,
      windBearing: 320,
      visibility: 10,
      cloudCover: 0.16,
      pressure: 1020.4
    },
    {
      type: 'DailyData',
      sunriseTime: 1513085318,
      sunsetTime: 1513120058,
      moonPhase: 0.83,
      icon: 'clear-day',
      summary: 'Clear throughout the day.',
      precipitationIntensity: 0.0001,
      precipitationIntensityMax: 0.0002,
      precipitationIntensityMaxTime: 1513058400,
      precipitationProbability: 0.08,
      precipitationType: 'rain',
      temperatureMin: 26,
      temperatureMinTime: 1513083600,
      temperatureMax: 49.86,
      temperatureMaxTime: 1513112400,
      apparentTemperatureMin: 17,
      apparentTemperatureMinTime: 1513083600,
      apparentTemperatureMax: 46.2,
      apparentTemperatureMaxTime: 1513112400,
      dewPoint: 24.26,
      humidity: 0.62,
      windSpeed: 6.08,
      windGust: 30.43,
      windBearing: 321,
      visibility: 10,
      cloudCover: 0.02,
      pressure: 1026.87
    },
    {
      type: 'DailyData',
      sunriseTime: 1513171761,
      sunsetTime: 1513206470,
      moonPhase: 0.86,
      icon: 'partly-cloudy-night',
      summary: 'Partly cloudy overnight.',
      precipitationIntensity: 0.0001,
      precipitationIntensityMax: 0.0003,
      precipitationIntensityMaxTime: 1513220400,
      precipitationProbability: 0.05,
      precipitationType: 'rain',
      temperatureMin: 29.97,
      temperatureMinTime: 1513170000,
      temperatureMax: 60.75,
      temperatureMaxTime: 1513198800,
      apparentTemperatureMin: 22.14,
      apparentTemperatureMinTime: 1513170000,
      apparentTemperatureMax: 60.75,
      apparentTemperatureMaxTime: 1513198800,
      dewPoint: 26.64,
      humidity: 0.58,
      windSpeed: 5.42,
      windGust: 21.45,
      windBearing: 272,
      visibility: 10,
      cloudCover: 0.06,
      pressure: 1014.88
    },
    {
      type: 'DailyData',
      sunriseTime: 1513258202,
      sunsetTime: 1513292885,
      moonPhase: 0.89,
      icon: 'partly-cloudy-day',
      summary: 'Mostly cloudy throughout the day.',
      precipitationIntensity: 0.0002,
      precipitationIntensityMax: 0.0006,
      precipitationIntensityMaxTime: 1513306800,
      precipitationProbability: 0.05,
      precipitationType: 'rain',
      temperatureMin: 32.73,
      temperatureMinTime: 1513252800,
      temperatureMax: 49.47,
      temperatureMaxTime: 1513285200,
      apparentTemperatureMin: 26.65,
      apparentTemperatureMinTime: 1513256400,
      apparentTemperatureMax: 44.96,
      apparentTemperatureMaxTime: 1513285200,
      dewPoint: 29.43,
      humidity: 0.69,
      windSpeed: 8.54,
      windGust: 33.97,
      windBearing: 332,
      visibility: 10,
      cloudCover: 0.68,
      pressure: 1017.98
    }
  ]
};

const projectData = {
  type: 'Project',
  id: 83711,
  dateFormat: 'MM/dd/YYYY',
  milesPerHour: false,
  inches: false,
  fahrenheit: false,
  includeWorkLogs: true,
  includeHours: true,
  includeHoursToDate: true,
  includeStampsForPhotos: true,
  includeStampsForEntries: true,
  includeQuantity: true,
  includeNotes: true,
  includeSafetyObservations: true,
  includeQualityControlObservations: true,
  includeDailySurvey: true,
  copyWorkLog: true,
  copyWorkLogHours: true,
  copyWorkLogWorkers: true,
  copyWorkLogPayrollNote: true,
  copyWorkLogDescription: false,
  externalMembersRecipients: [],
  superDailyIndex: false,
  internalMembersRecipients: ['nick.ryall@gmail.com'],
  frequency: 'WEEKLY',
  intervals: [2, 5, 6],
  weatherIntervals: ['07:00', '12:00', '16:00'],
  emailInterval: '02:00',
  sendBySign: false,
  hideEmptySections: false,
  includeWeather: true,
  questions: [
    {
      type: 'ReportQuestion',
      id: 555924,
      tag: 0,
      category: 'CATEGORY_SAFETY',
      question: 'Any incidents?',
      required: true
    },
    {
      type: 'ReportQuestion',
      id: 533720,
      tag: 0,
      category: 'CATEGORY_INSPECTION',
      question: 'Who inspected what?',
      required: true
    },
    {
      type: 'ReportQuestion',
      id: 376502,
      tag: 0,
      category: 'CATEGORY_DELAYS',
      question: 'Things get held up?',
      required: true
    },
    {
      type: 'ReportQuestion',
      id: 376501,
      tag: 0,
      category: 'CATEGORY_VISITORS',
      question: 'Who visited?',
      required: true
    }
  ],
  includeTimeCards: true,
  includeTimeCardsForExternalMembers: false,
  name: 'Morgan Street Appartments',
  projectNo: 'e454564909',
  address: {
    type: 'Address',
    streetAddress: '89 Titirangi Road',
    city: 'Auckland',
    state: 'Auckland',
    postCode: '0600',
    country: 'NZ',
    geolocation: {
      lat: -36.914376,
      lng: 174.670659
    }
  },
  startDate: '2018-02-22',
  endDate: '2018-02-28',
  projectState: 'ACTIVE',
  generalContractor: {
    type: 'ProjectTeam',
    id: 83711,
    createdTimestamp: 1519256168000,
    updatedTimestamp: 1521406736000,
    updatedBy: 28425,
    projectTeamType: 'GENERAL_CONTRACTOR',
    projectState: 'ACTIVE',
    startDate: '2018-02-22',
    endDate: '2018-02-28',
    companyRef: {
      id: 1,
      name: 'BiznessName1'
    },
    members: [
      {
        id: 1
      },
      {
        id: 2
      }
    ]
  },
  collaborators: [
    {
      id: 56778,
      type: 'ProjectTeam',
      companyRef: {
        id: 2,
        name: 'BiznessName2'
      },
      members: [
        {
          id: 4
        }
      ]
    },
    {
      id: 67889,
      companyRef: {
        id: 3,
        name: 'BiznessName3'
      },
      type: 'ProjectTeam',
      members: [
        {
          id: 3
        }
      ]
    }
  ],
  projectImage: {
    type: 'Media',
    id: 2504617,
    createdTimestamp: 1521406736000,
    createdBy: 28425,
    fileName: 'project_photo.jpg',
    mediaType: 'IMAGE',
    contentUrl:
      'https://s3.amazonaws.com/raken-dev/2018/03/2634774b-250a-4bba-93c3-ba60c09413e0',
    thumbUrl:
      'https://s3.amazonaws.com/raken-dev/2018/03/2634774b-250a-4bba-93c3-ba60c09413e0_thumb3287946714578561342_thumb.jpg',
    contentType: 'image/jpeg',
    etag: 'image/jpeg',
    fileSize: 1506503,
    uploadDate: 1520547399000
  },
  projectLogo: {
    type: 'Media',
    id: 2504618,
    createdTimestamp: 1521406736000,
    createdBy: 28425,
    fileName: 'project_photo.jpg',
    mediaType: 'IMAGE',
    contentUrl:
      'https://s3.amazonaws.com/raken-dev/2018/03/39cfd3e2-8967-40cb-a0f3-9ca9d5eba6da',
    thumbUrl:
      'https://s3.amazonaws.com/raken-dev/2018/03/39cfd3e2-8967-40cb-a0f3-9ca9d5eba6da_thumb6027327847131466032_thumb.jpg',
    contentType: 'image/jpeg',
    etag: 'image/jpeg',
    fileSize: 1181230,
    uploadDate: 1521252031000
  },
  teamId: 83711,
  teamType: 'GENERAL_CONTRACTOR',
  templateId: 24169,
  primaryColor: '#B6238D',
  defaultWorkLogType: 'CREW'
};

const companyPermissionData = {
  role: 'ROLE_ACCOUNT_ADMIN',
  roleName: 'Account Administrator',
  description: 'Can create new projects',
  enabled: true,
  permissionEnum: 'CREATE_NEW_PROJECTS'
};

const integrationData = {
  service: {
    type: 'CloudService',
    id: 109,
    _links: {
      authUrl: {
        href:
          'https://sandbox.procore.com/oauth/authorize?response_type=code&redirect_uri=https://develop.rakenapp.com/apps/procore/authorize&client_id=002b02edbd221bc6ebda5f5fcac40eeeb724c761d9b1a0617a853fdd4e079162'
      },
      providerUrl: {
        href: 'http://www.procore.com'
      }
    },
    createdTimestamp: 1541386515000,
    updatedTimestamp: 1541460042000,
    updatedBy: 40433,
    updatedByRef: {
      id: 40433,
      name: 'gc@rakenapp.com',
      firstName: 'GC',
      lastName: 'Admin',
      active: true
    },
    createdBy: 40433,
    createdByRef: {
      id: 40433,
      name: 'gc@rakenapp.com',
      firstName: 'GC',
      lastName: 'Admin',
      active: true
    },
    providerRef: {
      id: 1004,
      name: 'Procore'
    },
    tokenType: 'bearer',
    companyRef: {
      id: 31973,
      name: 'NZ General Contractor'
    },
    status: 'CONNECTED'
  },
  external: [
    {
      company: {
        id: '299',
        name: 'Raken'
      },
      projects: [
        {
          id: '279',
          name: 'Procore Project'
        },
        {
          id: '404',
          name: 'vchurukanau'
        }
      ]
    }
  ],
  projectRef: {
    id: 72654,
    name: 'Sample Project'
  },
  mapping: {
    externalProjectId: '279',
    externalCompanyId: '299'
  }
};

const cloudServiceData = {
  type: 'CloudService',
  _links: {
    authUrl: {
      href:
        'https://app.box.com/api/oauth2/authorize?response_type=code&client_id=mqo6g2iyf6avl52c647qb7pyf9idboco&redirect_uri=https://develop.rakenapp.com/apps/box/authorize&state=eyJwcm9qZWN0SWQiOjcyNjU0fQ=='
    },
    providerUrl: {
      href: 'https://www.box.com'
    }
  },
  createdBy: -1,
  providerRef: {
    id: 1000,
    name: 'Box'
  },
  projectRef: {
    id: 72654,
    name: 'Sample Project'
  },
  status: 'NOT_CONNECTED'
};

const subscriptionData = {
  active: true,
  autoRenew: true,
  billingPlanKey: 'performance',
  billingPlanName: 'Performance',
  companyId: 22649,
  deleting: false,
  discount: 0,
  endDate: '2020-03-18',
  fetching: false,
  forceDowngrade: false,
  isDiscountPermanent: false,
  periodType: 'ANNUAL',
  pricePerSeat: 444,
  pricePerSeatToday: 417.31,
  saving: false,
  seats: 6,
  seatsInUse: 6,
  startDate: '2019-03-19',
  subscriptionState: 'ACTIVE',
  trialEndDate: undefined,
  type: 'Subscription',
  upcomingBillingAmount: 266400,
  upcomingBillingDate: '2020-03-19',
  upcomingBillingPlanKey: undefined,
  upcomingPeriodType: undefined,
  upcomingSubscriptionPlan: undefined
};

export {
  userData,
  meData,
  companyData,
  dailyReportData,
  projectMeasureData,
  insightsPeriodData,
  weatherData,
  projectData,
  companyPermissionData,
  integrationData,
  cloudServiceData,
  subscriptionData
};
