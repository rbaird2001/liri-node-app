
var concertDet =[];
var l = [
  {
    offers: [ [Object] ],
    venue: {
      name: 'Amalie Arena',
      country: 'United States',
      region: 'FL',
      city: 'Tampa',
      latitude: '27.9427373',
      longitude: '-82.45177710000002'
    },
    datetime: '2019-10-09T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372659',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372659?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Bon Secours Wellness Arena',
      country: 'United States',
      region: 'SC',
      city: 'Greenville',
      latitude: '34.8526055',
      longitude: '-82.39153010000001'
    },
    datetime: '2019-10-11T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372657',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372657?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'State Farm Arena',
      country: 'United States',
      region: 'GA',
      city: 'Atlanta',
      latitude: '33.7572891',
      longitude: '-84.39632440000003'
    },
    datetime: '2019-10-12T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372646',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372646?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Royal Farms Arena',
      country: 'United States',
      region: 'MD',
      city: 'Baltimore',
      latitude: '39.2885817',
      longitude: '-76.61866680000003'
    },
    datetime: '2019-10-15T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372652',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372652?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Mohegan Sun Arena',
      country: 'United States',
      region: 'CT',
      city: 'Uncasville',
      latitude: '41.4915974',
      longitude: '-72.0914563'
    },
    datetime: '2019-10-17T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372658',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372658?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Bryce Jordan Center',
      country: 'United States',
      region: 'PA',
      city: 'University Park',
      latitude: '40.8086435',
      longitude: '-77.8558448'
    },
    datetime: '2019-10-18T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372655',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372655?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Wells Fargo Center',
      country: 'United States',
      region: 'PA',
      city: 'Philadelphia',
      latitude: '39.90120150000001',
      longitude: '-75.17197950000002'
    },
    datetime: '2019-10-20T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372649',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372649?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'U.S. Bank Arena',
      country: 'United States',
      region: 'OH',
      city: 'Cincinnati',
      latitude: '39.09791119999999',
      longitude: '-84.50462759999999'
    },
    datetime: '2019-10-22T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372661',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372661?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Target Center',
      country: 'United States',
      region: 'MN',
      city: 'Minneapolis',
      latitude: '44.979477',
      longitude: '-93.276158'
    },
    datetime: '2019-10-24T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372647',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372647?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Wells Fargo Arena',
      country: 'United States',
      region: 'IA',
      city: 'Des Moines',
      latitude: '41.591699',
      longitude: '-93.621761'
    },
    datetime: '2019-10-25T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372653',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372653?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Pepsi Center',
      country: 'United States',
      region: 'CO',
      city: 'Denver',
      latitude: '39.7486389',
      longitude: '-105.0075285'
    },
    datetime: '2019-10-27T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372662',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372662?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Vivint Smart Home Arena',
      country: 'United States',
      region: 'UT',
      city: 'Salt Lake City',
      latitude: '40.76772',
      longitude: '-111.901127'
    },
    datetime: '2019-10-28T18:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101487402',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101487402?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'MGM Grand Garden Arena',
      country: 'United States',
      region: 'NV',
      city: 'Las Vegas',
      latitude: '36.175',
      longitude: '-115.1363889'
    },
    datetime: '2019-10-30T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372651',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372651?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Staples Center',
      country: 'United States',
      region: 'CA',
      city: 'Los Angeles',
      latitude: '34.0430175',
      longitude: '-118.2672541'
    },
    datetime: '2019-11-01T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372656',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372656?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Honda Center',
      country: 'United States',
      region: 'CA',
      city: 'Anaheim',
      latitude: '33.807794',
      longitude: '-117.876512'
    },
    datetime: '2019-11-02T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372650',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372650?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Golden 1 Center',
      country: 'United States',
      region: 'CA',
      city: 'Sacramento',
      latitude: '38.5800073',
      longitude: '-121.5009825'
    },
    datetime: '2019-11-03T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372648',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372648?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Pechanga Arena San Diego',
      country: 'United States',
      region: 'CA',
      city: 'San Diego',
      latitude: '32.755274',
      longitude: '-117.212196'
    },
    datetime: '2019-11-05T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372663',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372663?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'Dickies Arena',
      country: 'United States',
      region: 'TX',
      city: 'Fort Worth',
      latitude: '32.7252778',
      longitude: '-97.3205556'
    },
    datetime: '2019-11-08T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372660',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372660?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  },
  {
    offers: [ [Object] ],
    venue: {
      name: 'BOK Center',
      country: 'United States',
      region: 'OK',
      city: 'Tulsa',
      latitude: '36.152766',
      longitude: '-95.99641600000001'
    },
    datetime: '2019-11-09T19:00:00',
    on_sale_datetime: '',
    description: '',
    lineup: [ 'twenty one pilots' ],
    id: '101372654',
    artist_id: '6986370',
    url: 'https://www.bandsintown.com/e/101372654?app_id=codingbootcamp&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event'
  }
]

for(i=0;i<l.length;i++){
    console.log(`${l[i].venue.name}  --  ${l[i].venue.city}  ${l[i].venue.region}, ${l[i].venue.country}`);
}
