// const express = require('express');
import express from 'express'
export const dashboardRoutes = express.Router();
import { isAuthenticated} from '../Middlewares/protectedRoutes.js';
import { getDashboardStats }  from '../Controllers/dashboard.controller.js';

dashboardRoutes.get('/',isAuthenticated, getDashboardStats);

// module.exports = dashboardRoutes;
