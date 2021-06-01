// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 30;

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
            // center: { lon: -88.25617, lat: 49.01905 },
            // zoom: 10,
            // pitch: 60.00,
            // bearing: -105.04
            center: { lon: -89.04821, lat: 48.50584 },
            zoom: 9.08,
            pitch: 60.00,
            bearing: -115.20
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

    {
        //id: 'drive-slide-01',
        id: '1',
        hidden: true,
        alignment: 'center',
        location: {
            center: { lon: -88.25617, lat: 49.01905 },
            zoom: 10,
            pitch: 60.00,
            bearing: -105.04
            // center: { lon: -89.04821, lat: 48.50584 },
            // zoom: 9.08,
            // pitch: 60.00,
            // bearing: -115.20
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
        id: '2',
        title: 'STOP 1: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        location: { 
            center: { lon: -88.25617, lat: 49.01905 },
            zoom: 10,
            pitch: 60.00,
            bearing: -105.04
            // center: { lon: -89.04821, lat: 48.50584 },
            // zoom: 9.08,
            // pitch: 60.00,
            // bearing: -115.20
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
        id: '3',
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
        id: '4',
        title: 'STOP 2: Why Mozambique?',
        image: './Images/TestImage2.png',
        description:'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
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
        id: '5',
        hidden: true,
        alignment: 'center',
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
    id: '6',
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
        id: '7',
        title: 'Stop 3: Our Response to the Numbers.',
        image: './Images/TestImage2.png',
        description: 'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',        location: {
            center: { lon: -84.74236, lat: 47.44431 },
            zoom: 12.25,
            pitch: 60.00,
            bearing: -13.71
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
//--------------------------------------------------------------------------to here
    {
        id: '8',
        hidden: true,
        alignment: 'center',
        location: {
        },
        onChapterEnter: [
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
        id: '9',
        title: 'Stop 4: What areas are we focusing on?',
        image: './Images/TestImage2.png',
        description: 'The main areas that the Liberty Project works in is: Education, Health education, vocational training, trauma therapy.',
        location: {
            // center: { lon: -87.07819, lat: 48.78017 },
            // zoom: 13.13,
            // pitch: 60.00,
            // bearing: -159.41

            center: { lon: -84.66245, lat: 47.95360 },
            zoom: 9.59,
            pitch: 60.00,
            bearing: -88.23 
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
//--------------------------------------------------------------------------
    {
        id: '10',
        title: 'STOP 8: Trauma Therapy',
        image: './Images/TestImage2.png',
        description: '70% of Women suffer from PTSD in Mozambique, and with the growing civil unrest and violent conflict we are only seeing increases of this type of severe trauma. This is why we offer holistic care including counselling, so that women can work through things in a peaceful atmosphere. If you want to partner with us and see women restored and transformed, donate today!',
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
        id: '11',
        title: 'Stop 9: Why the Fundraiser?',
        image: './Images/TestImage2.png',
        description: 'Our Board Chair is a cyclist and thought as a challenge it would be great to bike from her current home in Thunder Bay to her old home in Peterborough County. And thus idea was born. Thanks to the Fleming College collaboration project, a student team was able to build this webpage and mapping application to show case the challenge and help people get connected. We are excited to see the world wide reach of this fun fitness challenge and fundraiser.',
        location: {
        // center: { lon: -83.77957, lat: 46.31815 },
        // zoom: 12.25,
        // pitch: 60.00,
        // bearing: -68.99
        center: { lon: -81.74764, lat: 46.27206 },
        zoom: 12.91,
        pitch: 60.00,
        bearing: -104.23
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
    }
        
    ]
};