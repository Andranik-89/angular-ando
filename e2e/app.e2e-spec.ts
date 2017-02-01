import { AndoRepoPage } from './app.po';

describe('ando-repo App', function() {
  let page: AndoRepoPage;

  beforeEach(() => {
    page = new AndoRepoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
