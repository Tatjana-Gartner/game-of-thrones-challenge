import { browser, element, by, ElementFinder } from 'protractor';

const expectedH1 = 'Tour of houses';
const expectedTitle = `${expectedH1}`;
const expectedH2 = 'My houses';
const targethouse = { id: 16, name: 'RubberMan' };
const nameSuffix = 'X';

class house {
  constructor(public id: number, public name: string) {}

  // Factory methods

  // Get house from s formatted as '<id> <name>'.
  static fromString(s: string): house {
    return new house(
      +s.substr(0, s.indexOf(' ')),
      s.substr(s.indexOf(' ') + 1),
    );
  }

  // Get house id and name from the given detail element.
  static async fromDetail(detail: ElementFinder): Promise<house> {
    // Get house id from the first <div>
    const id = await detail.all(by.css('div')).first().getText();
    // Get name from the h2
    const name = await detail.element(by.css('h2')).getText();
    return new house(
      +id.substr(id.indexOf(' ') + 1),
      name.substr(0, name.lastIndexOf(' '))
    );
  }
}

describe('Tutorial part 4', () => {
  beforeAll(() => browser.get(''));
  describe('Initial page', initialPageTests);
  describe('Select house', selecthouseTests);
  describe('Update house', updatehouseTests);
});

function initialPageTests() {
  it(`has title '${expectedTitle}'`, async () => {
    expect(await browser.getTitle()).toEqual(expectedTitle);
  });

  it(`has h1 '${expectedH1}'`, async () => {
    await expectHeading(1, expectedH1);
  });

  it(`has h2 '${expectedH2}'`, async () => {
    await expectHeading(2, expectedH2);
  });

  it('has the right number of houses', async () => {
    const page = getPageElts();
    expect(await page.houses.count()).toEqual(10);
  });

  it('has no selected house and no house details', async () => {
    const page = getPageElts();
    expect(await page.selected.isPresent()).toBeFalsy('selected house');
    expect(await page.houseDetail.isPresent()).toBeFalsy('no house detail');
  });
}

function selecthouseTests() {
  it(`selects ${targethouse.name} from house list`, async () => {
    const house = element(by.cssContainingText('li span.badge', targethouse.id.toString()));
    await house.click();
    // Nothing specific to expect other than lack of exceptions.
  });

  it(`has selected ${targethouse.name}`, async () => {
    const page = getPageElts();
    const expectedText = `${targethouse.id} ${targethouse.name}`;
    expect(await page.selected.getText()).toBe(expectedText);
  });

  it('shows selected house details', async () => {
    const page = getPageElts();
    const houseElement = element(by.cssContainingText('li span.badge', targethouse.id.toString()));
    await houseElement.click();
    const message = element.all(by.css('app-root > app-messages > div > div')).get(1);
    const house = await house.fromDetail(page.houseDetail);
    expect(house.id).toEqual(targethouse.id);
    expect(house.name).toEqual(targethouse.name.toUpperCase());
    // Message text contain id number matches the house.id number
    expect(await message.getText()).toContain(await houseElement.getAttribute('id'));
  });
}

function updatehouseTests() {
  it(`can update house name`, async () => {
    await addTohouseName(nameSuffix);
    // Nothing specific to expect other than lack of exceptions.
  });

  it(`shows updated house name in details`, async () => {
    const page = getPageElts();
    const house = await house.fromDetail(page.houseDetail);
    const newName = targethouse.name + nameSuffix;
    expect(house.id).toEqual(targethouse.id);
    expect(house.name).toEqual(newName.toUpperCase());
  });

  it(`shows updated house name in list`, async () => {
    const page = getPageElts();
    const house = house.fromString(await page.selected.getText());
    const newName = targethouse.name + nameSuffix;
    expect(house.id).toEqual(targethouse.id);
    expect(house.name).toEqual(newName);
  });

}

async function addTohouseName(text: string): Promise<void> {
  const input = element(by.css('input'));
  await input.sendKeys(text);
}

async function expectHeading(hLevel: number, expectedText: string): Promise<void> {
  const hTag = `h${hLevel}`;
  const hText = await element(by.css(hTag)).getText();
  expect(hText).toEqual(expectedText, hTag);
}

function getPageElts() {
  return {
    houses: element.all(by.css('app-root li')),
    selected: element(by.css('app-root li.selected')),
    houseDetail: element(by.css('app-root > div, app-root > app-houses > app-house-detail > div'))
  };
}
