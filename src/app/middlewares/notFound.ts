import type { NextFunction, Request, Response } from 'express';
// import httpStatus from 'http-status';
// Use standard status code since http-status might not be installed

const notFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    message: 'API Not Found',
    error: '',
  });
};

export default notFound;
