$(function(){
    /*
        Make sure all feed object is vaild
    */
    describe('New Feed Selection', function(){
        // Spec 1
        // Test to make sure that feed to not empty and defined
        it('Feed Defined', function(){
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        // Spec 2
        // Testing the url of every feed item to be vaild;
        it('Url is set', function(){
            allFeeds.forEach(function(feed){
                expect(feed.url).toBeTruthy();
            });
        });
        // Spec 3
        // Testing the name of every feed item to vaild;
        it('Feed Names', function(){
            allFeeds.forEach(function(feed){
                expect(feed.name).toBeTruthy;
            });
        });
    });
    /*
        Testing for the menu
    */
    describe('The Menu', function(){
        // Spec 4
        // Make Sure body is hidden when loading page
        it('Hidden Body', function(){
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
        // Spec 5
        // When menu is click does it open
        it('Menu Open', function(){
            let menu = $('.menu-icon-link');

            menu.click(); //click to show
            expect($('body').hasClass('menu-hidden')).toBe(false);
            menu.click(); // click to hide
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });
    /*
        Test for Initial Entry
    */
   describe('Initial Entries', function(){
        // Spec 6
        // Test for at least 1 entry
        beforeEach(function(done){
            loadFeed(0, done);
        });

        it('On Screen', function(){
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });
   });
   /*
        
   */
   describe('New Feed Selection', function(){
    let oldFeed;
    let newFeed;

    beforeEach(function (done) {
      loadFeed(0, function () {
        oldFeed = $('.feed').html();
        done();
      });
    });
    //  Spec 7
    // Testing if content loaded on screen
    it('Did feed load', function (done) {
        loadFeed(1, function () {
          newFeed = $('.feed').html();
          expect(oldFeed).toBeDefined();
          expect(newFeed).toBeDefined();
          expect(newFeed).not.toEqual(oldFeed);
          done();
        });
      });
   });
}());