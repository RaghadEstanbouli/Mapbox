// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 13;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = true;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 5;
var followBearing = 13.81;
var followPitch = 60;//60.00;


// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    //style: 'mapbox://styles/vanritto/ckp6e61p50nwy17o58eyrsnoe',
    style:'mapbox://styles/raghadestanbouli/ckpbc5x6o053718pcf6oytbu1',
    accessToken: 'pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ',
     showMarkers: true,
    markerColor: '#f3a9cc',
    theme: 'liberty',
    alignment: 'left',
    title: 'Liberty Project',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'start',
            alignment: 'right',
            // hidden: false,
            title: 'Start Location',
            image: '',
            description: 'The start Location for the Bike fundraiser',

            location: {
                center: { lon: -89.26402, lat: 48.40116 },
                zoom: 6.65,
                pitch: 0.00,
                bearing: 0.000
            },
            onChapterEnter: [
                {
                    layer: 'start-finish',
                    opacity: 1
                    },
                    {
                    layer: 'stop-1',
                    opacity: 0
                    },
                    {
                    layer: 'stop-2',
                    opacity: 0
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
                    
            ],
            onChapterExit: [
                // {
                //     layer: 'start-finish',
                //     opacity: 0
                //     }
            ]
        },
        // {
        //     id: 'slide-0',
        //     title: 'Fundraiser',
        //     // image: './path/to/image/source.png',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     location: { 
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'drive-slide-0 ',
            title: 'STOP 1?',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
             location: {
                center: { lon: -88.29550, lat: 49.02125 },
                zoom: 11.67,
                pitch: 58.00,
                bearing: -92.80
            },
            onChapterEnter: [
                {
                    layer: 'stop-1',
                    opacity: 1
                    },
                    {
                    layer: 'stop-2',
                    opacity: 0
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }

            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-01',
            title: 'STOP 2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -87.87245, lat: 48.93681 },
                zoom: 14.67,
                pitch: 60.00,
                bearing: 144.00
            },
            onChapterEnter: [
                {
                    layer: 'stop-2',
                    opacity: 1
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }

            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-02',
            title: 'Stop 3',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            
            location: {
                center: { lon: -87.55311, lat: 48.88333 },
                zoom: 13.36,
                pitch: 60.00,
                bearing: -26.33
            },
            
            onChapterEnter: [
                {
                    layer: 'stop-3',
                    opacity: 1
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
  
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-03',
            title: 'Stop 4',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -87.08297, lat: 48.78774 },
                zoom: 13.94,
                pitch: 60.00,
                bearing: -122.33
            },
            // mapAnimation: 'flyTo',
            onChapterEnter: [ 
                {
                    layer: 'stop-4',
                    opacity: 1
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: [
                // {
                //     layer: 'stop-3',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'drive-slide-04',
            title: 'Stop 5',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
             location: {
                center: { lon: -85.56521, lat: 48.65917 },
                zoom: 12.40,
                pitch: 60.00,
                bearing: 157.87
            },
            onChapterEnter: [
                {
                    layer: 'stop-5',
                    opacity: 1
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },

        // You can add a normal slide in between the other slides
        {
            id: 'slide-4',
            title: 'i AM A STATIONARY cHAPTER. ',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                // center: [-84.748093, 47.472679],
                // zoom: 9.83,
                // pitch: 0.00,
                // bearing: 0.00 
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-05',
            title: 'STOP 6',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -84.84331, lat: 48.04251 },
                zoom: 13.61,
                pitch: 60.00,
                bearing: 59.47
            },
            onChapterEnter: [
                {
                    layer: 'stop-6',
                    opacity: 1
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-06',
            title: 'Stop 7',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -84.75043, lat: 47.47641 },
                zoom: 12.65,
                pitch: 60.00,
                bearing: -16.53
            },
            onChapterEnter: [
                {
                    layer: 'stop-7',
                    opacity: 1
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-07',
            title: 'STOP 8',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -84.28982, lat: 46.52451 },
                zoom: 12.50,
                pitch: 60.00,
                bearing: -27.15
            },
            onChapterEnter: [
                {
                    layer: 'stop-8',
                    opacity: 1
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-08',
            title: 'Stop 9',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
           location: {
            center: { lon: -83.79600, lat: 46.30525 },
            zoom: 13.65,
            pitch: 60.00,
            bearing: -7.15
            },
            onChapterEnter: [
                {
                    layer: 'stop-9',
                    opacity: 1
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-09',
            title: 'Stop 10',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -82.96184, lat: 46.18994 },
                zoom: 13.40,
                pitch: 60.00,
                bearing: -73.55
            },
            onChapterEnter: [
                {
                layer: 'stop-10',
                opacity: 1
                },
                {
                layer: 'stop-11',
                opacity: 0
                },
                {
                layer: 'stop-12',
                opacity: 0
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-10',
            title: 'Stop 11',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -81.77651, lat: 46.26548 },
                zoom: 13.00,
                pitch: 60.00,
                bearing: 176.89
            },
            onChapterEnter: [ 
                {
                layer: 'stop-11',
                opacity: 1
                },
                {
                layer: 'stop-12',
                opacity: 0
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'stops',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'drive-slide-11',
            title: 'Stop 12',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -81.05842, lat: 46.47903 },
                zoom: 13.16,
                pitch: 60.00,
                bearing: 54.54
            },
            
            onChapterEnter: [
                {
                layer: 'stop-12',
                opacity: 1
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-12',
            title: 'Stop 13',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
             location: {
                center: { lon: -80.42432, lat: 45.66348 },
                zoom: 12.93,
                pitch: 60.00,
                bearing: 144.73
            },
            onChapterEnter: [
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-13',
            title: 'Stop 14',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: { lon: -79.74440, lat: 45.14376 },
                zoom: 11.03,
                pitch: 0.00,
                bearing: -12.87
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        // {
        //     id: 'drive-slide-14',
        //     title: 'Stop 15',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};