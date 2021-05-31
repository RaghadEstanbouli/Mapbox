// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 16;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = false;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 5;
var followBearing = 13.81;
var followPitch = 60;//60.00;


// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/vanritto/ckp6e61p50nwy17o58eyrsnoe',
    accessToken:'pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ',
    //style:'mapbox://styles/raghadestanbouli/ckpbc5x6o053718pcf6oytbu1',
    //accessToken: 'pk.eyJ1IjoicmFnaGFkZXN0YW5ib3VsaSIsImEiOiJja21vdmE1cWgyOHYxMnVtZ2EweTlzNW9rIn0.pH1YN5MUUxqb-py-3V6fcg',
     showMarkers: false,
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
                center: { lon: -85.19922, lat: 45.69835 },
                zoom: 6.25,
                pitch: 60.00,
                bearing: 0.00
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
        //     hidden: true,
        //     location: { 
        //         center: { lon: -89.04821, lat: 48.50584 },
        //         zoom: 9.08,
        //         pitch: 60.00,
        //         bearing: -115.20
        //     },
        // },
        // {
        //     id: 'slide-0',
        //     hidden: true,
        //     location: { 
        //         center: { lon: -88.69127, lat: 48.64896 },
        //         zoom: 9.17,
        //         pitch: 60.00,
        //         bearing: -137.32
        //     },
        // },
        // {
        //     id: 'slide-0',
        //     location: {
        //         center: { lon: -88.33600, lat: 48.95806 },
        //         zoom: 9.38,
        //         pitch: 60.00,
        //         bearing: -177.32
        //     },
        // },
        {
            id: 'drive-slide-0 ',
            title: 'STOP 1?',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
             location: {
                center: { lon: -88.25617, lat: 49.01905 },
                zoom: 10,
                pitch: 60.00,
                bearing: -105.04
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
                // center: { lon: -87.87278, lat: 48.93661 },
                // zoom: 9.75,
                // pitch: 60.00,
                // bearing: -65.84
//4
                center: { lon: -87.07819, lat: 48.78017 },
                zoom: 13.13,
                pitch: 60.00,
                bearing: -159.41
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
                // center: { lon: -87.55436, lat: 48.88640 },
                // zoom: 9.5,
                // pitch: 60.00,
                // bearing: -40.24
                center: { lon: -85.54922, lat: 48.65097 },
                zoom: 12.13,
                pitch: 60.00,
                bearing: -73.16
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
                // center: { lon: -87.07819, lat: 48.78017 },
                // zoom: 13.13,
                // pitch: 60.00,
                // bearing: -159.41

                center: { lon: -84.74236, lat: 47.44431 },
                zoom: 12.25,
                pitch: 60.00,
                bearing: -13.71
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
                // center: { lon: -85.54922, lat: 48.65097 },
                // zoom: 12.13,
                // pitch: 60.00,
                // bearing: -73.16
                center: { lon: -84.74236, lat: 47.44431 },
                zoom: 12.25,
                pitch: 60.00,
                bearing: -13.71
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
        // {
        //     id: 'slide-4',
        //     title: 'i AM A STATIONARY cHAPTER. ',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         // center: [-84.748093, 47.472679],
        //         // zoom: 9.83,
        //         // pitch: 0.00,
        //         // bearing: 0.00 
        //     },
        //     // mapAnimation: 'flyTo',
        //     // rotateAnimation: false,
        //     // callback: '',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'drive-slide-05',
            title: 'STOP 6',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                // center: { lon: -84.80021, lat: 47.97711 },
                // zoom: 13.31,
                // pitch: 60.00,
                // bearing: 26.56
                center: { lon: -84.27767, lat: 46.52595 },
                zoom: 11.81,
                pitch: 60.00,
                bearing: -127.31
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
                // center: { lon: -84.74236, lat: 47.44431 },
                // zoom: 12.25,
                // pitch: 60.00,
                // bearing: -13.71
                center: { lon: -83.77957, lat: 46.31815 },
                zoom: 12.25,
                pitch: 60.00,
                bearing: -68.99
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
                // center: { lon: -84.27767, lat: 46.52595 },
                // zoom: 11.81,
                // pitch: 60.00,
                // bearing: -127.31
                center: { lon: -82.95255, lat: 46.18349 },
                zoom: 13.14,
                pitch: 60.00,
                bearing: -96.19
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
            // center: { lon: -83.77957, lat: 46.31815 },
            // zoom: 12.25,
            // pitch: 60.00,
            // bearing: -68.99
            center: { lon: -81.75867, lat: 46.25789 },
            zoom: 12.39,
            pitch: 60.00,
            bearing: -177.59
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
                center: { lon: -81.04895, lat: 46.47691 },
                zoom: 11.64,
                pitch: 60.00,
                bearing: -87.19
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
                // center: { lon: -81.75867, lat: 46.25789 },
                // zoom: 12.39,
                // pitch: 60.00,
                // bearing: -177.59
                center: { lon: -80.44140, lat: 45.66449 },
                zoom: 10.93,
                pitch: 60.00,
                bearing: -23.43
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
                // center: { lon: -81.04895, lat: 46.47691 },
                // zoom: 11.64,
                // pitch: 60.00,
                // bearing: -87.19
                center: { lon: -79.77637, lat: 45.16116 },
                zoom: 9.93,
                pitch: 60.00,
                bearing: 0.00
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
                // center: { lon: -80.44140, lat: 45.66449 },
                // zoom: 10.93,
                // pitch: 60.00,
                // bearing: -23.43
                center: { lon: -79.77637, lat: 45.16116 },
                zoom: 9.93,
                pitch: 60.00,
                bearing: 0.00
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
                // center: { lon: -79.77637, lat: 45.16116 },
                // zoom: 9.93,
                // pitch: 60.00,
                // bearing: 0.00
                center: { lon: -78.34254, lat: 44.32538 },
                zoom: 9.79,
                pitch: 60.00,
                bearing: -41.03
            },
            onChapterEnter: [
                {
                 }
            ],
            onChapterExit: []
        }
        
    ]
};