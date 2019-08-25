import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  
  navigateTo() {
    //browser.debugger();
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
  
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();

  // browser.pause();
  }
  //buscar héroe 
  enterHeroSearchInInput(searchHero: string) {
    element(by.id('search-box')).sendKeys(searchHero);    
    return element(by.css('.search-result'));    
  }

  //Navegar a un héroe desde la búsqueda
  goHeroSearchInInput(searchHero: string) {
    element(by.id('search-box')).sendKeys(searchHero);    
    element(by.css('.search-result')).click();    
  }

  //borrar heroe
  deleteHero(idHero: string) {
    //console.log('----***************************');
   element.all(by.xpath('//my-heroes/ul/li')).each(function(element, index) {
     
      element.all(by.cssContainingText('.badge', idHero)).each(function(el, index) {
        //el.getText().then(function (text) {
        
          element.all(by.css('.delete')).click();
          //console.log(index, text);
        //});
      });
   
    });
    //browser.sleep(5000);     
    }
  

  //Editar un heroe
    editHero(idHero:string,txtHero: string) {  
      browser.get('/detail/'+idHero);

      element(by.tagName('input')).clear();
      element(by.tagName('input')).sendKeys(txtHero);    
      element(by.buttonText('Save')).click();
    }


    getCurrentUrl() {  
      browser.sleep(3000);
      return browser.getCurrentUrl();
    }
    
  //Navegar a un héroe desde la lista de héroes
    goToHeroFromListHeros(nameHero: string){
//    console.log('----***************************');
     element.all(by.xpath('//my-heroes/ul/li')).each(function(element, index) {
   
    element.all(by.tagName('span')).last().getText().then(function (text) {
        if(text==nameHero){
          element.click();
        }
      });

    });
    //browser.sleep(3000);    
    element(by.buttonText('View Details')).click();
    
    }

    goHeroFromDashBoard(nameHero: string){
      element(by.xpath('//my-dashboard')).all(by.css('.col-1-4')).first().click();    
        
        }
  }