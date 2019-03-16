var app = angular.module("mcgill-ai", []);

app.controller("emailController", function($scope, $http) {
    $scope.loading = true;
    $scope.emailFormData = {};
    $scope.email_success_message = "";
    $scope.result = "";

    $scope.sendEmail = function() {
        if (
            !$scope.emailFormData.email ||
            !$scope.emailFormData.name ||
            !$scope.emailFormData.message
        ) {
            $scope.email_success_message =
                "It looks like you have some missing fields. Please fill out all fields on the form.";
        } else {
            $http
                .post("/email", $scope.emailFormData)
                .success(function(result) {
                    $scope.emailFormData = {};
                    if (result.success) {
                        $scope.email_success_message =
                            "Your email was successfully sent!";
                    } else {
                        $scope.email_success_message =
                            "Seems like our server is not working correctly. Please contact us through Facebook.";
                    }
                });
        }
    };
});

app.controller("calendarController", function($scope, $http) {
    $scope.loading = true;
    $scope.events = [];

    $http
        .get("/calendar/jj20b4sjl11i6p1kfpajekbhho@group.calendar.google.com")
        .success(res => {
            res.calendarEvents.forEach(event => {
                // DateTime formatting
                startDate = new Date(event.start.dateTime || event.start.date);
                endDate = new Date(event.end.dateTime || event.end.date);
                options = {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
                };
                if (event.start.date) {
                    options.timeZone = "UTC";
                    delete options.hour;
                    delete options.minute;
                    delete options.hour12;
                }
                event.start.formatted = startDate.toLocaleString(
                    "en-US",
                    options
                );
                event.end.formatted = endDate.toLocaleString("en-US", options);

                // Event title formatting
                title = event.summary;
                colonIndex = title.indexOf(":");
                if (colonIndex > 0) {
                    event.summary =
                        title.substr(0, colonIndex + 1) +
                        "\n" +
                        title.substr(colonIndex + 1);
                }
            });

            $scope.events = res.calendarEvents;
        });
});

app.controller("execsController", function($scope, $http) {
    $scope.loading = true;
    $scope.execChunks = [];

    $http.get("/execs").success(res => {
        N = res.execProfiles.length;
        for (i = 0; i < N; i += Math.min(3, N - i))
            $scope.execChunks.push(res.execProfiles.slice(i, i + 3));
    });
});

app.controller("execRecruitmentController", function($scope, $http) {

    $scope.loading = true;
    $scope.message
    $scope.appOpen = false;
    $scope.closedMessage = 'EXECUTIVE TEAM APPLICATIONS ARE NOW CLOSED.'

    $scope.positions = [
        {
            'name': 'VP Finance',
            'responsibilities': [
                'Manage all expenses and revenues for the organization.',
                'Point of communication with EUS.',
                'Attend all required EUS clubs meetings.',
                'Build and maintain a strong relationship with EUS.',
                'Oversee blues pub organization and logistics.'
            ],
            'requirements': [
                'Knowledge in basic finance and accounting.',
                'Familiarity with EUS financial structure and guidebook.'
            ],
            'questions': [
                {
                    id: 0,
                    text: 'Do you have any previous experience within EUS? Or holding a previous VP Finance position at McGill? If so, which one?',
                },
                {
                    id: 1,
                    text: 'Do you have any previous experience working with finance and budgeting? Elaborate.',
                }
            ]
        },
        {
            'name': 'VP Events (Industry)',
            'responsibilities': [
                'Organize regular industry events that include but not limited to industry speakers, industry panels, etc.',
                'Lead organization of annual ImplementAI Hackathon with VP Events (Community).',
                'Work closely with VP Communications in devising marketing strategies.'
            ],
            'requirements': [
                'Proven ability or prior experience in event planning.',
                'Detail oriented and strong skills in logistics',
                'Familiarity with AI ecosystems within and beyond Montreal.'
            ],
            'questions': [
                {
                    id: 2,
                    text: 'Give an example of an event you have organized for a large audience - please feel free to link us to an event page or a website as well.',
                },
                {
                    id: 3,
                    text: 'What has been your favourite event in the Montreal AI community (including McGill AI events) and why?',
                },
                {
                    id: 4,
                    text: 'Describe what a successful AI hackathon looks like. What is the key to accomplishing this?',
                }
            ]
        },
        {
            'name': 'VP Events (Community)',
            'responsibilities': [
                'Organize regular community/social events that include but not limited to research talks, trivia nights, etc.',
                'Lead organization of annual ImplementAI Hackathon with VP Events (Community).',
                'Work closely with VP Communications in devising marketing strategies.'
            ],
            'requirements': [
                'Proven ability or prior experience in event planning.',
                'Detail oriented and strong skills in logistics',
                'Familiarity with McGill admin system (room booking, department structure, etc).'
            ],
            'questions': [
                {
                    id: 5,
                    text: 'If you became VP Events for McGill AI, what McGill club would you collaborate with and why?',
                },
                {
                    id: 6,
                    text: 'What events should the McGill AI Society continue holding next year? What new events should we create? Why?',
                },
                {
                    id: 7,
                    text: 'The McGill AI Society has struggled in cultivating a strong AI community on campus. As VP Events (Community) of the McGill AI Society, what would you do?',
                }
            ]
        },
        {
            'name': 'VP Communications',
            'responsibilities': [
                'Devise creative marketing techniques to ensure alignment between public image and overall mission, lead marketing for all McGill AI events and initiatives, and ensure active social media presence.',
                'Send regular mailchimp newsletters to club subscribers.',
                'Maintain and manage both the McGill AI website and Medium blog.',
                'Responding to inquiries through email and social media platforms, including but not limited to Facebook, Instagram, and Twitter.',
                'Create a website and sponsorship package for the upcoming ImplementAI 2019 hackathon.'
            ],
            'requirements': [
                'Proven ability or prior experience in communications and/or media.',
                'Active presence on social media and other online platforms.',
                'Experience with design software such as Photoshop, Illustrator, and InDesign',
                'Experience with basic web development using HTML/CSS and Javascript frameworks'
            ],
            'questions': [
                {
                    id: 8,
                    text: 'Provide us with a link to your design portfolio, or samples of graphic design. (Please feel free to attach anything that you feel is indicative of your current abilities, whether it be a a link to a social media platform you were responsible for maintaining, or a folder of graphics you’ve made in the past),',
                },
                {
                    id: 9,
                    text: 'Name three components of a successful marketing strategy. In your role as VP Comms for the McGill AI Society, how would you implement and ensure that these strategies are carried out?',
                },
                {
                    id: 10,
                    text: 'How would your past experience(s) prepare you for a VP Communications position with the McGill AI Society?',
                }
            ]
        },
        {
            'name': 'Academic Lecturer (2)',
            'responsibilities': [
                'Creating cohesive, clear, lecture material for the MAIS202 bootcamp including, but not limited to lecture slides, coding tutorials in python, etc.',
                'Work with Technical Project Managers to connect lecture content with assignments and deliverables, via methods including but not limited nreating quizzes/assignments with applied knowledge'
            ],
            'requirements': [
                'Proven ability or past experience in running workshops.',
                'Strong communication and presentation skills',
                'Strong theoretical foundations in artificial intelligence concepts and mathematics behind them.',
                'Strong knowledge of machine learning algorithm implementations and good industry practices.',
                'Familiarity in structure of MAIS 202 course.'
            ],
            'questions': [
                {
                    id: 11,
                    text: 'Briefly describe your machine learning background',
                },
                {
                    id: 12,
                    text: 'Link us to materials that demonstrate your understanding of fundamental machine learning algorithms (this can be an ML project on github, a personal experiment, paper review, mathematical derivations, etc)',
                },
                {
                    id: 13,
                    text: 'Do you have experience hosting workshops or teaching others. If so, elaborate.',
                },
                {
                    id: 17,
                    text: 'Describe a field/area in machine learning that you are passionate about.'
                }
            ]
        },
        {
            'name': 'Technical Project Manager (2-4)',
            'responsibilities': [
                'Prepare, assign, and grade homework assignments for MAIS202',
                'Oversee MAIS202 participants in completion of their final projects',
                'Maintain and manage McGill AI Github as well as build any required internal systems.',
                'General applied machine learning and software specialist on the McGill AI Society.'
            ],
            'requirements': [
                'Proven ability or past experience in tutoring other students.',
                'Intermediate knowledge in artificial intelligence / machine learning',
                'Strong knowledge of machine learning algorithm implementations, good industry practices',
                'Intermediate to strong knowledge in software development practices.'
            ],
            'questions': [
                {
                    id: 14,
                    text: 'Describe your journey on how you learned ML. How would you use this experience to mentor others?',
                },
                {
                    id: 15,
                    text: 'Have you ever managed a project. Describe in more detail about the process and result.',
                },
                {
                    id: 16,
                    text: 'Describe in detail an AI/ML project you have worked on. Explain your mathematical approach, discuss the libraries you used, and summarize the results. Attach a link to the project.',
                }
            ]
        }
    ]

    $scope.activePositionIndex = 0;

    $scope.switchActivePosition = function(index) {
        $scope.activePositionIndex = index;
    };

    

    $scope.formData = {
        'name': '',
        'email': '',
        'degree': '',
        'faculty': '',
        'year': '',
        'first_choice': '',
        'second_choice': '',
        'third_choice': '',
        'linkedin': '',
        'github': '',
        'resume': '',
        'answers': ['','','','','','','','','','','','','','','','','',''] 
    };

    $scope.submitApplication = function() {
        if (
            !$scope.formData.name ||
            !$scope.formData.email ||
            !$scope.formData.degree ||
            !$scope.formData.faculty ||
            !$scope.formData.year ||
            !$scope.formData.first_choice ||
            !$scope.formData.linkedin ||
            !$scope.formData.github ||
            !$scope.formData.resume
        ) { $scope.message ="It looks like you have some missing required fields. Please fill out all fields on the form.";
        } else {
            $http
                .post("/submit-application", $scope.formData)
                .success(function(result) {
                    if (result.success) {
                        $scope.message = "Your application was successfully submitted! Expect to hear back with a decision by March 16.";
                        $scope.formData = {};
                    } else {
                        $scope.message = "Seems like our server is not working correctly. Please trying submitting again later or contact us through Facebook.";
                    }
                });
        }
    };

});
