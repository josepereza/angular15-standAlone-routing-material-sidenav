import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  #hasAdmin = false;
  get hasAdmin(): boolean {
    return this.#hasAdmin;
  }

  set hasAdmin(value: boolean) {
    this.#hasAdmin = value;
  }
}