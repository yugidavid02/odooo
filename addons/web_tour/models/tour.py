# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models


class Tour(models.Model):

    _name = "web_tour.tour"
    _description = "Tours"
    _log_access = False

    name = fields.Char(string="Tour name", required=True)
    user_id = fields.Many2one('res.users', string='Consumed by')

    @api.model
    def consume(self, name):
        """ Sets tour 'name' as consumed for the current user, meaning that
            this tour won't be active anymore for that user """
        self.create({'name': name, 'user_id': self.env.uid})

    @api.model
    def get_consumed_tours(self):
        """ Returns the list of consumed tours for the current user """
        return [t.name for t in self.search([('user_id', '=', self.env.uid)])]
