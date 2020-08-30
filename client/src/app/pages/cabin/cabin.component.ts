// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services
import { UserService } from '../../services/user.service';

// START - USED SERVICES
/**
* UserService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * Cabin Component
 */
@Component({
    selector: 'app-cabin',
    templateUrl : './cabin.component.html',
    styleUrls: ['./cabin.component.css']
})
export class CabinComponent {

    constructor(
        private userService: UserService,
        private location: Location
        ) {

    }
}
