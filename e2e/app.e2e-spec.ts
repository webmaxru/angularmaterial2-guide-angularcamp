import { Angularmaterial2GuideAngularcampPage } from './app.po';

describe('angularmaterial2-guide-angularcamp App', function() {
  let page: Angularmaterial2GuideAngularcampPage;

  beforeEach(() => {
    page = new Angularmaterial2GuideAngularcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
