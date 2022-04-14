import { Injectable } from '@angular/core';
import { CanActivate , RouterStateSnapshot , ActivatedRouteSnapshot} from '@angular/router';
import { Observable} from "rxjs";
import { CredentialService } from '../services/credentials.service';
import { Router } from '@angular/router';

@Injectable()

export class AdminGuard implements CanActivate  {
	constructor( private router : Router , 
				 private credentialService : CredentialService){}

	canActivate(next : ActivatedRouteSnapshot , state : RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean 
	{
		if (this.credentialService.forAdmin().isLoggedIn())	{
			return true;
		}

		this.router.navigate(['/login']);
		return false;
	}
}
