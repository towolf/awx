/*************************************************
 * Copyright (c) 2016 Ansible, Inc.
 *
 * All Rights Reserved
 *************************************************/

 import {templateUrl} from '../../shared/template-url/template-url.factory';

var hostEventModal = {
 	name: 'jobDetail.host-event',
 	url: '/host-event/:eventId',
 	controller: 'HostEventController',
 	params:{
 		hostResults: {
 			value: null,
        	squash: false,	
 		}
 	},
 	templateUrl: templateUrl('job-detail/host-event/host-event-modal'),
 	resolve: {
 		features: ['FeaturesService', function(FeaturesService){
 			return FeaturesService.get();
 		}],
        event: ['JobDetailService','$stateParams', function(JobDetailService, $stateParams) {
             return JobDetailService.getRelatedJobEvents($stateParams.id, {
 				id: $stateParams.eventId
 			}).success(function(res){ return res.results[0]})
         }]
 	},
 	onExit: function($state){
	    // close the modal
	    // using an onExit event to handle cases where the user navs away using the url bar / back and not modal "X"
	    $('#HostEvent').modal('hide');
	    // hacky way to handle user browsing away via URL bar
	    $('.modal-backdrop').remove();
	    $('body').removeClass('modal-open');
	}
 }

 var hostEventDetails = {
 	name: 'jobDetail.host-event.details',
 	url: '/details',
 	controller: 'HostEventController',
 	templateUrl: templateUrl('job-detail/host-event/host-event-details'),
 	resolve: {
 		features: ['FeaturesService', function(FeaturesService){
 			return FeaturesService.get();
 		}]
 	}
 }

 var hostEventJson = {
  	name: 'jobDetail.host-event.json',
 	url: '/json',
 	controller: 'HostEventController',
 	templateUrl: templateUrl('job-detail/host-event/host-event-json'),
 	resolve: {
 		features: ['FeaturesService', function(FeaturesService){
 			return FeaturesService.get();
 		}]
 	}
 };
 var hostEventTiming = {
   	name: 'jobDetail.host-event.timing',
 	url: '/timing',
 	controller: 'HostEventController',
 	templateUrl: templateUrl('job-detail/host-event/host-event-timing'),
 	resolve: {
 		features: ['FeaturesService', function(FeaturesService){
 			return FeaturesService.get();
 		}]
 	}
 };
 var hostEventStdout = {
 	  	name: 'jobDetail.host-event.stdout',
 	url: '/stdout',
 	controller: 'HostEventController',
 	templateUrl: templateUrl('job-detail/host-event/host-event-stdout'),
 	resolve: {
 		features: ['FeaturesService', function(FeaturesService){
 			return FeaturesService.get();
 		}]
 	}
 };

 export {hostEventDetails, hostEventJson, hostEventTiming, hostEventStdout, hostEventModal}