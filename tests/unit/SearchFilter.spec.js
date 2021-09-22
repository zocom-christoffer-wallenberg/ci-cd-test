import { shallowMount } from '@vue/test-utils';
import SearchFilter from '@/components/SearchFilter.vue';

/**
 * Skapa en komponent för sökning/filtrering. Komponenten ska innehålla ett textfält och 
 * visa en lista med alla element som matchar texten i textfältet. 
 * Den ska uppdateras varje gång användaren trycker ner ett tecken. 
 * Använd en lista med namn på djur: [cat, dog, parrot, goldfish, horse, elephant, ant, snake, crow, cow, eagle, rhinoceros, chimpanzee]. 
 * Använd följande testfall:
    tom sträng matchar alla element
    "d" matchar "dog" och "goldfish"
    "ow" matchar "crow" och "cow"
 */


describe('SearchFilter.vue', () => {
  let wrapper, data;
  beforeEach(() => {
    data = ['cat', 'dog', 'parrot', 'goldfish', 'horse', 'elephant', 'ant', 'snake', 'crow', 'cow', 'eagle', 'rhinoceros', 'chimpanzee'];
    wrapper = shallowMount(SearchFilter, {
      data: () => {
        return {
          animals: data
        }
      }
    });
  });

  it('should return all animals when query is empty string', () => {
    const animalsCount = wrapper.findAll('ul > li').length;

    expect(animalsCount).toBe(data.length);
  });

  it('should return "dog" and "goldfish" when query is "d"', async () => {
    const inputElem = wrapper.find('input');
    await inputElem.setValue('d');

    const filteredAnimals = wrapper.findAll('ul > li').wrappers;
    const hasDog = filteredAnimals.some(li => li.text() === 'dog');
    const hasGoldfish = filteredAnimals.some(li => li.text() === 'goldfish');

    expect(hasDog && hasGoldfish).toBe(true);
    expect(filteredAnimals.length).toBe(2);
  });

  it('should return "crow" and "cow" when query is "ow"', async () => {
    const inputElem = wrapper.find('input');
    await inputElem.setValue('ow');

    const filteredAnimals = wrapper.findAll('ul > li').wrappers;
    const hasCrow = filteredAnimals.some(li => li.text() === 'crow');
    const hasCow = filteredAnimals.some(li => li.text() === 'cow');

    expect(hasCrow && hasCow).toBe(true);
    expect(filteredAnimals.length).toBe(2);
  });
})
