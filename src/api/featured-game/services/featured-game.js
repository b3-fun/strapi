'use strict';

/**
 * featured-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::featured-game.featured-game');
