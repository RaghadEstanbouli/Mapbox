var routeData = [];

var geojsonPoint = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
        
            ]
        }
    }]
};

function createLine() {

    // get the coordinates of the line you want to highlight
    let extentArray = routeData.features[0].geometry.coordinates;
    
    // create a turf linestring based on the line coordinates
    const line = turf.lineString(extentArray);

    // calculate the total length of the line
    const lineDistance = turf.lineDistance(line);

    // how many points you want along the path (more = smoother animation)
    const rects = driveTime;

    // calculate the distance between each point on the path
    const segments = lineDistance / rects;

    // what units do you want to use?
    const units = 'kilometers';

    // based on the number of points...
    for(let i = 0; i <= rects; i++) {

        // calculate point location for each segment
        const pointonline = turf.along(line, (segments * i));

        // push new x,y
        let newX = pointonline.geometry.coordinates[0];
        let newY = pointonline.geometry.coordinates[1];

        geojsonPoint.features[0].geometry.coordinates.push([newX, newY]);

        // draw our initinal point
        if (i === 0) {
            let initPoint = turf.point([newX, newY]);

            // if you want to follow the point...
            if (followPoint === true) {
            	map.setCenter([newX, newY]);
             
        	}

            map.getSource('pointSource').setData(initPoint);
        }

        // once 'i' equals the number of points then we're done building our line 
        if (i == rects) {
            map.getSource('lineSource').setData(geojsonPoint);
        }
    }

}

function changeCenter(index) {

    // Set center to a subsample of the line, say every 10th or 25th
    let subsampleIndex = 100;

    let currentJson = geojsonPoint.features[0].geometry.coordinates.slice(0,index);
    let center = geojsonPoint.features[0].geometry.coordinates[index];
    let centerX = center[0];
    let centerY = center[1];
    let movingLine = {
        "type": "FeatureCollection",
        "features": [{
            "type": "Feature",
            "geometry": {
                "type": "LineString",
                "coordinates": currentJson
            }
        }]
    };
    let movingPoint = turf.point([centerX, centerY]);
    map.getSource('lineSource').setData(movingLine);
    map.getSource('pointSource').setData(movingPoint);

    // if you want to follow the point...
    if (followPoint === true) {
      if (index % subsampleIndex == 0) {
        console.log("changeCenter(index) = ", index, center)
        map.flyTo({
  	        center: [centerX, centerY]
  	    });
      }
    }
}
// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 15;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 180;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

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
                center: [-89.2477,  48.3809],
                zoom: 12,
                
                
                'camera': {
                center: [-89.2477,  48.3809],
                zoom: 12,
                pitch: 80.00,
                bearing: 200.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-0',
            title: 'Fundraiser',
            // image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-88.351609,  49.00186],
                'camera': {
                center: [-88.351609,  49.00186],
                zoom: 12,
                pitch: 80.00,
                bearing: 200.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-0',
            title: 'DAy 1?',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-87.077195,  48.785168],
                'camera': {
                center: [-87.077195,  48.785168],
                zoom: 12,
                pitch: 80.00,
                bearing: 200.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'Day 2???',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-85.550095,  48.647444],
                'camera': {
                center: [-85.550095,  48.647444],
                zoom: 12,
                pitch: 80.00,
                bearing: 200.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-84.84697,  48.041381],
                'camera': {
                center: [-84.84697,  48.041381],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-84.748093,  47.472679],
                'camera': {
                center: [-84.748093,  47.472679],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
      
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-4',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-81.056687,  46.475716],
                'camera': {
                center: [-81.056687,  46.475716],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },

        // You can add a normal slide in between the other slides
        {
            id: 'slide-4',
            title: 'i AM A STATIONARY cHAPTER. ',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-78.980271,  44.535692],
                'camera': {
                center: [-78.980271,  44.535692],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            // mapAnimation: 'flyTo',
            rotateAnimation: true,
            // callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-79.738328,  45.17431],
                'camera': {
                center: [-79.738328,  45.17431],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-80.424973,  45.656305],
                'camera': {
                center: [-80.424973,  45.656305],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-81.776291,  46.259662],
                'camera': {
                center: [-81.776291,  46.259662],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-82.951829,  46.183651],
                'camera': {
                center: [-82.951829,  46.183651],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-83.781296,  46.320395],
                'camera': {
                center: [-83.781296,  46.320395],
                zoom: 12,
                pitch: 0.00,
                bearing: 0.00}
            },
            mapAnimation: 'flyTo',
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
