import { WebAppLeslieMcCarthyPage } from './app.po';

describe('web-app-leslie-mc-carthy App', function() {
  let page: WebAppLeslieMcCarthyPage;

  beforeEach(() => {
    page = new WebAppLeslieMcCarthyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
