import { PolipackPage } from './app.po';

describe('polipack App', function() {
  let page: PolipackPage;

  beforeEach(() => {
    page = new PolipackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
