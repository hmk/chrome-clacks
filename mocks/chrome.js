global.chrome = {
  action: {
    setIcon: jest.fn(),
    setTitle: jest.fn(),
  },
  runtime: {
    getURL: jest.fn((path) => path),
    onMessage: {
      addListener: jest.fn(),
    },
  },
  tabs: {
    onRemoved: {
      addListener: jest.fn(),
    },
  },
  webRequest: {
    onHeadersReceived: {
      addListener: jest.fn(),
    },
  },
  webNavigation: {
    onCommitted: {
      addListener: jest.fn(),
    },
  },
};
