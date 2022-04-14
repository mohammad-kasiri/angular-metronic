import { Injectable } from '@angular/core';
import { CanActivate , ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from "rxjs";
import { CredentialService } from '../services/credentials.service';
import { Router } from '@angular/router';

@Injectable()

export class AdminGuard implements CanActivate {
	constructor( private router : Router , 
				 private credentialService : CredentialService){}

	CanActivate(next : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<boolean> | Promis<boolean> | boolean 
	{
		if (this.credentialService.forUser().isLoggedIn())	{
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
