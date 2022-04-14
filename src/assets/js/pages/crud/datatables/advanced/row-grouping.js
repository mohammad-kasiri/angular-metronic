"use strict";
var KTDatatablesAdvancedRowGrouping = function() {

	var init = function() {
		var table = $('#kt_datatable');

		// begin first table
		table.DataTable({
			responsive: true,
			pageLength: 25,
			order: [[2, 'asc']],
			drawCallback: function(settings) {
				var api = this.api();
				var rows = api.rows({page: 'current'}).nodes();
				var last = null;

				api.column(2, {page: 'current'}).data().each(function(group, i) {
					if (last !== group) {
						$(rows).eq(i).before(
							'<tr class="group"><td colspan="10">' + group + '</td></tr>',
						);
						last = group;
					}
				});
			},
			columnDefs: [
				{
					// hide columns by index number
					targets: [0, 2],
					visible: false,
				},
				{
					targets: -1,
					title: 'عملیات',
					orderable: false,
					render: function(data, type, full, meta) {
						return '\
							<div class="dropdown dropdown-inline">\
								<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
	                                <i class="la la-cog"></i>\
	                            </a>\
							  	<div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
									<ul class="nav nav-hoverable flex-column">\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-edit"></i><span class="nav-text">Edit Details</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-leaf"></i><span class="nav-text">Update Status</span></a></li>\
							    		<li class="nav-item"><a class="nav-link" href="#"><i class="nav-icon la la-print"></i><span class="nav-text">Print</span></a></li>\
									</ul>\
							  	</div>\
							</div>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Edit details">\
								<i class="la la-edit"></i>\
							</a>\
							<a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
								<i class="la la-trash"></i>\
							</a>\
						';
					},
				},
				{
					targets: 8,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'در حال انجام', 'class': 'label-light-primary'},
							2: {'title': 'تحویل داده شده', 'class': ' label-light-danger'},
							3: {'title': 'لغو شده', 'class': ' label-light-primary'},
							4: {'title': 'موفق', 'class': ' label-light-success'},
							5: {'title': 'اطلاعات', 'class': ' label-light-info'},
							6: {'title': 'خطار', 'class': ' label-light-danger'},
							7: {'title': 'هشدار', 'class': ' label-light-warning'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="label label-lg font-weight-bold' + status[data].class + ' label-inline">' + status[data].title + '</span>';
					},
				},
				{
					targets: 9,
					render: function(data, type, full, meta) {
						var status = {
							1: {'title': 'برخط', 'state': 'danger'},
							2: {'title': 'خرده فروشی', 'state': 'primary'},
							3: {'title': 'مستقیم', 'state': 'success'},
						};
						if (typeof status[data] === 'undefined') {
							return data;
						}
						return '<span class="label label-' + status[data].state + ' label-dot mr-2"></span>' +
							'<span class="font-weight-bold text-' + status[data].state + '">' + status[data].title + '</span>';
					},
				},
			],
		});
	};

	return {

		//main function to initiate the module
		init: function() {
			init();
		},

	};

}();

jQuery(document).ready(function() {
	KTDatatablesAdvancedRowGrouping.init();
});
