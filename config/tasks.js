const { create } = require('../tasks/create');
const { del } = require('../tasks/delete');
const { update } = require('../tasks/update');
const { list } = require('../tasks/list');
const { all } = require('../tasks/all');
const { clear } = require('../tasks/clear');

module.exports = {
    create,
    del,
    update,
    list,
    all,
    clear
}