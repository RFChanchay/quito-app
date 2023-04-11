import { Injectable } from '@angular/core';
//import SupabaseClient from '@supabase/supabase-js/dist/module/SupabaseClient';
import { environment } from 'src/environments/environment.prod';
import { AuthChangeEvent,createClient,Session, User,SupabaseClient } from "@supabase/supabase-js";
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabaseClient: SupabaseClient;

  constructor() { 
    this.supabaseClient = createClient(environment.supabaseUrl, environment.supabaseKey);
  }
  public getUser(): User|null {
    return this.supabaseClient.auth.user();
  }

  public getSession(): Session|null {
    return this.supabaseClient.auth.session();
  }

  public getProfile(): PromiseLike<any> {
    const user = this.getUser();

    return this.supabaseClient.from('profiles')
    .select('username, website, avatar_url')
    .eq('id', user?.id)
    .single();
  }

  public authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void): any {
    return this.supabaseClient.auth.onAuthStateChange(callback);
  }

  public signIn(email: string,password:string): Promise<any> {
    console.log(email);
    console.log(password);
    return this.supabaseClient.auth.signIn({
      email,
      password
    });
  }

  public signOut(): Promise<any> {
    return this.supabaseClient.auth.signOut();
  }

  public updateProfile(userUpdate: IUser): any {
    const user = this.getUser();

    const update = {
      username: userUpdate.name,
      website: userUpdate.website,
      id: user?.id,
      updated_at: new Date(),
    };

    return this.supabaseClient.from('profiles').upsert(update, {
      returning: 'minimal', // Do not return the value after inserting
    });
  }

  public createUser(emailF: string,passwordF:string): Promise<any> {
    //console.log(email);
    //console.log(password);
    return this.supabaseClient.auth.signUp({
      email:emailF,
      password:passwordF,
    });
  }

  async checkUserExists(email: string): Promise<boolean> {
    const { user, error } = await this.supabaseClient.auth.signIn({ email });
    console.log(!!user)
    return !!user;
  }
  
}
