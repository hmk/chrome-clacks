const { getClacks, extinguishClacksIcon, illuminateClacksIcon } = require('../src/background');

describe('Clacks Overhead Icon state', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set the clacks icon to active if illuminated', () => {
    illuminateClacksIcon(1);
    
    expect(chrome.action.setIcon).toHaveBeenCalledWith({
      tabId: 1,
      path: {
        "19": "images/melanie_icon19.png",
        "38": "images/melanie_icon38.png"
      }
    });
    
    expect(chrome.action.setTitle).toHaveBeenCalledWith({
      tabId: 1,
      title: "Clacks icon is active"
    });
  });

  it('should set the clacks icon to disabled if disabled', () => {
    extinguishClacksIcon(1);
    
    expect(chrome.action.setIcon).toHaveBeenCalledWith({
      tabId: 1,
      path: {
        "19": "images/melanie_icon19_disabled.png",
        "38": "images/melanie_icon38_disabled.png"
      }
    });

    expect(chrome.action.setTitle).toHaveBeenCalledWith({
      tabId: 1,
      title: "Clacks icon is disabled"
    });
  });
});
