/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
declare namespace NodeJS {
  interface Global {
    testRequest: import('supertest').SuperTest<import('supertest').Test>;
  }
}
