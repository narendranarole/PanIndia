import { api, LightningElement } from 'lwc';

export default class Enrollcouse extends LightningElement {

   @api courseDetailInfo = {courseName:'Lightning WebComponent', courseDuration:'30 Days', courseFees:'10000',courseRating:'*****'}
}