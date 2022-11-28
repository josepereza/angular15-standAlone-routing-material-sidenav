import { inject, Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AdminService } from './admin.service';

@Injectable()
export class CanActiveAdminService implements CanActivate {
  #adminService = inject(AdminService);

  canActivate() {
    return this.#adminService.hasAdmin;
  }
}