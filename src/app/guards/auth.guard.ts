import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SupabaseService } from '../services/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate{
  constructor (
    private authService:SupabaseService,
    private router: Router
  ){
    
  }
  /*async canLoad(): Promise<boolean> {
    try{
      const user = await this.authService.getUser();
      console.log(user);
      if(user){
        return true;
      }else{
        this.navigate('/auth');
        return false;
      }
    }catch(e){
      console.log(e);
      this.navigate('/auth');
      return false;

    }
      
  }*/
  navigate(url){
    this.router.navigateByUrl(url,{replaceUrl:true});
  }

  canActivate(): boolean {
    const user = this.authService.getUser();

    if (user) {
      // Si el usuario está autenticado, se permite acceder a la ruta protegida.
      return true;
    } else {
      // Si el usuario no está autenticado, se redirige a la página de inicio de sesión.
      this.router.navigateByUrl('/auth/login',{replaceUrl:true});
      return false;
    }
  }
}
