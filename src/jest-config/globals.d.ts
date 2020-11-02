// eslint-disable-next-line no-unused-vars
declare namespace NodeJS {
  // eslint-disable-next-line no-unused-vars
  interface Global {
    // eslint-disable-next-line no-undef
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
