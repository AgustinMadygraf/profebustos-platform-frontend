module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {},
  moduleNameMapper: {
    // Mapea imports relativos internos ./*.js a .ts
    '^\.\/chatbot-ui\.js$': '<rootDir>/assets/js/chatbot-ui.ts',
    '^\.\/bot-logic\.js$': '<rootDir>/assets/js/bot-logic.ts',
    '^\.\/sound-player\.js$': '<rootDir>/assets/js/sound-player.ts',
    '^\.\/notification-badge\.js$': '<rootDir>/assets/js/notification-badge.ts',
    '^\.\/helpers\/(.*)\.js$': '<rootDir>/assets/js/helpers/$1.ts',
    '^\.\.\/chatbot-ui\.js$': '<rootDir>/assets/js/chatbot-ui.ts',
    '^\.\.\/bot-logic\.js$': '<rootDir>/assets/js/bot-logic.ts',
    '^\.\.\/sound-player\.js$': '<rootDir>/assets/js/sound-player.ts',
    '^\.\.\/notification-badge\.js$': '<rootDir>/assets/js/notification-badge.ts',
    '^assets/js/(.*)\.js$': '<rootDir>/assets/js/$1.ts',
    '^(\.{1,2}/.*)$': '$1',
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testMatch: ['<rootDir>/assets/js/__tests__/**/*.ts'],
  globals: {
    'ts-jest': {
      useESM: false,
    }
  },
  extensionsToTreatAsEsm: ['.ts'],
};
