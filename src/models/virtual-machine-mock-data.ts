import { Server } from './virtual-machine';

export const SERVERS: Server[] = [
  {
    'id': '50123745-c85c-4ee1-ba7e-54281db3a900',
    'name': 'Cloud2',
    'links': [
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/v2.1/538bb7eea942429e89457637614bfd0b/servers/50123745-c85c-4ee1-ba7e-54281db3a900',
        'relation': 'SELF'
      },
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/servers/50123745-c85c-4ee1-ba7e-54281db3a900',
        'relation': 'BOOKMARK'
      }
    ],
    'uuid': null,
    'updated': '2018-05-21T14:54:14.000+0000',
    'created': '2018-05-21T14:47:06.000+0000',
    'hostId': '521246ef03b29dc146e1c16c809a0f5b4dbb06cec56d507676b32336',
    'accessIPv4': null,
    'accessIPv6': null,
    'status': 'ACTIVE',
    'image': {
      'id': 'ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/images/ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'flavor': {
      'id': '2',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/flavors/2',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'addresses': {
      'empty': false
    },
    'metadata': {},
    'extendedStatus': {
      'present': true
    },
    'extendedAttributes': {
      'present': false
    },
    'tenantId': '538bb7eea942429e89457637614bfd0b',
    'userId': '78dbac04b75f46a8bbb74688bf8477fb',
    'keyName': null,
    'configDrive': null,
    'diskConfig': {
      'present': true
    },
    'availabilityZone': {
      'present': true
    }
  },
  {
    'id': '55af2938-58e9-44dc-b353-54ca93673484',
    'name': 'Cloud2',
    'links': [
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/v2.1/538bb7eea942429e89457637614bfd0b/servers/55af2938-58e9-44dc-b353-54ca93673484',
        'relation': 'SELF'
      },
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/servers/55af2938-58e9-44dc-b353-54ca93673484',
        'relation': 'BOOKMARK'
      }
    ],
    'uuid': null,
    'updated': '2018-05-20T20:51:40.000+0000',
    'created': '2018-05-20T20:45:54.000+0000',
    'hostId': '521246ef03b29dc146e1c16c809a0f5b4dbb06cec56d507676b32336',
    'accessIPv4': null,
    'accessIPv6': null,
    'status': 'ERROR',
    'image': {
      'id': 'ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/images/ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'flavor': {
      'id': '2',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/flavors/2',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'addresses': {
      'empty': false
    },
    'metadata': {},
    'extendedStatus': {
      'present': true
    },
    'extendedAttributes': {
      'present': false
    },
    'tenantId': '538bb7eea942429e89457637614bfd0b',
    'userId': '78dbac04b75f46a8bbb74688bf8477fb',
    'keyName': null,
    'configDrive': null,
    'diskConfig': {
      'present': true
    },
    'availabilityZone': {
      'present': true
    }
  },
  {
    'id': '39376396-ad78-4932-b775-f558e924e7b7',
    'name': 'Cloud6',
    'links': [
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/v2.1/538bb7eea942429e89457637614bfd0b/servers/39376396-ad78-4932-b775-f558e924e7b7',
        'relation': 'SELF'
      },
      {
        'type': {
          'present': false
        },
        'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/servers/39376396-ad78-4932-b775-f558e924e7b7',
        'relation': 'BOOKMARK'
      }
    ],
    'uuid': null,
    'updated': '2018-05-20T16:15:11.000+0000',
    'created': '2018-05-20T16:08:24.000+0000',
    'hostId': 'bc1bf41ab33a7163d61188271926f90b9481963dbb4eecd4a131cea9',
    'accessIPv4': null,
    'accessIPv6': null,
    'status': 'BUILD',
    'image': {
      'id': 'ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/images/ed0b5d4e-8b62-4032-81bc-4e6d2e904e4f',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'flavor': {
      'id': '2',
      'name': null,
      'links': [
        {
          'type': {
            'present': false
          },
          'href': 'http://cloud-main.bitp.kiev.ua:8774/538bb7eea942429e89457637614bfd0b/flavors/2',
          'relation': 'BOOKMARK'
        }
      ]
    },
    'addresses': {
      'empty': false
    },
    'metadata': {},
    'extendedStatus': {
      'present': true
    },
    'extendedAttributes': {
      'present': false
    },
    'tenantId': '538bb7eea942429e89457637614bfd0b',
    'userId': '98e1a064d3b24416a1f77e333af0706c',
    'keyName': null,
    'configDrive': null,
    'diskConfig': {
      'present': true
    },
    'availabilityZone': {
      'present': true
    }
  }
];
//   [
//   {
//     id: 1,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: true
//   },
//   {
//     id: 2,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: true
//   },
//   {
//     id: 3,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: false
//   },
//   {
//     id: 4,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: false
//   },
//   {
//     id: 5,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: true
//   },
//   {
//     id: 6,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: false
//   },
//   {
//     id: 7,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: false
//   },
//   {
//     id: 8,
//     userId: '1',
//     hostId: '1',
//     accessIPv4: 'First machine',
//     accessIPv6: '1',
//     status: true
//   }
// ];
