import { NextFunction, Request, Response } from 'express'

export const contentType = (_: Request, res: Response, next: NextFunction): void => {
  res.contentType('json')
  next()
}
