'use strict';

/**
 * technology-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::technology-service.technology-service');
