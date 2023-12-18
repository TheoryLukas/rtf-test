sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'project1/test/integration/FirstJourney',
		'project1/test/integration/pages/FooList',
		'project1/test/integration/pages/FooObjectPage'
    ],
    function(JourneyRunner, opaJourney, FooList, FooObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('project1') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheFooList: FooList,
					onTheFooObjectPage: FooObjectPage
                }
            },
            opaJourney.run
        );
    }
);