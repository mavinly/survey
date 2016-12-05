import { SurveyUiPage } from './app.po';

describe('survey-ui App', function() {
  let page: SurveyUiPage;

  beforeEach(() => {
    page = new SurveyUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
