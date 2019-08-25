import { TourOfHeroesPage } from './app.po';
/*
describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});
*/
/*
describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('should add a new hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('TestMan');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

}
);*/

describe('Search heroes Dashboard ', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('should add a new hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('TestMan');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });
  //Buscar héroes 
  it('should set text to input search', () => {
    page.navigateTo();
    var text=page.enterHeroSearchInInput('Zero');
    expect(text.getText()).toEqual('Zero');
  });
  //y Navegar a un héroe desde la búsqueda

  //Eliminar un héroe
  it('should delete hero', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
    page.deleteHero('20');
    expect(page.getAllHeroes().count()).toBe(10);
  });

  //Editar un héroe
  it('should edit a hero', () => {
    //const currentHeroes = page.getAllHeroes().count();    
    page.editHero('0','TestMan');
    expect(page.getCurrentUrl()).toBe('http://localhost:49152/dashboard');
  });

  //Navegar a un héroe desde el dashboard
  it('should go to hero from dashboard', () => {
    page.navigateTo();
    page.goHeroFromDashBoard('Zero');
    //Tour of Heroes
    expect(page.getCurrentUrl()).toContain('/detail/');
  });

  //Navegar a un héroe desde la lista de héroes
  it('go to hero from list ', () => {
    page.navigateToHeroes();
    //const currentHeroes = page.getAllHeroes().count();
    page.goToHeroFromListHeros('Zero');
    expect(page.getCurrentUrl()).toContain('/detail/');
  });
//y Navegar a un héroe desde la búsqueda
  it('should set text to input search and go to hero edit', () => {
    page.navigateTo();
    page.goHeroSearchInInput('Zero');
    //Tour of Heroes
    expect(page.getCurrentUrl()).toContain('/detail/');
  });
  
});



