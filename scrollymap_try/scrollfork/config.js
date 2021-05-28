// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 15;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 180;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = true;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 15;
var followBearing = -10;
var followPitch = 80;
// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiaG9semVnZyIsImEiOiJja292eXAzbnUwMHdhMnVsdTM4c2MyOTF3In0.6RiKfls_ZXfiI0k-q7gLDQ',
    showMarkers: true,
    theme: 'dark',
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
                center: [-89.2477,  48.3809]},
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-0',
            title: 'Fundraiser',
            // image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-88.351609,  49.00186]
            },
            
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'DAy 1?',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-87.077195,  48.785168]
            },
            
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Day 2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-85.550095,  48.647444],
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title 3',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-84.84697,  48.041381]
                        },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Second Title 4',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-84.748093,  47.472679]
            },
            mapAnimation: 'flyTo',
      
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Second Title 5',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-81.056687,  46.475716],
            },

            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in between the other slides
        {
            id: 'slide-4',
            title: 'i AM A STATIONARY cHAPTER. 6',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-78.980271,  44.535692]
            },

            // mapAnimation: 'flyTo',
            //rotateAnimation: true,
            // callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'Second Title 7',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79.738328,  45.17431]
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Second Title 8',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-80.424973,  45.656305]
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'Second Title 9',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-81.776291,  46.259662]
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: 'Second Title 10',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.951829,  46.183651]
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: 'Second Title 11',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-83.781296,  46.320395]
            },
            onChapterEnter: [],
            onChapterExit: []
        }
        
        // ,{
        //     id: 'drive-slide-10',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         'camera': {
        //         center: [-89.2477,  48.3809],
        //         zoom: 12,
        //         pitch: 0.00,
        //         bearing: 0.00}
        //     },
        //     mapAnimation: 'flyTo',
        //     onChapterEnter: [ 
        //         // {
        //         // layer: 'stops',
        //         // opacity: 1
        //         // }
        //     ],
        //     onChapterExit: [
        //         // {
        //         //     layer: 'stops',
        //         //     opacity: 0
        //         // }
        //     ]
        // },
        // {
        //     id: 'drive-slide-11',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         'camera': {
        //         center: [-89.2477,  48.3809],
        //         zoom: 12,
        //         pitch: 0.00,
        //         bearing: 0.00}
        //     },
        //     mapAnimation: 'flyTo',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-12',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         'camera': {
        //         center: [-89.2477,  48.3809],
        //         zoom: 12,
        //         pitch: 0.00,
        //         bearing: 0.00}
        //     },
        //     mapAnimation: 'flyTo',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-13',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         'camera': {
        //         center: [-89.2477,  48.3809],
        //         zoom: 12,
        //         pitch: 0.00,
        //         bearing: 0.00}
        //     },
        //     mapAnimation: 'flyTo',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-14',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {
        //         'camera': {
        //         center: [-89.2477,  48.3809],
        //         zoom: 12,
        //         pitch: 0.00,
        //         bearing: 0.00}
        //     },
        //     mapAnimation: 'flyTo',
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};