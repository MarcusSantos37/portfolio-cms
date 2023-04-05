'use strict';

/**
 * technology-app service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technology-app.technology-app');
