import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import { NotFound } from './views/NotFound';
import { AdminLayout } from './layouts/AdminLayout';
import { ProtectedRoute } from './components/ProtectedRoute';

export const ROUTES = {
  ADMIN: '/admin',
  AUTH: '/'
};
