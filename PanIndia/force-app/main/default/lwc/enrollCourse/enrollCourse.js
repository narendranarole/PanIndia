import { api, LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';

export default class EnrollCourse extends NavigationMixin(LightningElement ){

    @api courseDetailInfo = {courseName:'Lightning WebComponent', courseDuration:'30 Days', courseFees:'10000',courseRating:'*****'}

    handleNavigationToCourse(){

        this[NavigationMixin.Navigate]({

            type : 'standard__webpage',
            attributes :{

                url:'https://www.google.com/'
            }

        });

    }
}