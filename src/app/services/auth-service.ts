import { Injectable } from '@angular/core';
import { getAuth, signInWithCredential, signInWithEmailAndPassword, User } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public usuario: User | null = null;

  private auth = getAuth();

  login(email:string, password:string) {
    return signInWithEmailAndPassword(
      this.auth, email, password
    );
  }
}
