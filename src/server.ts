import { Server } from '@overnightjs/core'
import bodyParser from 'body-parser'
import { Application } from 'express'

import connection from './data/databaseConnection'

export class SetupServer extends Server {
  constructor (private port = 1313) {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    await this.docsSetup()
    this.setupControllers()
    await this.databaseSetup()
    // must be the last
    this.setupErrorHandlers()
  }

  private setupExpress (): void {
    this.app.use(bodyParser.json())
  }

  private async docsSetup (): Promise<void> {

  }

  private setupControllers (): void {
    this.addControllers([])
  }

  private setupErrorHandlers (): void {
  }

  public getApp (): Application {
    return this.app
  }

  private async databaseSetup (): Promise<void> {
    await connection.create()
  }

  public async close (): Promise<void> {
    this.close()
  }

  public start (): void {
  }
}
