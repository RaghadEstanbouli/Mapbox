// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 20;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = true;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 7;
var followBearing = 15;
var followPitch = 0;

// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/vanritto/ckp6e61p50nwy17o58eyrsnoe',
    accessToken: 'pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ',
    // showMarkers: true,
    // markerColor: 'green',
    theme: 'liberty',
    alignment: 'left',
    title: 'Liberty Project',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
//--------START----------//               
    {
        id: 'start',
        alignment: 'right',
        // hidden: false,
        title: 'Start Location: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        
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
//--------------------------------------------------------------------------
    {
        //id: 'drive-slide-0',
        id: '0',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
        onChapterExit: []
    },    
//--------STOP 1----------//   
    {
        id: '1',
        title: 'STOP 1: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
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
//--------------------------------------------------------------------------
    {
        id: '2',
        alignment: 'center',
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
//--------STOP 2----------// 
    {
        id: '3',
        title: 'STOP 2: Why Mozambique?',
        image: './Images/TestImage2.png',
        description:'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
        location: {
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
//--------------------------------------------------------------------------
    {
    id: '4',
    hidden: true,
    alignment: 'center',
    location: {
        center: { lon: -84.66245, lat: 47.95360 },
        zoom: 9.59,
        pitch: 60.00,
        bearing: -88.23 
    },
    onChapterEnter: [
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
        //     layer: 'stop-3',
        //     opacity: 0
        // }
    ]
    },
//--------STOP 3----------// 
    {
        id: '5',
        title: 'Stop 3: Our Response to the Numbers.',
        image: './Images/TestImage2.png',
        description: 'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
        location: {
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
//--------STOP 4----------// 
{
    id: '6',
    title: 'Stop 4: What areas are we focusing on?',
    image: './Images/TestImage2.png',
    description: 'The main areas that the Liberty Project works in is: Education, Health education, vocational training, trauma therapy.',
    location: {
        center: { lon: -84.66245, lat: 47.95360 },
        zoom: 9.59,
        pitch: 60.00,
        bearing: -88.23 
    },
     mapAnimation: 'flyTo',
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

    ]
},
//--------STOP 5----------// 
{
    id: '7',
    title: 'Stop 5: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
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
//--------------------------------------------------------------------------
{
    id: '8',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//--------STOP 6----------// 
{
    id: '9',
    title: 'Stop 6: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
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
//--------STOP 7----------// 
{
    id: '10',
    title: 'Stop 7: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        // center: { lon: -85.54922, lat: 48.65097 },
        // zoom: 12.13,
        // pitch: 60.00,
        // bearing: -73.16
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
//--------STOP 8----------// 
{
    id: '11',
    title: 'Stop 8: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
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
//--------------------------------------------------------------------------to here
    {
        id: '12',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '13',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '14',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '15',
        title: 'Stop 13: Partner with Us',
        image: './Images/TestImage2.png',
        description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
        location: {
            // center: { lon: -80.44140, lat: 45.66449 },
            // zoom: 10.93,
            // pitch: 60.00,
            // bearing: -23.43

            center: { lon: -78.99838, lat: 44.55062 },
            zoom: 9.29,
            pitch: 60.00,
            bearing: -21.03
        },
        onChapterEnter: [
            {
            layer: 'stop-13',
            opacity: 1
            }
        ],
        onChapterExit: []
    },
    {
        id: '16',
        title: 'Stop 14: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        location:  {
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
    },
    {
        id: '17',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '18',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '19',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '20',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '21',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    }  , 
    //--------------------------------------------------------------------------to here
    {
        id: '22',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '23',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '24',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '25',
        title: 'Stop 13: Partner with Us',
        image: './Images/TestImage2.png',
        description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
        location: {
            // center: { lon: -80.44140, lat: 45.66449 },
            // zoom: 10.93,
            // pitch: 60.00,
            // bearing: -23.43

            center: { lon: -78.99838, lat: 44.55062 },
            zoom: 9.29,
            pitch: 60.00,
            bearing: -21.03
        },
        onChapterEnter: [
            {
            layer: 'stop-13',
            opacity: 1
            }
        ],
        onChapterExit: []
    },
    {
        id: '26',
        title: 'Stop 14: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        location:  {
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
    },
    {
        id: '27',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '28',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '29',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '30',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '31',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    }  ,
    
       //--------------------------------------------------------------------------to here
    {
        id: '32',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '33',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '34',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '35',
        title: 'Stop 13: Partner with Us',
        image: './Images/TestImage2.png',
        description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
        location: {
            // center: { lon: -80.44140, lat: 45.66449 },
            // zoom: 10.93,
            // pitch: 60.00,
            // bearing: -23.43

            center: { lon: -78.99838, lat: 44.55062 },
            zoom: 9.29,
            pitch: 60.00,
            bearing: -21.03
        },
        onChapterEnter: [
            {
            layer: 'stop-13',
            opacity: 1
            }
        ],
        onChapterExit: []
    },
    {
        id: '36',
        title: 'Stop 14: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        location:  {
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
    },
    {
        id: '37',
        title: 'Stop 10: End Exploitation',
        image: './Images/TestImage2.png',
        description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
        id: '38',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '39',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
        id: '40',
        title: 'Stop 11: Bringing Hope',
        image: './Images/TestImage2.png',
        description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
        id: '41',
        title: 'Stop 12: Moving',
        image: './Images/TestImage2.png',
        description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here
{
    id: '42',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '43',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '44',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '45',
    title: 'Stop 13: Partner with Us',
    image: './Images/TestImage2.png',
    description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
    location: {
        // center: { lon: -80.44140, lat: 45.66449 },
        // zoom: 10.93,
        // pitch: 60.00,
        // bearing: -23.43

        center: { lon: -78.99838, lat: 44.55062 },
        zoom: 9.29,
        pitch: 60.00,
        bearing: -21.03
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }
    ],
    onChapterExit: []
},
{
    id: '46',
    title: 'Stop 14: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
    location:  {
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
},
{
    id: '47',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '48',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '49',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '50',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '51',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here
{
    id: '52',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '53',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '54',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '55',
    title: 'Stop 13: Partner with Us',
    image: './Images/TestImage2.png',
    description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
    location: {
        // center: { lon: -80.44140, lat: 45.66449 },
        // zoom: 10.93,
        // pitch: 60.00,
        // bearing: -23.43

        center: { lon: -78.99838, lat: 44.55062 },
        zoom: 9.29,
        pitch: 60.00,
        bearing: -21.03
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }
    ],
    onChapterExit: []
},
{
    id: '56',
    title: 'Stop 14: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
    location:  {
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
},
{
    id: '57',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '58',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '59',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '60',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '61',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here
{
    id: '62',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '63',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '64',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '65',
    title: 'Stop 13: Partner with Us',
    image: './Images/TestImage2.png',
    description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
    location: {
        // center: { lon: -80.44140, lat: 45.66449 },
        // zoom: 10.93,
        // pitch: 60.00,
        // bearing: -23.43

        center: { lon: -78.99838, lat: 44.55062 },
        zoom: 9.29,
        pitch: 60.00,
        bearing: -21.03
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }
    ],
    onChapterExit: []
},
{
    id: '66',
    title: 'Stop 14: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
    location:  {
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
},
{
    id: '67',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '68',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '69',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '70',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '71',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here
{
    id: '72',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '73',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '74',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '75',
    title: 'Stop 13: Partner with Us',
    image: './Images/TestImage2.png',
    description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
    location: {
        // center: { lon: -80.44140, lat: 45.66449 },
        // zoom: 10.93,
        // pitch: 60.00,
        // bearing: -23.43

        center: { lon: -78.99838, lat: 44.55062 },
        zoom: 9.29,
        pitch: 60.00,
        bearing: -21.03
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }
    ],
    onChapterExit: []
},
{
    id: '76',
    title: 'Stop 14: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
    location:  {
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
},
{
    id: '77',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '78',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '79',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '80',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '81',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here
{
    id: '82',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '83',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '84',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '85',
    title: 'Stop 13: Partner with Us',
    image: './Images/TestImage2.png',
    description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
    location: {
        // center: { lon: -80.44140, lat: 45.66449 },
        // zoom: 10.93,
        // pitch: 60.00,
        // bearing: -23.43

        center: { lon: -78.99838, lat: 44.55062 },
        zoom: 9.29,
        pitch: 60.00,
        bearing: -21.03
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }
    ],
    onChapterExit: []
},
{
    id: '86',
    title: 'Stop 14: Working in Mozambique.',
    image: './Images/TestImage2.png',
    description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
    location:  {
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
},
{
    id: '87',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
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
    id: '88',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '89',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
    id: '90',
    title: 'Stop 11: Bringing Hope',
    image: './Images/TestImage2.png',
    description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
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
    id: '91',
    title: 'Stop 12: Moving',
    image: './Images/TestImage2.png',
    description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
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
//--------------------------------------------------------------------------to here

    ]
};