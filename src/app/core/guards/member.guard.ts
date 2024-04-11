import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { IdentityService } from '../services/identity.service';

export const memberGuard: CanActivateFn = (route, state): Observable<UrlTree | boolean> => {
  const identity = inject(IdentityService);
  const router = inject(Router);
  return identity.user$.pipe(
    map((user) => !!user.username || router.createUrlTree(['login']))
  );
};
